import type { Metadata } from "next";

import Road from "@/app/components/layout/Road";
import ContactContent from "./components/ContactContent";
import { getHomeData } from "@/app/services/home";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isArabic = locale === "ar";

    return {
        title: isArabic ? "تواصل معنا" : "Contact Us",
        description: isArabic ? "تواصل مع فريق الأولى للإيبوكسي للحصول على استشارة أو مناقشة تفاصيل مشروعك." : "Contact Al Oula Epoxy for consultation or to discuss your project details.",
    };
}

export default async function ContactUs({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isArabic = locale === "ar";

    const data = await getHomeData(locale);
    const informations = data?.informations;

    return (
        <>
            <Road locale={locale} title={isArabic ? "تواصل معنا" : "Contact Us"} />
            <ContactContent locale={locale} informations={informations} />
        </>
    );
}