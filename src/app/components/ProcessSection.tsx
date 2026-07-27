"use client";
import { usePathname } from "next/navigation";

const defaultSteps = [
  {
    id: 1,
    title: "أرسل تفاصيل مساحتك",
    description: "شاركنا صورة المكان، المقاسات، ونوع المساحة من خلال نموذج الطلب أو واتساب.",
  },
  {
    id: 2,
    title: "ننجز التصور والتصميم",
    description: "يقوم فريقنا بدراسة المساحة واقتراح التصميم المناسب مع تصور بصري يوضح الشكل النهائي.",
  },
  {
    id: 3,
    title: "اختيار التصميم والتجهيز",
    description: "بعد اعتماد التصميم، نحدد التفاصيل النهائية ونجهز الموقع للتنفيذ بأفضل المعايير.",
  },
  {
    id: 4,
    title: "تنفيذ أرضيتك باحترافية",
    description: "ننّفذ طبقات الإيبوكسي بدقة للحصول على تشطيب فاخر، متين ويدوم طويلًا.",
  },
];

export default function ProcessSection({
  steps = defaultSteps,
  locale = "ar",
}) {
  const isArabic = locale === "ar";
  const pathname = usePathname();

  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  return (
    <section
      className={`relative overflow-hidden ${isHome ? "bg-[#003342]" : "bg-white"} py-[70px] md:py-[90px] lg:py-[110px]`}
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="process-title"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "46px 46px",
      }}
    >
      {/* Background Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,145,0.12),transparent_65%)]" />

      <div className="container relative z-10">
        {/* Heading */}
        <header className="mx-auto mb-[55px] max-w-[850px] text-center lg:mb-[75px]">
          <span className={`mb-5 inline-flex rounded-full ${isHome ? "border-white/50" : "border-[#70707070]"} px-4 py-[6px] border  px-4 py-[6px] text-[13px] font-medium ${isHome ? "text-white" : "text-[#70707070]"}`}>
            كيف تعمل؟
          </span>

          <h2 id="process-title" className={`text-[28px] font-bold leading-[1.5] ${isHome ? "text-white" : "text-dark"} md:text-[36px] lg:text-[42px]`}>
             من الفكرة إلى أرضية أحلامك في خطوات بسيطة
          </h2>
        </header>

        {/* Timeline */}
        <div className="relative mx-auto max-w-[1100px]">
          {/* Desktop Center Line */}
          <div className="absolute bottom-[15px] left-1/2 top-[15px] hidden w-[2px] -translate-x-1/2 bg-[#0783ad] lg:block" />

          {/* Mobile Line */}
          <div className={`absolute bottom-[15px] top-[15px] w-[2px] bg-[#0783ad] lg:hidden ${isArabic ? "right-[8px]" : "left-[8px]"}`} />

          <div className="relative flex flex-col gap-6 lg:gap-[50px]">
            {steps.map((step, index) => (
              <ProcessStep key={step.id} step={step} index={index} isArabic={isArabic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isArabic }) {
  const isRight = index % 2 === 0;

  return (
    <div className="relative lg:grid lg:grid-cols-[1fr_100px_1fr] lg:items-center">

      {/* Mobile Connector */}
      <div className={`absolute top-1/2 h-[2px] w-[28px] -translate-y-1/2 bg-[#0783ad] lg:hidden ${isArabic ? "right-[8px]" : "left-[8px]"}`} />

      {/* Mobile Dot */}
      <span className={`absolute top-1/2 z-20 h-[13px] w-[13px] -translate-y-1/2 rounded-full bg-[#05AEEF] lg:hidden ${isArabic ? "right-[2px]" : "left-[2px]"}`} />

      {/* Right Side - 01 / 03 */}
      <div className="hidden lg:col-start-1 lg:block">
        {isRight && (
          <div className="relative">
            <ProcessCard step={step} index={index} isArabic={isArabic} />

            <div className="absolute left-[-50px] top-1/2 h-[2px] w-[50px] -translate-y-1/2 bg-[#0783ad]" />

            <span className="absolute left-[-56px] top-1/2 z-20 h-[13px] w-[13px] -translate-y-1/2 rounded-full bg-[#05AEEF]" />
          </div>
        )}
      </div>

      {/* Center Timeline Space */}
      <div className="hidden lg:col-start-2 lg:block" />

      {/* Left Side - 02 / 04 */}
      <div className="hidden lg:col-start-3 lg:block">
        {!isRight && (
          <div className="relative">
            <ProcessCard step={step} index={index} isArabic={isArabic} />

            <div className="absolute right-[-50px] top-1/2 h-[2px] w-[50px] -translate-y-1/2 bg-[#0783ad]" />

            <span className="absolute right-[-56px] top-1/2 z-20 h-[13px] w-[13px] -translate-y-1/2 rounded-full bg-[#05AEEF]" />
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className={`${isArabic ? "mr-[38px]" : "ml-[38px]"} lg:hidden`}>
        <ProcessCard step={step} index={index} isArabic={isArabic} />
      </div>
    </div>
  );
}

function ProcessCard({ step, index, isArabic }) {
  return (
    <article className="relative min-h-[140px] rounded-[24px] bg-[#FBF9F5] px-5 py-6 shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:px-7 md:min-h-[155px] md:px-8 md:py-7 lg:px-9">
      <div className={`flex h-full items-center gap-5 `}>
        <span className="shrink-0 text-[38px] font-bold leading-none text-[#72CDEE] sm:text-[44px] lg:text-[48px]" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1">
          <h3 className="mb-3 text-[17px] font-bold leading-[1.6] text-[#14272D] md:text-[19px]">
            {step.title}
          </h3>

          <p className="text-[13px] leading-[2] text-[#686868] md:text-[14px]">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}