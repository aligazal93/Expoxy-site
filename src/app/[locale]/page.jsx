import Link from "next/link";
import Header from "../components/layout/Header";
import Intro from "../components/Intro";
import BrandsSlider from "../components/Brands";
import WhyEpoxy from "../components/WhyEpoxy";
import Services from "../components/Services";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const isArabic = locale === "ar";

    return {
        title: isArabic
            ? "حلول أرضيات الإيبوكسي"
            : "Epoxy Flooring Solutions",

        description: isArabic
            ? "حلول احترافية لأرضيات الإيبوكسي للمشاريع السكنية والتجارية والصناعية."
            : "Professional epoxy flooring solutions for residential, commercial and industrial projects.",
    };
}

export default async function HomePage({ params }) {
    const { locale } = await params;
    return (
        <>
            <Header locale={locale} />
            <Intro />
            <BrandsSlider />
            <WhyEpoxy />
            <Services />
        </>
    );
}