"use client";

import { useAllProjects } from "@/app/hooks/useProjects";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";

interface ProjectsContentProps {
    locale: string;
}

interface Project {
    id: number;
    name: string;
    title?: string;
    subtitle?: string;
    image: string;
    alt?: string;
}

export default function ProjectsContent({ locale }: ProjectsContentProps) {
    const isArabic = locale === "ar";
    const { data, isLoading, isError } = useAllProjects(locale);

    if (isLoading) {
        return (
            <section className="container my-[50px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="overflow-hidden rounded-[24px] border border-[#DDD8D1] bg-white">
                            <div className="aspect-[1.05/1] animate-pulse bg-gray-200" />

                            <div className="p-6">
                                <div className="mb-3 h-[14px] w-[50%] animate-pulse rounded-[5px] bg-gray-200" />
                                <div className="h-[24px] w-[80%] animate-pulse rounded-[5px] bg-gray-200" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (isError || !data) {
        return (
            <section className="container my-[50px]">
                <div className="rounded-[16px] border border-red-200 bg-red-50 p-6 text-center font-[600] text-red-600">
                    {isArabic ? "حدث خطأ أثناء تحميل المشاريع" : "Failed to load projects"}
                </div>
            </section>
        );
    }

    const projects = data.projects ?? [];

    if (projects.length === 0) {
        return (
            <section className="container my-[50px]">
                <div className="rounded-[20px] border border-[#E4E7EC] bg-[#F8FAFC] px-6 py-16 text-center">
                    <h2 className="mb-2 text-[22px] font-[700] text-blackGrey">{isArabic ? "لا توجد مشاريع حاليًا" : "No projects available"}</h2>
                    <p className="text-custom15 text-grey">{isArabic ? "سيتم إضافة أعمالنا الجديدة قريبًا." : "Our latest projects will be added soon."}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="container my-[50px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project: Project) => (
                    <ProjectCard key={project.id} project={project} locale={locale} />
                ))}
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: Project;
    locale: string;
}

function ProjectCard({ project, locale }: ProjectCardProps) {
    const isArabic = locale === "ar";
    const projectDetailsUrl = `/${locale}/projects/${project.id}`;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#DDD8D1] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,32,39,0.08)]">
            <Link href={projectDetailsUrl} className="relative block" aria-label={`${isArabic ? "عرض مشروع" : "View project"} ${project.name}`}>
                <div className="relative aspect-[1.05/1] overflow-hidden">
                    <Image src={project.image} alt={project.alt || project.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" sizes="(max-width: 539px) 100vw, (max-width: 989px) 50vw, 33vw" />
                </div>

                <span className="absolute bottom-[-18px] left-[16px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#05AEEF] text-white shadow-sm transition-all duration-300 group-hover:scale-110" aria-hidden="true">
                    <FaArrowUpLong size={14} className="-rotate-45" />
                </span>
            </Link>

            <div className="flex flex-1 flex-col px-5 pb-6 pt-7 md:px-6">
                {project.subtitle && <p className="mb-3 text-[13px] font-medium leading-6 text-[#817D78]">{project.subtitle}</p>}

                <h2 className="mt-auto text-[19px] font-bold leading-[1.7] text-[#101F25] md:text-[21px]">
                    <Link href={projectDetailsUrl} className="transition-colors duration-300 hover:text-[#05AEEF]">
                        {project.name}
                    </Link>
                </h2>
            </div>
        </article>
    );
}