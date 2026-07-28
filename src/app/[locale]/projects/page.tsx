import Road from "@/app/components/layout/Road";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "أعمالنا" : "Our Projects",

        description: isArabic
            ? "أعمالنا التي نفخر بها في مجال أرضيات الإيبوكسي"
            : "Our projects that we are proud of in the field of epoxy flooring",
    };
}


export default async function Projects({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isArabic = locale === "ar";
    return (
        <>
            <Road title={isArabic ? " أعمالنا" : "Our Projects"} locale={locale} />
            <section className="container my-[50px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        <ProjectCard
                            project={{
                                id: 1,
                                image: "/images/proj-1.png",
                                title: "مشروع فيلا سكنية",
                                category: "أرضيات إيبوكسي ثلاثية الأبعاد",
                            }}
                            locale={locale}
                        />
                                                <ProjectCard
                            project={{
                                id: 1,
                                image: "/images/proj-1.png",
                                title: "مشروع فيلا سكنية",
                                category: "أرضيات إيبوكسي ثلاثية الأبعاد",
                            }}
                            locale={locale}
                        />
                                                <ProjectCard
                            project={{
                                id: 1,
                                image: "/images/proj-1.png",
                                title: "مشروع فيلا سكنية",
                                category: "أرضيات إيبوكسي ثلاثية الأبعاد",
                            }}
                            locale={locale}
                        />
                                                <ProjectCard
                            project={{
                                id: 1,
                                image: "/images/proj-1.png",
                                title: "مشروع فيلا سكنية",
                                category: "أرضيات إيبوكسي ثلاثية الأبعاد",
                            }}
                            locale={locale}
                        />


                </div>
            </section>

        </>
    );
}


function ProjectCard({ project, locale }) {
    const isArabic = locale === "ar";
    const projectUrl = `/${locale}/projects`;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#DDD8D1] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,32,39,0.08)]">
            <Link
                href={`${projectUrl}/${project.id}`}
                className="relative block"
                aria-label={`${isArabic ? "عرض مشروع" : "View project"} ${project.title}`}
            >
                <div className="relative aspect-[1.05/1] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.alt || project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 539px) 88vw, (max-width: 766px) 65vw, (max-width: 989px) 50vw, 33vw"
                    />
                </div>

                <span
                    className="absolute bottom-[-18px] left-[16px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#05AEEF] text-white shadow-sm transition-all duration-300 group-hover:scale-110"
                    aria-hidden="true"
                >
                    <FaArrowUpLong size={14} className="-rotate-45" />
                </span>
            </Link>

            <div className="flex flex-1 flex-col px-5 pb-6 pt-7 md:px-6">

                {project.category && (
                    <p className="mb-3 text-[13px] font-medium leading-6 text-[#817D78]">
                        {project.category}
                    </p>
                )}

                <h3 className="mt-auto text-[19px] font-bold leading-[1.7] text-[#101F25] md:text-[21px]">
                    <Link
                        href={projectUrl}
                        className="transition-colors duration-300 hover:text-[#05AEEF]"
                    >
                        {project.title}
                    </Link>
                </h3>
            </div>
        </article>
    );
}