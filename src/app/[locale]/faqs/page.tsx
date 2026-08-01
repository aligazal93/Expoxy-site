import type { Metadata } from "next";

import Road from "@/app/components/layout/Road";
import FaqSection from "@/app/components/Faqs";
import { getHomeData } from "@/app/services/home";

interface FaqPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: FaqPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions",
    description: isArabic ? "تعرف على إجابات أكثر الأسئلة شيوعًا حول خدمات وتصميم وتنفيذ أرضيات الإيبوكسي." : "Find answers to the most frequently asked questions about epoxy flooring services, design and installation.",
  };
}

export default async function FaqsPage({ params }: FaqPageProps) {
  const { locale } = await params;
  const isArabic = locale === "ar";
    const data = await getHomeData(locale);
    const faqs = data?.questions || [];
  return (
    <>
      <Road title={isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"} locale={locale} />

      <FaqSection locale={locale} faqs={faqs} />
    </>
  );
}