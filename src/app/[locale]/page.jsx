import Link from "next/link";
import Header from "../components/layout/Header";
import Intro from "../components/Intro";
import BrandsSlider from "../components/Brands";
import WhyEpoxy from "../components/WhyEpoxy";
import Services from "../components/Services";
import DesignCatalogSection from "../components/DesignCatalogSection";
import ProjectsSlider from "../components/ProjectsSlider";
import ProcessSection from "../components/ProcessSection";
import FaqSection from "../components/Faqs";

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

const projects = [
  {
    id: 1,
    title: "مشروع فيلا سكنية",
    slug: "residential-villa",
    category: "أرضيات إيبوكسي ثلاثية الأبعاد",
    image: "/images/proj-2.png",
    alt: "أرضية إيبوكسي ثلاثية الأبعاد داخل فيلا سكنية",
  },
  {
    id: 2,
    title: "مشروع شقة عصرية",
    slug: "modern-apartment",
    category: "أرضيات إيبوكسي ثلاثية الأبعاد",
    image: "/images/proj-2.png",
    alt: "أرضية إيبوكسي رخامية بعروق ذهبية داخل شقة عصرية",
  },
  {
    id: 3,
    title: "مشروع مكتب تنفيذي",
    slug: "executive-office",
    category: "أرضيات إيبوكسي ثلاثية الأبعاد",
    image: "/images/proj-3.png",
    alt: "أرضيات إيبوكسي حديثة داخل مكتب تنفيذي",
  },
  {
    id: 4,
    title: "مشروع معرض تجاري",
    slug: "commercial-showroom",
    category: "أرضيات إيبوكسي تجارية",
    image: "/images/proj-2.png",
    alt: "تنفيذ أرضيات إيبوكسي لمعرض تجاري",
  },
  {
    id: 5,
    title: "مشروع فيلا خاصة",
    slug: "private-villa",
    category: "أرضيات إيبوكسي فاخرة",
    image: "/images/pic-1.png",
    alt: "تصميم أرضيات إيبوكسي فاخرة داخل فيلا خاصة",
  },
];

export default async function HomePage({ params }) {
    const { locale } = await params;
    return (
        <>
            <Intro locale={locale} />
            <BrandsSlider locale={locale} />
            <WhyEpoxy locale={locale} />
            <Services locale={locale} />
            <DesignCatalogSection locale={locale} />
            <ProjectsSlider
                projects={projects}
                locale={locale}
            />
            <ProcessSection locale={locale} />
            <FaqSection locale={locale} />
        </>
    );
}