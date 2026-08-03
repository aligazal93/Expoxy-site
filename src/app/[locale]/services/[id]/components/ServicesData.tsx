"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import Questions from "./Questions";
import { useServiceDetails } from "@/app/hooks/useServiceDetails";

type ServicesDataProps = {
    locale: string;
    id: string | number;
};

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardsContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ServicesData({ locale, id }: ServicesDataProps) {
    const isArabic = locale === "ar";

    const { data: service, isLoading, isError, refetch } = useServiceDetails(id, locale);

    if (isLoading) {
        return (
            <section className="bg-white py-[50px] md:py-[80px]" dir={isArabic ? "rtl" : "ltr"}>
                <div className="container">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="col-span-12 lg:col-span-9">
                            <div className="mb-[25px] h-[38px] w-[220px] animate-pulse rounded-[8px] bg-[#F2F4F7]" />

                            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="h-[160px] animate-pulse rounded-[16px] bg-[#F2F4F7]" />
                                ))}
                            </div>

                            <div className="mt-[25px] aspect-[16/8] w-full animate-pulse rounded-[20px] bg-[#F2F4F7]" />
                        </div>

                        <div className="col-span-12 lg:col-span-3">
                            <div className="h-[350px] animate-pulse rounded-[20px] bg-[#F2F4F7]" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (isError) {
        return (
            <section className="flex min-h-[450px] items-center justify-center bg-white px-[15px] py-[60px]" dir={isArabic ? "rtl" : "ltr"}>
                <div className="w-full max-w-[520px] rounded-[20px] border border-[#FECACA] bg-[#FEF2F2] px-[25px] py-[35px] text-center">
                    <h2 className="mb-[12px] text-[22px] font-[700] text-[#991B1B]">
                        {isArabic ? "تعذر تحميل تفاصيل الخدمة" : "Unable to Load Service Details"}
                    </h2>

                    <p className="mb-[25px] text-[14px] font-[400] leading-[1.9] text-[#7F1D1D]">
                        {isArabic ? "حدث خطأ أثناء تحميل بيانات الخدمة، من فضلك حاول مرة أخرى." : "An error occurred while loading the service details. Please try again."}
                    </p>

                    <button type="button" onClick={() => refetch()} className="min-h-[46px] rounded-[8px] bg-primary px-[25px] text-[14px] font-[700] text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(22,95,174,0.2)]">
                        {isArabic ? "إعادة المحاولة" : "Try Again"}
                    </button>
                </div>
            </section>
        );
    }

    if (!service) {
        return (
            <section className="flex min-h-[450px] items-center justify-center bg-white px-[15px] py-[60px]" dir={isArabic ? "rtl" : "ltr"}>
                <div className="w-full max-w-[520px] rounded-[20px] border border-[#E4E7EC] bg-[#F9FAFB] px-[25px] py-[40px] text-center">
                    <h2 className="mb-[12px] text-[24px] font-[700] text-blackGrey">
                        {isArabic ? "الخدمة غير موجودة" : "Service Not Found"}
                    </h2>

                    <p className="mb-[25px] text-[14px] font-[400] leading-[1.9] text-greyColor">
                        {isArabic ? "لم نتمكن من العثور على بيانات هذه الخدمة." : "We could not find any data for this service."}
                    </p>

                    <Link href={`/${locale}`} className="inline-flex min-h-[46px] items-center justify-center rounded-[8px] bg-primary px-[25px] text-[14px] font-[700] text-white transition-all duration-300 hover:-translate-y-[2px]">
                        {isArabic ? "العودة إلى الرئيسية" : "Back to Home"}
                    </Link>
                </div>
            </section>
        );
    }

    const methodologies = Array.isArray(service.methodologies) ? service.methodologies : [];

    function isValidImageUrl(imageUrl?: string | null) {
        if (!imageUrl) return false;

        try {
            const url = new URL(imageUrl);
            const fileName = url.pathname.split("/").filter(Boolean).pop();

            if (!fileName || fileName === "services") {
                return false;
            }

            return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/i.test(fileName);
        } catch {
            return false;
        }
    }

    const hasSecondImage = isValidImageUrl(service?.second_image);

    return (
        <section className="overflow-visible bg-white py-[0px] md:py-[80px] lg:py-[0px]" dir={isArabic ? "rtl" : "ltr"}>
            <div className="container">
                <div className="grid grid-cols-12 items-start gap-[30px] lg:gap-[35px] xl:gap-[48px]">
                    <div className="col-span-12 lg:col-span-9">
                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mb-[25px] text-[20px] font-[700] leading-[1.4] text-blackGrey md:mb-[24px] md:text-[28px] lg:text-[32px]">
                            {isArabic ? "منهجية العمل" : "Work Methodology"}
                        </motion.h2>

                        {methodologies.length > 0 ? (
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={cardsContainer} className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
                                {methodologies.map((methodology, index) => (
                                    <motion.article key={`${methodology.name}-${index}`} variants={cardAnimation} className="group rounded-[16px] border border-[#E5E5E5] bg-white px-[20px] py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:px-[22px] md:py-[25px]">
                                        <h3 className="mb-[14px] text-[16px] font-[700] text-blackGrey md:mb-[12px]">
                                            {methodology.name || (isArabic ? "منهجية العمل" : "Work Methodology")}
                                        </h3>

                                        <p className="text-[14px] font-[400] leading-[2] text-greyColor">
                                            {methodology.content || (isArabic ? "لا توجد تفاصيل متاحة حاليًا." : "No details are currently available.")}
                                        </p>
                                    </motion.article>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="rounded-[16px] border border-[#E4E7EC] bg-[#F9FAFB] px-[20px] py-[35px] text-center">
                                <p className="text-[15px] font-[500] text-greyColor">
                                    {isArabic ? "لا توجد منهجيات مضافة لهذه الخدمة حاليًا." : "No methodologies have been added for this service yet."}
                                </p>
                            </div>
                        )}

                        {hasSecondImage && service?.second_image && (
                            <motion.div initial={{ opacity: 0, y: 35, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="group relative mt-[25px] aspect-[4/3] w-full overflow-hidden rounded-[16px] sm:aspect-[16/9] md:rounded-[20px] lg:aspect-[16/8]">
                                <Image src={service.second_image} alt={service.name || (isArabic ? "صورة الخدمة" : "Service image")} fill sizes="(max-width: 539px) 100vw, (max-width: 989px) 90vw, 75vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                            </motion.div>
                        )}

                        {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} className="mt-[30px] md:mt-[40px]">
                            <h2 className="mb-[18px] text-[26px] font-[700] leading-[1.4] text-blackGrey md:text-[30px] lg:text-[34px]">
                                {isArabic ? "لماذا الأولى للإيبوكسي؟" : "Why Al Oula Epoxy?"}
                            </h2>

                            <p className="mb-[20px] text-[16px] font-[400] leading-[2] text-[#707070]">
                                {isArabic ? "في الأولى للإيبوكسي لا نقدم عملًا على تنفيذ أرضيات جميلة فقط، بل نركز على تقديم تجربة متكاملة تمنح العميل الثقة منذ اللحظة الأولى وحتى اكتمال المشروع." : "At Al Oula Epoxy, we do more than create beautiful floors. We provide a complete experience that gives our clients confidence from the first consultation until project completion."}
                            </p>

                            <ul className="mx-4 mb-6 space-y-[10px] pe-[18px] text-[13px] font-[400] leading-[1.8] text-[#707070] md:text-[14px]">
                                <li className="list-disc">
                                    {isArabic ? "استشارة متخصصة لفهم احتياجات كل مساحة." : "Specialized consultation to understand every space."}
                                </li>

                                <li className="list-disc">
                                    {isArabic ? "تصاميم عصرية تناسب ذوق العميل وطبيعة المكان." : "Modern designs tailored to the client and the space."}
                                </li>

                                <li className="list-disc">
                                    {isArabic ? "تصور بصري يساعدك على اتخاذ القرار قبل التنفيذ." : "A visual concept that helps you decide before implementation."}
                                </li>

                                <li className="list-disc">
                                    {isArabic ? "خامات إيبوكسي عالية الجودة وتشطيبات احترافية." : "High-quality epoxy materials and professional finishes."}
                                </li>

                                <li className="list-disc">
                                    {isArabic ? "تنفيذ دقيق وفق أعلى معايير الجودة." : "Precise implementation according to high quality standards."}
                                </li>

                                <li className="list-disc">
                                    {isArabic ? "التزام بالمواعيد ومتابعة في جميع مراحل العمل." : "Commitment to deadlines and follow-up at every stage."}
                                </li>
                            </ul>
                        </motion.div> */}

                        <h2 className="mb-0 border-y border-[#CFCECD] py-[30px] text-[26px] font-[700] leading-[1.4] text-blackGrey md:text-[30px] lg:mb-[18px] lg:text-[34px]">
                            {isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
                        </h2>

                        <Questions locale={locale} />
                    </div>

                    <motion.aside initial={{ opacity: 0, x: isArabic ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="col-span-12 lg:sticky lg:top-[110px] lg:col-span-3">
                        <div className="relative mb-[20px] overflow-hidden rounded-[20px] bg-[#0FA9E6] px-[22px] py-[25px] text-center text-white shadow-[0_20px_50px_rgba(15,169,230,0.15)] md:px-[30px] md:py-[30px]">
                            <div className="pointer-events-none absolute -end-[60px] -top-[60px] h-[150px] w-[150px] rounded-full bg-white/[0.08]" aria-hidden="true" />
                            <div className="pointer-events-none absolute -bottom-[80px] -start-[70px] h-[180px] w-[180px] rounded-full bg-white/[0.06]" aria-hidden="true" />

                            <div className="relative z-10">
                                <span className="mb-[10px] block text-[12px] font-[500] text-white/90">
                                    {isArabic ? "ابدأ مشروعك معنا" : "Start Your Project with Us"}
                                </span>

                                <h3 className="mb-[15px] text-[22px] font-[700] leading-[1.5] md:text-[24px]">
                                    {isArabic ? "هل لديك فكرة لأرضيتك؟" : "Do You Have an Idea for Your Floor?"}
                                </h3>

                                <p className="mb-[22px] text-[13px] font-[400] leading-[1.9] text-white/90">
                                    {isArabic ? "شاركنا نوع المكان أو تفاصيل المساحة وسنساعدك في اختيار التصميم المناسب ونقدم لك تصورًا أوليًا للتنفيذ بدون تعقيد." : "Share the type of venue or details of the space with us, and we will help you select the right design and provide a straightforward preliminary concept."}
                                </p>

                                <Link href={`/${locale}/flooring-design?service_id=${service.id}`} className="group/btn flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-white px-[16px] text-[14px] font-[600] text-primary shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]">
                                    {isArabic ? "أطلب تصميم أرضيتك" : "Order Your Floor Design"}

                                    <span className="transition-transform duration-300 group-hover/btn:-translate-x-[4px]" aria-hidden="true">
                                        {isArabic ? "←" : "→"}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}