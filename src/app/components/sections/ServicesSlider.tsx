"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import type { Service } from "../../types/home";

import "swiper/css";

type ServicesSliderProps = {
  services: Service[];
  locale?: string;
};

type ServiceCardProps = {
  service: Service;
  locale: string;
};

export default function ServicesSlider({ services = [], locale = "ar" }: ServicesSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const isArabic = locale === "ar";

  return (
    <div className="relative" dir={isArabic ? "rtl" : "ltr"}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1.15}
        spaceBetween={12}
        speed={700}
        grabCursor
        breakpoints={{
          540: {
            slidesPerView: 2.1,
            spaceBetween: 14,
          },
          767: {
            slidesPerView: 2.7,
            spaceBetween: 16,
          },
          990: {
            slidesPerView: 3.5,
            spaceBetween: 18,
          },
          1240: {
            slidesPerView: 4.2,
            spaceBetween: 18,
          },
        }}
        className="overflow-visible!"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id} className="h-auto!">
            <ServiceCard service={service} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-between">
        <div className="mt-7 flex items-center justify-end gap-3">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="الخدمة السابقة" className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border border-primary text-white transition-colors duration-300 hover:bg-primary">
            <FaArrowRight size={16} />
          </button>

          <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="الخدمة التالية" className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border border-primary text-white transition-colors duration-300 hover:bg-primary">
            <FaArrowLeft size={16} />
          </button>
        </div>

        <div className="mt-8">
          <Link href={`/${locale}/services`} className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-primary px-7 text-custom14 font-[600] text-white transition-colors duration-300 hover:bg-primary">
            اكتشف جميع خدماتنا
          </Link>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, locale }: ServiceCardProps) {
  const serviceUrl = `/${locale}/services/${service.id}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-sm">
      <Link href={serviceUrl} aria-label={service.name} className="relative block shrink-0 overflow-hidden sm:h-[220px]">
        <Image src={service.image} alt={service.name} width={800} height={600} sizes="(max-width: 539px) 100vw, (max-width: 766px) 45vw, (max-width: 989px) 34vw, 25vw" className="h-[300px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:h-[400px]" />
      </Link>

      <div className="flex flex-1 flex-col px-5 py-5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-5 group-hover:opacity-0">
        <h3 className="text-[18px] font-[700] leading-[1.6] text-secondary">
          <Link href={serviceUrl} className="transition-colors duration-300 hover:text-primary">
            {service.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-2 text-[14px] font-[400] leading-[1.9] text-secondary/75">
          {service.subtitle}
        </p>

        <div className="mt-auto pt-5">
          <Link href={serviceUrl} className="inline-flex min-h-[36px] min-w-[100px] items-center justify-center rounded-full border border-primary px-5 text-[13px] font-[600] text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
            اعرف أكثر
          </Link>
        </div>
      </div>

      <Link href={serviceUrl} aria-label={service.name} className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-auto group-hover:opacity-100">
        <Image src={service.image} alt="" fill sizes="(max-width: 539px) 100vw, (max-width: 766px) 45vw, (max-width: 989px) 34vw, 25vw" className="scale-[1.08] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" aria-hidden="true" />

        <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 translate-y-5 p-5 opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-[20px] font-[700] leading-[1.6] text-white">
            {service.name}
          </h3>

          <p className="mt-2 text-[13px] font-[400] leading-[1.8] text-white/80">
            {service.subtitle}
          </p>

          <span className="mt-3 inline-flex min-h-[36px] items-center justify-center rounded-full border border-white/70 px-5 text-[13px] font-[600] text-white transition-colors duration-300 hover:bg-white hover:text-secondary">
            اعرف أكثر
          </span>
        </div>
      </Link>
    </article>
  );
}