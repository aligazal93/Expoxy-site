import Road from "@/app/components/layout/Road";
import { Metadata } from "next";
import ContactContent from "./components/ContactContent";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic ? "تواصل معنا" : "Contact Us",

        description: isArabic
            ? "تواصل معنا"
            : "Contact Us",
    };
}


export default async function ContactUs({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isArabic = locale === "ar";
    return (
        <>

            <Road locale={locale} title="تواصل معنا" />
            <ContactContent locale={locale} />


        </>

    );
}