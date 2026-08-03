import Image from "next/image";
import Link from "next/link";

import { Slide } from "../types/home";

interface IntroProps {
    locale: string;
    slide?: Slide | null;
}

function isValidImageUrl(imageUrl?: string | null) {
    if (!imageUrl?.trim()) return false;

    if (imageUrl.startsWith("/")) return true;

    try {
        const url = new URL(imageUrl);
        const fileName = url.pathname.split("/").filter(Boolean).pop();

        if (!fileName) return false;

        return /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(fileName);
    } catch {
        return false;
    }
}

export default function Intro({ locale, slide }: IntroProps) {
    const isArabic = locale === "ar";

    const imageSrc = isValidImageUrl(slide?.image) ? slide!.image : "/images/hero-placeholder.webp";

    const headTitle = slide?.head_title?.trim() || (isArabic ? "الأولى للإيبوكسي" : "Al Oula Epoxy");

    const title = slide?.title?.trim() || (isArabic ? "حلول احترافية لأرضيات الإيبوكسي" : "Professional Epoxy Flooring Solutions");

    const content = slide?.content?.trim() || (isArabic ? "نصمم وننفذ أرضيات إيبوكسي عصرية للمنازل والمكاتب والمحلات والمشاريع التجارية." : "We design and install modern epoxy flooring for homes, offices, shops, and commercial projects.");

    return (
        <section className="relative isolate flex items-center justify-center overflow-hidden lg:min-h-[calc(100svh-90px)]" aria-labelledby="hero-title">
            <Image src={imageSrc} alt={title} fill priority fetchPriority="high" sizes="100vw" className="object-cover object-center" />

            <div className="absolute inset-0 z-[1] bg-black/40" aria-hidden="true" />

            <div className="container relative z-10 flex items-center justify-center py-[100px] text-center lg:py-[150px]">
                <div className="mx-auto w-full text-white">
                    <div className="hero-fade-up hero-delay-1">
                        <span className="inline-flex rounded-[30px] border border-[#17B3F7] bg-[rgba(8,165,234,0.1)] px-8 py-3 text-custom14 font-[700] leading-none">
                            {headTitle}
                        </span>
                    </div>

                    <h1 id="hero-title" className="hero-fade-up hero-delay-2 mx-auto mt-8 w-full text-[36px] font-[700] leading-relaxed tracking-[-0.02em] sm:text-[44px] md:text-[52px] lg:w-[60%] lg:text-[58px] xl:text-[64px]">
                        {title}
                    </h1>

                    <p className="hero-fade-up hero-delay-3 mx-auto mt-5 max-w-[850px] text-[14px] font-[700] leading-[1.9] text-white sm:text-[15px] lg:text-[16px]">
                        {content}
                    </p>

                    <div className="hero-fade-up hero-delay-5 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link href={`/${locale}/flooring-design`} className="inline-flex min-h-[48px] min-w-[190px] items-center justify-center rounded-full border border-white/70 px-7 text-[14px] font-[600] text-white transition-all duration-300 ease-out hover:border-white hover:bg-white hover:text-secondary hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
                            {isArabic ? "اطلب تصور أرضيتك الآن" : "Request Your Floor Design"}
                        </Link>

                        <Link href="#designs" className="inline-flex min-h-[48px] min-w-[190px] items-center justify-center rounded-full bg-primary px-7 text-[14px] font-[700] text-white transition-all duration-300 ease-out hover:brightness-105 hover:shadow-[0_14px_35px_rgba(0,166,232,0.30)]">
                            {isArabic ? "تصفح التصاميم" : "Browse Designs"}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}