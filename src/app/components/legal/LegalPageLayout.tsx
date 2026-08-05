import Link from "next/link";
import type { ReactNode } from "react";

interface LegalPageLayoutProps {
  locale: string;
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
}

interface LegalSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({ locale, title, description, lastUpdated, children }: LegalPageLayoutProps) {
  const isArabic = locale === "ar";

  return (
    <>
      <section className="relative overflow-hidden bg-[#F7FAFC] py-[55px] sm:py-[70px] lg:py-[90px]" aria-labelledby="legal-page-title">
        <div className="pointer-events-none absolute -right-[120px] -top-[160px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-[100px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-[180px] -left-[120px] h-[380px] w-[380px] rounded-full bg-secondary/10 blur-[100px]" aria-hidden="true" />

        <div className="container relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-[500] text-grey/70 sm:text-[14px]" aria-label={isArabic ? "مسار التنقل" : "Breadcrumb"}>
            <Link href={`/${locale}`} className="transition-colors hover:text-primary">
              {isArabic ? "الرئيسية" : "Home"}
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-primary" aria-current="page">
              {title}
            </span>
          </nav>

          <div className="max-w-[850px]">
            <span className="mb-5 inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-[13px] font-[600] text-primary shadow-sm">
              {isArabic ? "معلومات قانونية" : "Legal Information"}
            </span>

            <h1 id="legal-page-title" className="text-[32px] font-[700] leading-[1.45] text-secondary sm:text-[40px] lg:text-[52px]">
              {title}
            </h1>

            <p className="mt-5 max-w-[750px] text-[15px] font-[400] leading-[2] text-grey sm:text-[16px] lg:text-[18px]">
              {description}
            </p>

            <p className="mt-5 text-[13px] font-[500] text-grey/70 sm:text-[14px]">
              {isArabic ? "آخر تحديث:" : "Last updated:"} {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <main className="bg-white py-[55px] sm:py-[70px] lg:py-[90px]">
        <div className="container">
          <article className="mx-auto max-w-[1000px] rounded-[20px] border border-black/[0.06] bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.05)] sm:p-8 lg:rounded-[28px] lg:p-[50px]">
            <div className="space-y-10 sm:space-y-12">{children}</div>
          </article>
        </div>
      </main>
    </>
  );
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-[120px]">
      <h2 id={`${id}-title`} className="mb-4 border-b border-black/[0.07] pb-4 text-[22px] font-[700] leading-[1.5] text-secondary sm:text-[26px]">
        {title}
      </h2>

      <div className="space-y-4 text-[14px] font-[400] leading-[2.1] text-grey sm:text-[16px]">{children}</div>
    </section>
  );
}