import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import Road from "@/app/components/layout/Road";
import ProjectCaseStudy from "./components/ProjectCaseStudy";
import ProjectGallery from "./components/ProjectGallery";
import { getProjectDetailsData } from "@/app/services/projectDetails";

type PageProps = {
    params: Promise<{
        locale: string;
        id: string;
    }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale, id } = await params;
    const isArabic = locale === "ar";

    try {
        const data = await getProjectDetailsData(id, locale);
        const project = data.project;

        return {
            title: project.name,
            description: project.subtitle || project.content || (isArabic ? "تفاصيل المشروع" : "Project details"),
            openGraph: {
                title: project.name,
                description: project.subtitle || project.content,
                images: project.image ? [project.image] : [],
            },
        };
    } catch {
        return {
            title: isArabic ? "تفاصيل المشروع" : "Project Details",
            description: isArabic ? "تعرف على تفاصيل أحد مشاريع الأولى للإيبوكسي." : "Explore one of Aloula Epoxy projects.",
        };
    }
}

export default async function ProjectDetailsPage({ params }: PageProps) {
    const { locale, id } = await params;
    const isArabic = locale === "ar";

    let data;

    try {
        data = await getProjectDetailsData(id, locale);
    } catch {
        notFound();
    }

    if (!data?.project) {
        notFound();
    }

    const { project, informations } = data;

    const whatsappMessage = isArabic
        ? `مرحبًا، أعجبني تصميم مشروع "${project.name}" وأريد تنفيذ تصميم مشابه.`
        : `Hello, I liked the "${project.name}" project and would like a similar design.`;

    const whatsappUrl = informations.whatsapp ? `https://wa.me/${informations.whatsapp}?text=${encodeURIComponent(whatsappMessage)}` : `/${locale}/contact`;

    return (
        <>
            <Road title={project.name} locale={locale} />

            <div className="container grid grid-cols-12 gap-6 py-[50px]">
                <div className="col-span-12 lg:col-span-9">
                    <ProjectCaseStudy project={project} locale={locale} />
                    <ProjectGallery images={project.images} videos={project.videos} projectName={project.name} locale={locale} />
                </div>

                <aside className="col-span-12 lg:col-span-3">
                    <div className="lg:sticky lg:top-[110px]">
                        <div className="relative mb-[20px] overflow-hidden rounded-[20px] bg-[#0FA9E6] px-[22px] py-[25px] text-center text-white shadow-[0_20px_50px_rgba(15,169,230,0.15)] md:px-[30px] md:py-[30px]">
                            <div className="pointer-events-none absolute -end-[60px] -top-[60px] h-[150px] w-[150px] rounded-full bg-white/[0.08]" aria-hidden="true" />

                            <div className="pointer-events-none absolute -bottom-[80px] -start-[70px] h-[180px] w-[180px] rounded-full bg-white/[0.06]" aria-hidden="true" />

                            <div className="relative z-10">
                                <span className="mb-[10px] block text-[12px] font-[500] text-white/90">
                                    {isArabic ? "ابدأ مشروعك معنا" : "Start your project with us"}
                                </span>

                                <h2 className="mb-[15px] text-[22px] font-[700] leading-[1.5] md:text-[24px]">
                                    {isArabic ? "هل أعجبك هذا التصميم؟" : "Do you like this design?"}
                                </h2>

                                <p className="mb-[22px] text-[13px] font-[400] leading-[1.9] text-white/90">
                                    {isArabic
                                        ? "أرسل صورة مساحتك الآن، وسنساعدك في اختيار تصميم مشابه أو تصميم مخصص يناسب ذوقك، مع إعداد تصور بصري قبل التنفيذ."
                                        : "Send us a photo of your space and we will help you choose a similar or custom design, including a visual preview before installation."}
                                </p>

                                <Link href={`/${locale}/flooring-design`} className="group/btn my-2 flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-white px-[16px] text-[14px] font-[600] text-primary shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]">
                                    {isArabic ? "أريد تصميمًا مشابهًا" : "I want a similar design"}

                                    <span className={`transition-transform duration-300 ${isArabic ? "group-hover/btn:-translate-x-[4px]" : "rotate-180 group-hover/btn:translate-x-[4px]"}`} aria-hidden="true">
                                        ←
                                    </span>
                                </Link>

                                <a href={whatsappUrl} target={informations.whatsapp ? "_blank" : undefined} rel={informations.whatsapp ? "noopener noreferrer" : undefined} className="group/btn my-2 flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] border border-white/50 bg-transparent px-[16px] text-[14px] font-[600] text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-white hover:text-primary">
                                    {isArabic ? "تواصل عبر واتساب" : "Contact via WhatsApp"}

                                    <span className={`transition-transform duration-300 ${isArabic ? "group-hover/btn:-translate-x-[4px]" : "rotate-180 group-hover/btn:translate-x-[4px]"}`} aria-hidden="true">
                                        ←
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}