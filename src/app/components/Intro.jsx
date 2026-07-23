import Image from "next/image";
import Link from "next/link";

export default function Intro({ locale = "ar" }) {
  return (
    <section
      className="relative isolate flex items-center justify-center overflow-hidden lg:min-h-[calc(100svh-90px)]"
      aria-labelledby="hero-title"
    >
      <Image
        src="/images/bk-1.png"
        alt=""
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="container relative z-10 flex items-center justify-center py-[100px] text-center lg:py-[150px]">
        <div className="mx-auto w-full text-white">

          {/* Badge */}
          <div className="hero-fade-up hero-delay-1">
            <span className="rounded-[30px] border border-[#17B3F7] bg-[rgba(8,165,234,0.1)] px-8 py-3 text-custom14 font-[700] leading-none">
              الأولى للإيبوكسي رائدة في تصميم الأرضيات الفاخرة
            </span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="hero-fade-up hero-delay-2 mx-auto mt-8 w-full text-[36px] font-[700] leading-relaxed tracking-[-0.02em] sm:text-[44px] md:text-[52px] lg:w-[60%] lg:text-[58px] xl:text-[64px]"
          >
            حوّل أرضيتك إلى تحفة فنية بحلول إيبوكسي متكاملة
          </h1>

          {/* Description */}
          <p className="hero-fade-up hero-delay-3 mx-auto mt-5 text-[14px] font-[700] leading-[1.9] text-white sm:text-[15px] lg:text-[16px]">
            نصمم وننفذ جميع أنواع أرضيات الإيبوكسي للمنازل والفلل والمكاتب
            والمحلات والمشاريع التجارية، مع إعداد تصور بصري للمكان قبل التنفيذ.
          </p>

          <p className="hero-fade-up hero-delay-4 mx-auto mt-5 text-[14px] font-[700] leading-relaxed text-white">
            إيبوكسي 3D رخامي • ميتاليك • حلول تجارية وصناعية
          </p>

          <div className="hero-fade-up hero-delay-5 mt-7 flex items-center justify-center gap-3">
            <Link
              href={`/${locale}`}
              className="inline-flex min-h-[48px] min-w-[190px] items-center justify-center rounded-full border border-white/70 px-7 text-[14px] font-[600] text-white transition-all duration-300 ease-out hover:border-white hover:bg-white hover:text-secondary hover:shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            >
              اطلب تصور أرضيتك الآن
            </Link>

            <Link
              href={`/${locale}`}
              className="inline-flex min-h-[48px] min-w-[190px] items-center justify-center rounded-full bg-primary px-7 text-[14px] font-[700] text-white transition-all duration-300 ease-out hover:brightness-105 hover:shadow-[0_14px_35px_rgba(0,166,232,0.30)]"
            >
              تصفح التصاميم
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}