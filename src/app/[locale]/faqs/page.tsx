import FaqSection from "@/app/components/Faqs";
import Road from "@/app/components/layout/Road";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<import("next").Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "الأسئلة الشائعة  " : "Frequently Asked Questions",

        description: isArabic
            ? "الأسئلة الشائعة  "
            : "Frequently Asked Questions",
    };
}

export default async function Faqs({ params }: { params: Promise<{ locale: string }> }) {
        const { locale } = await params;
    const isArabic = locale === "ar";
    return (
        <>
        
        <Road title={isArabic ? "الأسئلة الشائعة  " : "Frequently Asked Questions"} locale={locale} />
        <FaqSection locale={locale} />

        </>

    );
}