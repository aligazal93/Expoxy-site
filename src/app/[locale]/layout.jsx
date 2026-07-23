import "../globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ibm = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

const locales = ["ar", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      className={ibm.variable}
    >
      <body className={ibm.className}>
        <Header locale={locale} />
        {children}

        <Footer locale={locale} />
        
        </body>
    </html>
  );
}