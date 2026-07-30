"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";
import { LuEye, LuImagePlus, LuTrash2, LuUpload } from "react-icons/lu";

type WizardData = {
    placeType: string;
    area: string;
    designCode: string;
    designName: string;
    designImage: string;
    locationImage: File | null;
    city: string;
    name: string;
    phone: string;
    notes: string;
};

type ChoiceButtonProps = {
    active: boolean;
    label: string;
    onClick: () => void;
};

type DesignOptionProps = {
    active: boolean;
    code: string;
    title: string;
    category: string;
    image: string;
    onClick: () => void;
};

function ChoiceButton({ active, label, onClick }: ChoiceButtonProps) {
    return (
        <button type="button" onClick={onClick} className={`flex min-h-[68px] items-center justify-center rounded-[16px] border px-4 text-custom16 font-[600] transition-all duration-300 md:min-h-[78px] ${active ? "border-[2px] border-primary bg-primary/5 text-primary shadow-[0_10px_30px_rgba(22,95,174,0.12)]" : "border-[#D9DEE5] bg-white text-blackGrey hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)]"}`}>
            {label}
        </button>
    );
}

function DesignOption({ active, code, title, category, image, onClick }: DesignOptionProps) {
    return (
        <motion.button type="button" layout onClick={onClick} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} className={`group overflow-hidden rounded-[22px] border bg-white text-start transition-all duration-300 ${active ? "border-[2px] border-primary shadow-[0_20px_50px_rgba(22,95,174,0.16)]" : "border-[#E4E7EC] shadow-[0_10px_35px_rgba(15,23,42,0.05)] hover:border-primary/40"}`}>
            <div className="relative aspect-[1.15/1] overflow-hidden">
                <Image src={image} alt={title} fill sizes="(max-width: 767px) 100vw, (max-width: 990px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />

                <span className="absolute start-4 top-4 rounded-full border border-[#B9E8FF] bg-white/95 px-3 py-1.5 text-[11px] font-[700] text-[#0BA5EC] shadow-sm">
                    {code}
                </span>

                {active && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                        ✓
                    </motion.span>
                )}
            </div>

            <div className="p-4 md:p-5">
                <span className="mb-2 block text-[12px] text-[#98A2B3]">{category}</span>

                <h3 className="text-custom16 font-[700] text-blackGrey">{title}</h3>
            </div>
        </motion.button>
    );
}

