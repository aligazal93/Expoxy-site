import type { Metadata } from "next";

import Road from "@/app/components/layout/Road";
import FloorDesignWizard from "./components/FloorDesignWizard";

type FlooringDesignPageProps = {
    params: Promise<{
        locale: string;
    }>;
};

export async function generateMetadata({ params }: FlooringDesignPageProps): Promise<Metadata> {
    const { locale } = await params;
    const isArabic = locale === "ar";

    return {
        title: isArabic ? "اطلب تصميم أرضيتك" : "Order Your Design",
        description: isArabic ? "اختر تصميم أرضية الإيبوكسي المناسب لمساحتك وأرسل تفاصيل طلبك بسهولة." : "Choose the epoxy flooring design that suits your space and submit your request easily.",
    };
}

export default async function FlooringDesignPage({ params }: FlooringDesignPageProps) {
    const { locale } = await params;
    const isArabic = locale === "ar";

    return (
        <>
            <FloorDesignWizard locale={locale} />
        </>
    );
}