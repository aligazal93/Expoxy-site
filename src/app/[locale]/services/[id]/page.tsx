import { Metadata } from "next";
import ServiceInfo from "./components/ServicesInfo";
import Road from "@/app/components/layout/Road";
import ServicesData from "./components/ServicesData";
import FaqSection from "@/app/components/Faqs";
import Questions from "./components/Questions";

type PageProps = {
    params: Promise<{
        locale: string;
        id: string;
    }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "نفاصيل الخدمة" : "Service Details",

        description: isArabic
            ? "نفاصيل الخدمة"
            : "Service Details",
    };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
    const { locale, id } = await params;
    const isArabic = locale === "ar";

    return (
        <>
            <Road title="أرضيات إيبوكسي ثلاثية الأبعاد" locale={locale} />
            <ServiceInfo locale={locale} id={id} />
            <ServicesData locale={locale} id={id} />
            
        </>

    );
}