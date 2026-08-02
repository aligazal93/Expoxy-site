"use client";
import { useAbout } from "@/app/hooks/useAbout";
import Image from "next/image";
import { LuDownload } from "react-icons/lu";

interface AboutPageContentProps {
    locale: string;
}

export default function AboutContent({ locale }: AboutPageContentProps) {
    const isArabic = locale === "ar";
    const { data, isLoading, isError } = useAbout(locale);

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

    const about = data.about;

    return (
        <section className="relative py-[70px] md:py-[90px] lg:py-[120px]" aria-labelledby="about">
            <div className="container">
                <div className="grid items-center gap-[40px]  lg:gap-[45px] xl:gap-[60px]">
                    <div className="col-span-12">
                        <span className="mb-[20px] block text-[15px] font-medium text-primary">
                            {isArabic ? "من نحن" : "About Us"}
                        </span>

                        <h2  className="mb-[10px] w-full lg:w-1/2 text-[30px] font-bold leading-[1.5] text-blackGrey md:text-[36px] lg:text-[42px] xl:text-[46px]">
                           {about.title}
                        </h2>
                    </div>

                    <div className="col-span-12 lg:col-span-3">
                        <p className="mb-[20px] text-custom14 leading-relaxed text-[#707070]">
                            {about.content}
                        </p>

                        <a href={about.pdf} target="_blank" rel="noopener noreferrer" className="mt-[10px] inline-flex items-center gap-[10px] rounded-[8px] bg-primary px-[22px] py-[13px] text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90">
                            {isArabic ? "تحميل الملف" : "Download PDF"}
                            <LuDownload className="text-[17px]" />
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[20px]">
                            <Image alt="About pic" src={about.image} width={200} height={200} className="object-cover w-full h-full" sizes="(max-width: 990px) 90vw, 35vw" />
                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-3">
                        <div>
                            <h3 className="mb-[10px] text-custom20 font-bold text-dark">
                                {isArabic ? "روينا" : "Our Vision"}
                            </h3>

                            <p className="text-custom14 leading-relaxed text-[#707070] lg:w-[80%] w-full">
                                {about.our_vision}
                            </p>
                        </div>

                        <div className="my-[35px] h-[2px] border border-[#CFCECD] w-full bg-[#CFCECD]" />

                        <div>
                            <h3 className="mb-[10px] text-custom20 font-bold text-dark">
                                {isArabic ? "رسالتنا" : "Our Message"}
                            </h3>

                            <p className="text-custom14 leading-relaxed text-[#707070] lg:w-[80%] w-full">
                                {about.our_message}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}