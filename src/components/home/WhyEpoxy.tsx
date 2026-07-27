type WhyEpoxyProps = {
  locale?: string;
};

export default function WhyEpoxyHome({ locale = "ar" }: WhyEpoxyProps) {
  const isArabic = locale === "ar";

  return (
    <section
      className="relative overflow-hidden py-[100px] md:py-[110px] lg:py-[120px]"
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        backgroundColor: "#003342",
        backgroundImage: `
          linear-gradient(135deg, rgba(255,255,255,0.045) 25%, transparent 25%),
          linear-gradient(225deg, rgba(255,255,255,0.045) 25%, transparent 25%),
          linear-gradient(315deg, rgba(255,255,255,0.045) 25%, transparent 25%),
          linear-gradient(45deg, rgba(255,255,255,0.045) 25%, transparent 25%)
        `,
        backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        backgroundSize: "46px 46px",
      }}
      aria-labelledby="works-hero-title"
    >
      {/* Background Gradient Overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,99,130,0.35) 0%, rgba(0,51,66,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:gap-12">
          {/* Page Title - Right Side (Visually left in image, matched with justify-between) */}
          <div className="order-2 sm:order-1">
            <h2
              id="works-hero-title"
              className="text-[48px] font-[700] leading-none text-white md:text-[56px] lg:text-[68px] xl:text-[76px]"
            >
              أعمالنا
            </h2>
          </div>

          {/* Breadcrumb - Left Side (Visually right in image, matched with flex-order) */}
          <nav
            className="order-1 sm:order-2"
            aria-label="breadcrumb"
          >
            <ol className="flex items-center gap-3 text-[13px] font-[400] text-white/85 sm:text-custom14 md:text-[15px]">
              <li>
                <a
                  href={`/${locale}`}
                  className="transition-colors duration-200 hover:text-white"
                >
                  الرئيسية
                </a>
              </li>
              <li
                aria-hidden="true"
                className="text-white/70"
              >
                |
              </li>
              <li
                aria-current="page"
                className="text-white"
              >
                أعمالنا
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
