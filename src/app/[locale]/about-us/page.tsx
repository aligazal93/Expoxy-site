import Road from "@/app/components/layout/Road";
import AboutContent from "./components/AboutContent";
import { Metadata } from "next";
import WhyUs from "./components/WhyUs";
import ProcessSection from "@/app/components/ProcessSection";
import { getHomeData } from "@/app/services/home";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "من نحن" : "About Us",

        description: isArabic
            ? "تعرف على الأولى للإيبوكسي وخبرتنا في تصميم وتنفيذ أرضيات الإيبوكسي للمشاريع السكنية والتجارية."
            : "Learn more about Aloula Epoxy and our expertise in designing and installing epoxy flooring.",
    };
}


export default async function AboutUs({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isArabic = locale === "ar";
    const data = await getHomeData(locale);
    return (
        <>
            <Road title={isArabic ? "من نحن" : "About Us"} locale={locale} />
            <AboutContent locale={locale} />
            <WhyUs locale={locale} />
            <ProcessSection processes={data?.steps || []} locale={locale} />

        </>
    );
}