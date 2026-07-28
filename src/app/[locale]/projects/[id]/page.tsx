import type { Metadata } from "next";

import Road from "@/app/components/layout/Road";
import ProjectCaseStudy from "./components/ProjectCaseStudy";
import ProjectGallery from "./components/ProjectGallery";
import Link from "next/link";

type PageProps = {
    params: Promise<{
        locale: string;
        id: string;
    }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "تفاصيل المشروع" : "Project Details",
        description: isArabic ? "تفاصيل المشروع" : "Project Details",
    };
}
export default async function ProjectDetailsPage({ params }: PageProps) {
    const { locale, id } = await params;
    const isArabic = locale === "ar";

    return (
        <>
            <Road title="مشروع فيلا سكنية " locale={locale} />
            <div className="container py-[50px] grid grid-cols-12">
                <div className="col-span-12 lg:col-span-9">
                    <ProjectCaseStudy />
                    <ProjectGallery />
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="lg:sticky lg:top-[110px]">
                        <div className="relative mb-[20px] overflow-hidden rounded-[20px] bg-[#0FA9E6] px-[22px] py-[25px] text-center text-white shadow-[0_20px_50px_rgba(15,169,230,0.15)] md:px-[30px] md:py-[30px]">

                            <div className="pointer-events-none absolute -end-[60px] -top-[60px] h-[150px] w-[150px] rounded-full bg-white/[0.08]" aria-hidden="true" />

                            <div className="pointer-events-none absolute -bottom-[80px] -start-[70px] h-[180px] w-[180px] rounded-full bg-white/[0.06]" aria-hidden="true" />

                            <div className="relative z-10">
                                <span className="mb-[10px] block text-[12px] font-[500] text-white/90">
                                    إبدأ مشروعك معنا
                                </span>

                                <h3 className="mb-[15px] text-[22px] font-[700] leading-[1.5] md:text-[24px]">
                                    هل أعجبك هذا التصميم؟
                                </h3>

                                <p className="mb-[22px] text-[13px] font-[400] leading-[1.9] text-white/90">
                                    أرسل صورة مساحتك الآن، وسنساعدك في اختيار تصميم مشابه أو تصميم مخصص يناسب ذوقك، مع إعداد تصور بصري قبل التنفيذ.
                                </p>

                                <Link href={`/${locale}/contact`} className="group/btn my-2 flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-white px-[16px] text-[14px] font-[600] text-primary shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]">
                                    أريد تصميمًا مشابهًا

                                    <span className="transition-transform duration-300 group-hover/btn:-translate-x-[4px]" aria-hidden="true">
                                        ←
                                    </span>
                                </Link>

                                <Link href={`/${locale}/contact`} className="group/btn my-2 flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-white px-[16px] text-[14px] font-[600] text-primary shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]">
                                    تواصل عبر واتساب

                                    <span className="transition-transform duration-300 group-hover/btn:-translate-x-[4px]" aria-hidden="true">
                                        ←
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}