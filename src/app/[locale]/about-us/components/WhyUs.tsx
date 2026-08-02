"use client";
import { useAbout } from "@/app/hooks/useAbout";
import Image from "next/image";
interface AboutPageContentProps {
    locale: string;
}
export default function WhyUs({ locale }: AboutPageContentProps) {
    const { data, isLoading, isError } = useAbout(locale);
    const isArabic = locale === "ar";
    if (isLoading) {
        return (
            <section className="py-[70px]">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-8">
                        <div className="col-span-12 lg:col-span-6">
                            <div className="animate-pulse">
                                <div className="mb-5 h-[35px] w-[70%] rounded-[8px] bg-gray-200" />
                                <div className="mb-3 h-[15px] w-full rounded-[6px] bg-gray-200" />
                                <div className="mb-3 h-[15px] w-full rounded-[6px] bg-gray-200" />
                                <div className="h-[15px] w-[80%] rounded-[6px] bg-gray-200" />
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className="h-[400px] animate-pulse rounded-[24px] bg-gray-200" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (isError || !data || !data.about) {
        return (
            <section className="py-[70px]">
                <div className="container">
                    <div className="rounded-[16px] border border-red-200 bg-red-50 p-6 text-center font-[600] text-red-600">
                        {isArabic ? "حدث خطأ أثناء تحميل بيانات من نحن" : "Failed to load about page data"}
                    </div>
                </div>
            </section>
        );
    }

    const whyus = data.why_choose_epoxy;
    return (
        <section className="relative bg-cover bg-center bg-no-repeat py-[70px] lg:py-[100px]" style={{ backgroundImage: "url('/images/bk-2.png')" }} dir="rtl">
            <div className="container">

                <div className="mb-[45px] text-center">
                    <p className="mb-[16px] text-[14px] font-medium text-[#08A5EA]"> {isArabic ? "لماذا تختار الأولى للإيبوكسي ؟" : "Why Choose Epoxy?"} </p>

                    <h2 className="text-[26px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[36px]">
                        {isArabic ? " نحول المساحات العادية إلى أرضيات استثنائية" : "We transform ordinary spaces into exceptional floors."}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 xl:grid-cols-4">
                    {whyus?.map((item, index) => (
                        <div key={index} className="group rounded-[20px] border border-white/[0.10] bg-[#062F3E]/80 px-4 lg:px-[28px] py-[38px] transition-all duration-300 hover:-translate-y-[6px] hover:border-[#08A5EA]/50">
                            <div className="mb-[26px] flex">
                                <Image src={item.icon} alt={item.title} width={58} height={58} className="h-[58px] w-[58px] object-contain" />
                            </div>

                            <h3 className="mb-[18px] text-[21px] font-bold text-white">
                                {item.title}
                            </h3>

                            <p className="mx-auto  text-[15px] font-normal line-clamp-5 leading-[2] text-white/80">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 