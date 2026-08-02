import Road from "@/app/components/layout/Road";
import { useAllProjects } from "@/app/hooks/useProjects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";
import ProjectsContent from "./components/ProjectsContent";


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
            <ProjectsContent locale={locale} />

        </>
    );
}
