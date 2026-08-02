import "../globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TanstackProvider from "../providers/TanstackProvider";

import { getHomeData } from "../services/home";
import { Metadata } from "next";

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

const locales = ["ar", "en"];

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isArabic = locale === "ar";

  const siteName = isArabic ? "الأولى للإيبوكسي" : "Aloula Epoxy";

  return {
    title: {
      default: siteName,
      template: `%s | ${siteName}`,
    },

    description: isArabic
      ? "حلول احترافية لأرضيات الإيبوكسي للمشاريع السكنية والتجارية والصناعية."
      : "Professional epoxy flooring solutions for residential, commercial and industrial projects.",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  const homeData = await getHomeData(locale);



  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} className={ibm.variable}>
      <body className={ibm.className}>
        <Toaster position="top-center" richColors />
        <Header
          locale={locale}
          services={homeData.services}
           info={homeData.informations || {}}
        />

        <TanstackProvider>
          {children}
        </TanstackProvider>

        <Footer locale={locale} info={homeData.informations || {}} />

      </body>
    </html>
  );
}