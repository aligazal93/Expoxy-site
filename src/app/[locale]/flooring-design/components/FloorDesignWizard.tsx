"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

import { useFormData } from "@/app/hooks/useFormData";

import type { FormDesign } from "@/app/types/formData";
import type { WizardData } from "@/app/types/wizard";
import StepPlaceType from "../steps/StepPlaceType";
import StepArea from "../steps/StepArea";
import StepDesign from "../steps/StepDesign";
import StepLocationImage from "../steps/StepLocationImage";
import StepCity from "../steps/StepCity";
import StepContactInfo from "../steps/StepContactInfo";
import StepReview from "../steps/StepReview";
import { useHome } from "@/app/hooks/useHome";
import { useCreateOrder } from "@/app/hooks/useCreateOrder";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface FloorDesignWizardProps {
    locale: string;
}

const TOTAL_STEPS = 7;

export default function FloorDesignWizard({ locale }: FloorDesignWizardProps) {
    const router = useRouter();
    const normalizedLocale = locale?.toLowerCase().split("-")[0];
    const isArabic = normalizedLocale === "ar";
    const { data: homeData } = useHome(locale);

    const sectionRef = useRef<HTMLElement | null>(null);
    const previewUrlRef = useRef("");
    const { mutateAsync: submitOrder, isPending } = useCreateOrder();


    const { data: formOptions, isLoading, isError, refetch } = useFormData(locale);

    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState<1 | -1>(1);
    const [imagePreview, setImagePreview] = useState("");
    const [validationError, setValidationError] = useState("");

    const [formData, setFormData] = useState<WizardData>({
        placeTypeId: null,
        placeType: "",
        area: "",
        designId: null,
        designCode: "",
        designName: "",
        designImage: "",
        locationImage: null,
        areaId: null,
        city: "",
        name: "",
        phone: "",
        notes: "",
    });

    const stepTitles: Record<number, string> = {
        1: isArabic ? "نوع المكان" : "Place Type",
        2: isArabic ? "المساحة" : "Area",
        3: isArabic ? "اختر التصميم" : "Choose Design",
        4: isArabic ? "صورة المكان" : "Space Image",
        5: isArabic ? "المدينة" : "City",
        6: isArabic ? "أدخل بياناتك" : "Your Information",
        7: isArabic ? "مراجعة البيانات" : "Review Information",
    };

    const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

    const updateFormData = <K extends keyof WizardData>(key: K, value: WizardData[K]) => {
        setFormData((previousData) => ({
            ...previousData,
            [key]: value,
        }));

        setValidationError("");
    };

    const selectPlaceType = (id: number, name: string) => {
        setFormData((previousData) => ({
            ...previousData,
            placeTypeId: id,
            placeType: name,
        }));

        setValidationError("");
    };

    const selectDesign = (design: FormDesign) => {
        setFormData((previousData) => ({
            ...previousData,
            designId: design.id,
            designCode: design.code,
            designName: design.name,
            designImage: design.image,
        }));

        setValidationError("");
    };

    useEffect(() => {
        console.log("Current wizard form data:", formData);
    }, [formData]);

    const selectCity = (id: number, name: string) => {
        setFormData((previousData) => ({
            ...previousData,
            areaId: id,
            city: name,
        }));

        setValidationError("");
    };

    const getCurrentStepError = () => {
        if (currentStep === 1 && !formData.placeTypeId) {
            return isArabic ? "من فضلك اختر نوع المكان أولًا." : "Please choose a place type.";
        }

        if (currentStep === 2 && (!formData.area || Number(formData.area) <= 0)) {
            return isArabic ? "من فضلك أدخل مساحة صحيحة أكبر من صفر." : "Please enter a valid area greater than zero.";
        }

        if (currentStep === 3 && !formData.designCode) {
            return isArabic ? "من فضلك اختر أحد التصاميم." : "Please choose a design.";
        }

        if (currentStep === 5 && !formData.areaId) {
            return isArabic ? "من فضلك اختر المدينة." : "Please choose a city.";
        }

        if (currentStep === 6 && formData.name.trim().length < 3) {
            return isArabic ? "من فضلك أدخل الاسم الكامل بشكل صحيح." : "Please enter a valid full name.";
        }

        const phoneDigits = formData.phone.replace(/\D/g, "");

        if (currentStep === 6 && phoneDigits.length < 8) {
            return isArabic ? "من فضلك أدخل رقم جوال صحيح." : "Please enter a valid phone number.";
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
        if (currentStep >= TOTAL_STEPS) {
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
        scrollToWizard();
    };

    const handlePrevious = () => {
        if (currentStep <= 1) {
            return;
        }

        setValidationError("");
        setDirection(-1);
        setCurrentStep((previousStep) => previousStep - 1);
        scrollToWizard();
    };

    const handleLocationImage = (file: File | null) => {
        if (!file) {
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

        if (!allowedTypes.includes(file.type)) {
            setValidationError(isArabic ? "الصيغ المسموحة هي JPG وPNG وWEBP فقط." : "Allowed formats are JPG, PNG and WEBP only.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setValidationError(isArabic ? "حجم الصورة يجب ألا يتجاوز 5 ميجابايت." : "The image size must not exceed 5 MB.");
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

        setValidationError("");
    };

    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        };
    }, []);

    const handleSendWhatsApp = () => {
        const whatsappNumber = homeData?.informations?.whatsapp || "";

        const arabicMessage = `
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

        const englishMessage = `
New flooring design request

Place type: ${formData.placeType}
Area: ${formData.area} m²
Design: ${formData.designName} (${formData.designCode})
Space image: ${formData.locationImage ? "An image was selected and will be sent in the conversation" : "The image will be sent later"}
City: ${formData.city}
Name: ${formData.name}
Phone: ${formData.phone}
Notes: ${formData.notes || "No notes"}
        `.trim();

        const message = isArabic ? arabicMessage : englishMessage;

        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <StepPlaceType formData={formData} placeTypes={formOptions?.places_types ?? []} selectPlaceType={selectPlaceType} />;

            case 2:
                return <StepArea formData={formData} updateFormData={updateFormData} />;

            case 3:
                return <StepDesign formData={formData} designs={formOptions?.designs ?? []} selectDesign={selectDesign} />;

            case 4:
                return <StepLocationImage imagePreview={imagePreview} handleLocationImage={handleLocationImage} removeLocationImage={removeLocationImage} />;

            case 5:
                return <StepCity formData={formData} areas={formOptions?.areas ?? []} selectCity={selectCity} />;

            case 6:
                return <StepContactInfo formData={formData} updateFormData={updateFormData} />;

            case 7:
                return <StepReview formData={formData} imagePreview={imagePreview} />;

            default:
                return null;
        }
    };

    if (isLoading) {
        return (
            <section className="min-h-[600px] bg-white py-[60px] md:py-[90px]">
                <div className="container">
                    <div className="mx-auto max-w-[1100px] animate-pulse">
                        <div className="mb-3 h-[18px] w-[150px] rounded-[6px] bg-[#EAECF0]" />
                        <div className="mb-6 h-[42px] w-[300px] max-w-full rounded-[8px] bg-[#EAECF0]" />
                        <div className="mb-8 h-[6px] w-full rounded-full bg-[#EAECF0]" />

                        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="h-[78px] rounded-[16px] bg-[#EAECF0]" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (isError || !formOptions) {
        return (
            <section className="bg-white py-[60px] md:py-[90px]">
                <div className="container">
                    <div className="mx-auto max-w-[700px] rounded-[20px] border border-error/20 bg-error/5 p-8 text-center">
                        <h2 className="mb-3 text-[20px] font-[700] text-blackGrey">
                            {isArabic ? "تعذر تحميل بيانات النموذج" : "Unable to load form data"}
                        </h2>

                        <p className="mb-5 text-custom14 leading-7 text-[#667085]">
                            {isArabic ? "حدث خطأ أثناء تحميل أنواع الأماكن والتصاميم والمدن." : "An error occurred while loading place types, designs and cities."}
                        </p>

                        <button type="button" onClick={() => void refetch()} className="rounded-[10px] bg-primary px-6 py-3 text-custom14 font-[700] text-white transition hover:bg-primary/90">
                            {isArabic ? "إعادة المحاولة" : "Try Again"}
                        </button>
                    </div>
                </div>
            </section>
        );
    }


   const handleSubmitOrder = async () => {
        setValidationError("");

        if (!formData.placeTypeId) {
            setValidationError(isArabic ? "من فضلك اختر نوع المكان." : "Please choose a place type.");
            return;
        }

        if (!formData.area || Number(formData.area) <= 0) {
            setValidationError(isArabic ? "من فضلك أدخل مساحة صحيحة." : "Please enter a valid area.");
            return;
        }

        if (!formData.designId) {
            setValidationError(isArabic ? "من فضلك اختر التصميم." : "Please choose a design.");
            return;
        }

        if (!formData.areaId) {
            setValidationError(isArabic ? "من فضلك اختر المدينة." : "Please choose a city.");
            return;
        }

        if (formData.name.trim().length < 3) {
            setValidationError(isArabic ? "من فضلك أدخل الاسم بشكل صحيح." : "Please enter a valid name.");
            return;
        }

        const phoneDigits = formData.phone.replace(/\D/g, "");

        if (phoneDigits.length < 8) {
            setValidationError(isArabic ? "من فضلك أدخل رقم جوال صحيح." : "Please enter a valid phone number.");
            return;
        }

        try {
            await submitOrder({
                user_name: formData.name.trim(),
                user_phone: formData.phone.trim(),
                notes: formData.notes.trim(),
                area: formData.area,
                design_id: formData.designId,
                area_id: formData.areaId,
                place_type_id: formData.placeTypeId,
                image: formData.locationImage,
            });

            toast.success(
                isArabic
                    ? "تم إرسال طلبك بنجاح، وسيتم التواصل معك قريبًا."
                    : "Your request has been submitted successfully."
            );

            router.push(`/${locale}`);
        } catch (error: unknown) {
            console.error("Create order error:", error);

            toast.error(
                isArabic
                    ? "تعذر إرسال الطلب، من فضلك حاول مرة أخرى."
                    : "Unable to submit your request. Please try again."
            );
        }
    };

    return (
        <section ref={sectionRef} dir={isArabic ? "rtl" : "ltr"} className="min-h-screen scroll-mt-[100px] bg-white py-[60px] md:py-[90px]">
            <div className="container">
                <div className="mx-auto max-w-[1100px]">
                    <div className="mb-7">
                        <span className="mb-3 block text-custom14 font-[500] text-[#98A2B3]">
                            {isArabic ? "طلب تصور أرضية" : "Floor Design Request"}
                        </span>

                        <div className="flex items-start justify-between gap-5">
                            <h1 className="text-[28px] font-[700] leading-[1.4] text-[#101828] md:text-[36px]">
                                {stepTitles[currentStep]}
                            </h1>

                            <span className="shrink-0 text-custom14 font-[500] text-[#667085]">
                                {isArabic ? `الخطوة ${currentStep} من ${TOTAL_STEPS}` : `Step ${currentStep} of ${TOTAL_STEPS}`}
                            </span>
                        </div>

                        <div className="relative mt-6 h-[6px] overflow-hidden rounded-full bg-[#E3F5FC]">
                            <motion.div initial={false} animate={{ width: `${progressPercentage}%` }} transition={{ type: "spring", stiffness: 130, damping: 22 }} className="absolute start-0 top-0 h-full rounded-full bg-[#0BA5EC]" />
                        </div>
                    </div>

                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                        <motion.div key={currentStep} custom={direction} initial={{ opacity: 0, x: direction === 1 ? 25 : -25 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: direction === 1 ? -25 : 25 }} transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}>
                            {renderCurrentStep()}
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
                            {isArabic ? "السابق" : "Previous"}
                        </button>

                        {currentStep < TOTAL_STEPS ? (
                            <button type="button" onClick={handleNext} className="flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#0BA5EC] px-5 text-custom14 font-[700] text-white transition-colors duration-200 hover:bg-[#0796D7] active:bg-[#0788C2] sm:w-[220px]">
                                {isArabic ? "التالي" : "Next"}
                            </button>
                        ) : (
                            <button type="button" disabled={isPending} onClick={() => void handleSubmitOrder()} className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-[10px] bg-[#0BA5EC] px-5 text-custom14 font-[700] text-white transition-colors duration-200 hover:bg-[#0796D7] active:bg-[#0788C2] disabled:cursor-not-allowed disabled:opacity-60 sm:w-[240px]">
                                {isPending
                                    ? isArabic
                                        ? "جاري إرسال الطلب..."
                                        : "Submitting..."
                                    : isArabic
                                        ? "إرسال الطلب"
                                        : "Submit Request"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}