export default function FloorDesignWizard() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const previewUrlRef = useRef<string>("");

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [imagePreview, setImagePreview] = useState<string>("");
    const [validationError, setValidationError] = useState<string>("");

    const [formData, setFormData] = useState<WizardData>({
        placeType: "",
        area: "",
        designCode: "",
        designName: "",
        designImage: "",
        locationImage: null,
        city: "",
        name: "",
        phone: "",
        notes: "",
    });

    const stepTitles: Record<number, string> = {
        1: "نوع المكان",
        2: "المساحة",
        3: "اختر التصميم",
        4: "صورة المكان",
        5: "المدينة",
        6: "ادخل بياناتك",
        7: "مراجعة",
    };

    const progressPercentage = (currentStep / 7) * 100;

    const updateFormData = <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
        setFormData((previousData) => ({
            ...previousData,
            [key]: value,
        }));

        setValidationError("");
    };

    const getCurrentStepError = () => {
        if (currentStep === 1 && !formData.placeType) {
            return "من فضلك اختر نوع المكان أولًا.";
        }

        if (currentStep === 2 && (!formData.area || Number(formData.area) <= 0)) {
            return "من فضلك أدخل مساحة صحيحة أكبر من صفر.";
        }

        if (currentStep === 3 && !formData.designCode) {
            return "من فضلك اختر أحد التصاميم.";
        }

        if (currentStep === 5 && !formData.city) {
            return "من فضلك اختر المدينة.";
        }

        if (currentStep === 6 && formData.name.trim().length < 3) {
            return "من فضلك أدخل الاسم الكامل بشكل صحيح.";
        }

        const phoneDigits = formData.phone.replace(/\D/g, "");

        if (currentStep === 6 && phoneDigits.length < 8) {
            return "من فضلك أدخل رقم جوال صحيح.";
        }

        return "";
    };

    const scrollToWizard = () => {
        window.setTimeout(() => {
            sectionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    };

    const handleNext = () => {
        if (currentStep >= 7) {
            return;
        }

        const error = getCurrentStepError();

        if (error) {
            setValidationError(error);
            return;
        }

        setValidationError("");
        setDirection(1);
        setCurrentStep((previousStep) => previousStep + 1);
    };

    const handlePrevious = () => {
        if (currentStep <= 1) {
            return;
        }

        setValidationError("");
        setDirection(-1);
        setCurrentStep((previousStep) => previousStep - 1);
    };

    const selectDesign = (code: string, name: string, image: string) => {
        setFormData((previousData) => ({
            ...previousData,
            designCode: code,
            designName: name,
            designImage: image,
        }));

        setValidationError("");
    };

    const handleLocationImage = (file: File | null) => {
        if (!file) {
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.type)) {
            setValidationError("الصيغ المسموحة هي JPG وPNG وWEBP فقط.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setValidationError("حجم الصورة يجب ألا يتجاوز 5 ميجابايت.");
            return;
        }

        if (previewUrlRef.current) {
            URL.revokeObjectURL(previewUrlRef.current);
        }

        const previewUrl = URL.createObjectURL(file);

        previewUrlRef.current = previewUrl;
        setImagePreview(previewUrl);

        setFormData((previousData) => ({
            ...previousData,
            locationImage: file,
        }));

        setValidationError("");
    };

    const removeLocationImage = () => {
        if (previewUrlRef.current) {
            URL.revokeObjectURL(previewUrlRef.current);
            previewUrlRef.current = "";
        }

        setImagePreview("");

        setFormData((previousData) => ({
            ...previousData,
            locationImage: null,
        }));
    };

    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        };
    }, []);

    const handleSendWhatsApp = () => {
        const whatsappNumber = "+12345678";

        const message = `
طلب تصميم أرضية جديد

نوع المكان: ${formData.placeType}
المساحة: ${formData.area} م²
التصميم: ${formData.designName} (${formData.designCode})
صورة المكان: ${formData.locationImage ? "تم اختيار صورة وسيتم إرسالها في المحادثة" : "سيتم إرسالها لاحقًا"}
المدينة: ${formData.city}
الاسم: ${formData.name}
رقم الجوال: ${formData.phone}
الملاحظات: ${formData.notes || "لا توجد"}
    `.trim();

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    return (
        <section ref={sectionRef} dir="rtl" className="min-h-screen scroll-mt-[100px] bg-white py-[60px] md:py-[90px]">
            <div className="container">
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-7">
                        <span className="mb-3 block text-custom14 font-[500] text-[#98A2B3]">
                            طلب تصور أرضية
                        </span>

                        <div className="flex items-end justify-between gap-5">
                            <h1 className="text-[28px] font-[700] leading-[1.4] text-[#101828] md:text-[36px]">
                                {stepTitles[currentStep]}
                            </h1>

                            <span className="shrink-0 text-custom14 font-[500] text-[#667085]">
                                الخطوة {currentStep} من 7
                            </span>
                        </div>

                        <div className="relative mt-6 h-[6px] overflow-hidden rounded-full bg-[#E3F5FC]">
                            <motion.div initial={false} animate={{ width: `${progressPercentage}%` }} transition={{ type: "spring", stiffness: 130, damping: 22 }} className="absolute end-0 top-0 h-full rounded-full bg-[#0BA5EC]" />
                        </div>
                    </div>

                    <AnimatePresence mode="sync" initial={false} custom={direction}>
                        <motion.div key={currentStep} custom={direction} initial={{ opacity: 0, x: direction === 1 ? 25 : -25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction === 1 ? -25 : 25 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>                            {currentStep === 1 && (
                            <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-6">
                                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                                    <ChoiceButton active={formData.placeType === "منزل"} label="منزل" onClick={() => updateFormData("placeType", "منزل")} />
                                    <ChoiceButton active={formData.placeType === "فيلا"} label="فيلا" onClick={() => updateFormData("placeType", "فيلا")} />
                                    <ChoiceButton active={formData.placeType === "شقة"} label="شقة" onClick={() => updateFormData("placeType", "شقة")} />
                                    <ChoiceButton active={formData.placeType === "مكتب"} label="مكتب" onClick={() => updateFormData("placeType", "مكتب")} />
                                    <ChoiceButton active={formData.placeType === "محل تجاري"} label="محل تجاري" onClick={() => updateFormData("placeType", "محل تجاري")} />
                                    <ChoiceButton active={formData.placeType === "مسبح"} label="مسبح" onClick={() => updateFormData("placeType", "مسبح")} />
                                    <ChoiceButton active={formData.placeType === "حمام"} label="حمام" onClick={() => updateFormData("placeType", "حمام")} />
                                    <ChoiceButton active={formData.placeType === "مطبخ"} label="مطبخ" onClick={() => updateFormData("placeType", "مطبخ")} />
                                </div>
                            </div>
                        )}

                            {currentStep === 2 && (
                                <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
                                    <label htmlFor="area" className="mb-3 block text-custom14 font-[700] text-blackGrey">
                                        المساحة التقريبية بالمتر المربع
                                    </label>

                                    <div className="relative">
                                        <input id="area" type="number" min="1" inputMode="decimal" value={formData.area} onChange={(event) => updateFormData("area", event.target.value)} placeholder="مثال: 45" className="h-[56px] w-full rounded-[12px] border border-[#E4E7EC] bg-white px-4 pe-[70px] text-custom15 text-blackGrey outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />

                                        <span className="absolute end-4 top-1/2 -translate-y-1/2 text-custom14 font-[600] text-[#98A2B3]">
                                            م²
                                        </span>
                                    </div>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        <button type="button" onClick={() => updateFormData("area", "20")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "20" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>
                                            20 م²
                                        </button>

                                        <button type="button" onClick={() => updateFormData("area", "30")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "30" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>
                                            30 م²
                                        </button>

                                        <button type="button" onClick={() => updateFormData("area", "40")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "40" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>
                                            40 م²
                                        </button>

                                        <button type="button" onClick={() => updateFormData("area", "50")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "50" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>
                                            50 م²
                                        </button>

                                        <button type="button" onClick={() => updateFormData("area", "60")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "60" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>
                                            60 م²
                                        </button>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div>
                                    <div className="mb-7 text-center">
                                        <span className="mb-3 inline-flex rounded-full border border-[#E4E7EC] px-4 py-1.5 text-[12px] text-[#667085]">
                                            كتالوج التصاميم
                                        </span>

                                        <h2 className="text-[24px] font-[700] text-[#101828] md:text-[32px]">
                                            اختر التصميم الذي يلامس ذوقك
                                        </h2>

                                        <p className="mt-3 text-custom14 leading-7 text-[#667085]">
                                            اختر التصميم الأقرب للمكان الذي ترغب في تنفيذه.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        <DesignOption active={formData.designCode === "AE-3D-001"} code="AE-3D-001" title="أمواج المحيط 3D" category="إيبوكسي ثلاثي الأبعاد" image="/images/proj-1.png" onClick={() => selectDesign("AE-3D-001", "أمواج المحيط 3D", "/images/proj-1.png")} />

                                        <DesignOption active={formData.designCode === "AE-MT-002"} code="AE-MT-002" title="لؤلؤ ميتاليك فضي" category="ميتاليك" image="/images/proj-2.png" onClick={() => selectDesign("AE-MT-002", "لؤلؤ ميتاليك فضي", "/images/proj-2.png")} />

                                        <DesignOption active={formData.designCode === "AE-MR-003"} code="AE-MR-003" title="عروق ذهبية على عاج" category="رخامي" image="/images/proj-3.png" onClick={() => selectDesign("AE-MR-003", "عروق ذهبية على عاج", "/images/proj-3.png")} />

                                        <DesignOption active={formData.designCode === "AE-PR-004"} code="AE-PR-004" title="كريمي لؤلؤي هادئ" category="لؤلؤي" image="/images/proj-1.png" onClick={() => selectDesign("AE-PR-004", "كريمي لؤلؤي هادئ", "/images/proj-1.png")} />

                                        <DesignOption active={formData.designCode === "AE-MR-005"} code="AE-MR-005" title="أبيض بعروق ذهبية" category="رخامي" image="/images/proj-2.png" onClick={() => selectDesign("AE-MR-005", "أبيض بعروق ذهبية", "/images/proj-2.png")} />

                                        <DesignOption active={formData.designCode === "AE-BK-006"} code="AE-BK-006" title="أسود بعروق ذهب" category="رخامي" image="/images/proj-3.png" onClick={() => selectDesign("AE-BK-006", "أسود بعروق ذهب", "/images/proj-3.png")} />
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
                                    <p className="mb-5 text-center text-custom14 leading-7 text-[#667085]">
                                        صورة المكان تساعدنا على إعداد تصور دقيق. يمكنك تخطي هذه الخطوة وإرسال الصورة لاحقًا في محادثة الواتساب.
                                    </p>

                                    {!imagePreview ? (
                                        <label htmlFor="location-image" className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center rounded-[22px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 text-center transition hover:border-primary hover:bg-primary/[0.03] md:min-h-[280px]">
                                            <LuImagePlus size={46} className="mb-4 text-[#9FB4BF]" />

                                            <span className="mb-2 text-custom15 font-[700] text-blackGrey">
                                                اسحب الصورة هنا
                                            </span>

                                            <span className="text-custom13 text-[#667085]">
                                                أو اضغط لاختيار صورة من جهازك
                                            </span>

                                            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-custom12 font-[600] text-primary shadow-sm">
                                                <LuUpload />
                                                اختيار الصورة
                                            </span>

                                            <span className="mt-3 text-[11px] text-[#98A2B3]">
                                                JPG أو PNG أو WEBP — بحد أقصى 5 ميجابايت
                                            </span>

                                            <input id="location-image" type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => handleLocationImage(event.target.files?.[0] || null)} className="hidden" />
                                        </label>
                                    ) : (
                                        <div className="relative overflow-hidden rounded-[22px] border border-[#E4E7EC]">
                                            <div className="relative min-h-[320px]">
                                                <Image src={imagePreview} alt="صورة المكان" fill unoptimized className="object-contain" />
                                            </div>

                                            <button type="button" onClick={removeLocationImage} aria-label="حذف الصورة" className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-error shadow-lg transition hover:scale-105">
                                                <LuTrash2 size={20} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            {currentStep === 5 && (
                                <div className="min-h-[330px] rounded-[26px] border border-[#E4E7EC] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-6">
                                    <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                                        <ChoiceButton active={formData.city === "الرياض"} label="الرياض" onClick={() => updateFormData("city", "الرياض")} />
                                        <ChoiceButton active={formData.city === "جدة"} label="جدة" onClick={() => updateFormData("city", "جدة")} />
                                        <ChoiceButton active={formData.city === "الدمام"} label="الدمام" onClick={() => updateFormData("city", "الدمام")} />
                                        <ChoiceButton active={formData.city === "مكة المكرمة"} label="مكة المكرمة" onClick={() => updateFormData("city", "مكة المكرمة")} />
                                        <ChoiceButton active={formData.city === "المدينة المنورة"} label="المدينة المنورة" onClick={() => updateFormData("city", "المدينة المنورة")} />
                                        <ChoiceButton active={formData.city === "الخبر"} label="الخبر" onClick={() => updateFormData("city", "الخبر")} />
                                        <ChoiceButton active={formData.city === "الطائف"} label="الطائف" onClick={() => updateFormData("city", "الطائف")} />
                                        <ChoiceButton active={formData.city === "القصيم"} label="القصيم" onClick={() => updateFormData("city", "القصيم")} />
                                    </div>
                                </div>
                            )}

                            {currentStep === 6 && (
                                <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="name" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                                                الاسم الكامل
                                            </label>

                                            <input id="name" type="text" autoComplete="name" value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} placeholder="اسمك الكامل" className="h-[54px] w-full rounded-[12px] border border-[#E4E7EC] px-4 text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                                                رقم الجوال
                                            </label>

                                            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={formData.phone} onChange={(event) => updateFormData("phone", event.target.value)} placeholder="+966 5X XXX XXXX" className="h-[54px] w-full rounded-[12px] border border-[#E4E7EC] px-4 text-end text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                                        </div>

                                        <div>
                                            <label htmlFor="notes" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                                                ملاحظات إضافية <span className="font-[400] text-[#98A2B3]">(اختياري)</span>
                                            </label>

                                            <textarea id="notes" rows={4} value={formData.notes} onChange={(event) => updateFormData("notes", event.target.value)} placeholder="ألوان مفضلة أو تفاصيل خاصة" className="w-full resize-none rounded-[12px] border border-[#E4E7EC] px-4 py-3 text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 7 && (
                                <div className="overflow-hidden rounded-[26px] border border-[#E4E7EC] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
                                    {formData.designImage && (
                                        <div className="relative h-[220px] w-full md:h-[280px]">
                                            <Image src={formData.designImage} alt={formData.designName} fill className="object-cover" />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                            <div className="absolute bottom-5 start-5 text-white">
                                                <span className="mb-1 block text-custom12 opacity-80">{formData.designCode}</span>
                                                <h3 className="text-[22px] font-[700]">{formData.designName}</h3>
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-5 md:p-7">
                                        <div className="divide-y divide-[#EAECF0]">
                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">نوع المكان</span>
                                                <strong className="text-custom15 font-[700] text-blackGrey">{formData.placeType}</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">المساحة</span>
                                                <strong className="text-custom15 font-[700] text-blackGrey">{formData.area} م²</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">التصميم</span>
                                                <strong className="text-custom15 font-[700] leading-7 text-blackGrey">{formData.designName} ({formData.designCode})</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] items-center gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">الصورة</span>

                                                {formData.locationImage && imagePreview ? (
                                                    <button type="button" onClick={() => window.open(imagePreview, "_blank", "noopener,noreferrer")} className="flex w-fit items-center gap-2 rounded-[8px] border border-primary/20 bg-primary/5 px-3 py-2 text-custom14 font-[700] text-primary transition-all hover:border-primary hover:bg-primary hover:text-white">
                                                        <LuEye size={18} />
                                                        عرض الصورة
                                                    </button>
                                                ) : (
                                                    <strong className="text-custom15 font-[700] leading-7 text-blackGrey">
                                                        سيتم إرسالها لاحقًا في المحادثة
                                                    </strong>
                                                )}
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">المدينة</span>
                                                <strong className="text-custom15 font-[700] text-blackGrey">{formData.city}</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">الاسم</span>
                                                <strong className="text-custom15 font-[700] text-blackGrey">{formData.name}</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">الجوال</span>
                                                <strong dir="ltr" className="text-end text-custom15 font-[700] text-blackGrey">{formData.phone}</strong>
                                            </div>

                                            <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
                                                <span className="text-custom14 text-[#667085]">ملاحظات</span>
                                                <strong className="text-custom15 font-[700] leading-7 text-blackGrey">{formData.notes || "لا توجد"}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence>
                        {validationError && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} role="alert" className="mt-5 rounded-[12px] border border-error/20 bg-error/5 px-4 py-3 text-custom14 font-[600] text-error">
                                {validationError}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <button type="button" disabled={currentStep === 1} onClick={handlePrevious} className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-[#D0D5DD] bg-white px-5 text-custom14 font-[700] text-[#475467] transition-colors duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary active:bg-primary/10 disabled:cursor-not-allowed disabled:border-[#EAECF0] disabled:bg-[#F9FAFB] disabled:text-[#D0D5DD] sm:w-[200px]">
                            السابق
                        </button>

                        {currentStep < 7 ? (
                            <button type="button" onClick={handleNext} className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#0BA5EC] px-5 text-custom14 font-[700] text-white transition-colors duration-200 hover:bg-[#0796D7] active:bg-[#0788C2] sm:w-[220px]">
                                التالي
                            </button>
                        ) : (
                            <button type="button" onClick={handleSendWhatsApp} className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-[#003B4D] px-5 text-custom14 font-[700] text-white transition-colors duration-200 hover:bg-[#002F3D] active:bg-[#002630] sm:w-[240px]">
                                إرسال عبر الواتساب
                                <FaWhatsapp size={21} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}