import type { ReactNode } from "react";
import Image from "next/image";

const darkSectionBgImage =
  "https://www.figma.com/api/mcp/asset/301143d6-32c3-4749-a94a-67d95b4070e2";

type DecorativeSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export default function DecorativeSection({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: DecorativeSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#002433] ${className}`.trim()}
      dir="rtl"
      aria-labelledby={title ? "decorative-section-title" : undefined}
    >
      <div className="absolute inset-0">
        <Image
          src={darkSectionBgImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,36,51,0.96)_0%,rgba(0,36,51,0.85)_40%,rgba(0,36,51,0.68)_100%)]" />

      <div className="container relative z-10 flex min-h-[280px] items-center justify-center py-[70px] sm:min-h-[320px] sm:py-[90px] lg:min-h-[340px] lg:py-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center text-white">
          {eyebrow ? (
            <span className="mb-4 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[13px] font-semibold tracking-[0.2em] text-sky-200 uppercase">
              {eyebrow}
            </span>
          ) : null}

          {title ? (
            <h2
              id="decorative-section-title"
              className="max-w-[780px] text-[28px] font-bold leading-[1.45] text-white sm:text-[34px] lg:text-[40px]"
            >
              {title}aaaa
            </h2>
          ) : null}

          {description ? (
            <p className="mt-4 max-w-[720px] text-[14px] leading-8 text-white/80 sm:text-[15px] lg:text-[16px]">
              {description}
            </p>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}
