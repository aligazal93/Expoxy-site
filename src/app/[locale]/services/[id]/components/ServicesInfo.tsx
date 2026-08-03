"use client";

import Image from "next/image";

import { useServiceDetails } from "@/app/hooks/useServiceDetails";

interface ServiceInfoProps {
    locale: string;
    id: string | number;
}

function isValidImageUrl(imageUrl?: string | null) {
    if (!imageUrl?.trim()) return false;

    if (imageUrl.startsWith("/")) return true;

    try {
        const url = new URL(imageUrl);
        const fileName = url.pathname.split("/").filter(Boolean).pop();

        if (!fileName || fileName === "services") return false;

        return /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(fileName);
    } catch {
        return false;
    }
}

export default function ServiceInfo({ locale, id }: ServiceInfoProps) {
    const isArabic = locale === "ar";

    const { data: service, isLoading, isError, refetch } = useServiceDetails(id, locale);

    if (isLoading) {
        return (
            <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]" dir={isArabic ? "rtl" : "ltr"}>
                <div className="container">
                    <div className="rounded-[20px] p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px]">
                        <div className="grid items-start gap-[45px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-[70px]">
                            <div>
                                <div className="mb-[22px] h-[48px] w-[70%] animate-pulse rounded-[10px] bg-[#F2F4F7]" />
                                <div className="mb-[10px] h-[18px] w-full animate-pulse rounded-[8px] bg-[#F2F4F7]" />
                                <div className="h-[18px] w-[80%] animate-pulse rounded-[8px] bg-[#F2F4F7]" />
                            </div>

                            <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-2">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item}>
                                        <div className="mb-[10px] h-[22px] w-[70%] animate-pulse rounded-[8px] bg-[#F2F4F7]" />
                                        <div className="mb-[7px] h-[16px] w-full animate-pulse rounded-[8px] bg-[#F2F4F7]" />
                                        <div className="h-[16px] w-[85%] animate-pulse rounded-[8px] bg-[#F2F4F7]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-[45px] h-[400px] w-full animate-pulse rounded-[20px] bg-[#F2F4F7] md:mt-[55px] lg:mt-[65px] lg:h-[600px]" />
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

                    <button type="button" onClick={() => refetch()} className="min-h-[46px] rounded-[8px] bg-primary px-[25px] text-[14px] font-[700] text-white transition-all duration-300 hover:-translate-y-[2px]">
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

                    <p className="text-[14px] font-[400] leading-[1.9] text-greyColor">
                        {isArabic ? "لا توجد بيانات متاحة لهذه الخدمة حاليًا." : "No data is currently available for this service."}
                    </p>
                </div>
            </section>
        );
    }

    const steps = Array.isArray(service.steps) ? service.steps : [];
    const hasValidImage = isValidImageUrl(service.image);

    return (
        <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]" dir={isArabic ? "rtl" : "ltr"}>
            <div className="container">
                <div className="p-[14px] sm:p-[20px] md:p-[30px] lg:p-[40px]">
                    <div className="grid items-start gap-[45px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-[70px]">
                        <div>
                            <h2 className="mb-[22px] text-[28px] font-[700] leading-[1.5] text-blackGrey md:text-[34px] lg:text-[40px]">
                                {service.name || (isArabic ? "تفاصيل الخدمة" : "Service Details")}
                            </h2>

                            {service.subtitle?.trim() && (
                                <p className="mb-[18px] w-full text-[14px] font-[400] leading-[2] text-[#707070] md:text-[16px] lg:w-[80%]">
                                    {service.subtitle}
                                </p>
                            )}
                        </div>

                        {steps.length > 0 ? (
                            <div className="grid grid-cols-1 gap-x-[28px] gap-y-[30px] sm:grid-cols-2">
                                {steps.map((step, index) => (
                                    <div key={`${step.name}-${index}`} className="mb-[18px]">
                                        <h3 className="mb-[6px] text-[14px] font-[700] leading-[1.5] text-blackGrey md:text-[16px]">
                                            {step.name || (isArabic ? `الخطوة ${index + 1}` : `Step ${index + 1}`)}
                                        </h3>

                                        {step.content?.trim() && (
                                            <p className="text-[13px] font-[400] leading-[1.9] text-greyColor md:text-[14px]">
                                                {step.content}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-[16px] border border-[#E4E7EC] bg-[#F9FAFB] px-[20px] py-[30px] text-center">
                                <p className="text-[14px] font-[500] text-greyColor">
                                    {isArabic ? "لا توجد خطوات مضافة لهذه الخدمة حاليًا." : "No steps have been added for this service yet."}
                                </p>
                            </div>
                        )}
                    </div>

                    {hasValidImage && (
                        <div className="relative mt-[45px] h-[350px] overflow-hidden rounded-[20px] md:mt-[55px] md:h-[480px] md:rounded-[25px] lg:mt-[65px] lg:h-[600px]">
                            <Image src={service.image} alt={service.name || (isArabic ? "صورة الخدمة" : "Service image")} fill sizes="(max-width: 767px) 100vw, (max-width: 1239px) 95vw, 1200px" className="object-cover" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}