import Road from "@/app/components/layout/Road";
import { Metadata } from "next";
import WhyUsEpoxy from "./components/WhyEpoxy";
import { getHomeData } from "@/app/services/home";
import FaqSection from "@/app/components/Faqs";
import AllServices from "./components/AllServices";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "خدماتنا" : "Services",

        description: isArabic
            ? "خدماتنا"
            : "Our Services",
    };
}


export default async function OurServices({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isArabic = locale === "ar";
    const data = await getHomeData(locale);
    return (
        <>
            <Road title={isArabic ? "خدماتنا" : "Services"} locale={locale} />
            <WhyUsEpoxy locale={locale} />
            <AllServices services={data.services} locale={locale} />
            <FaqSection locale={locale} />
        </>
    );
}