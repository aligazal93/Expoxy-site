"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";

export default function ServicesSlider({ services = [], locale = "ar" }) {
    const swiperRef = useRef(null);
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
                        <ServiceCard service={service} />
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="flex justify-between items-center">

                
                {/* Navigation */}

                <div className="mt-7 flex items-center justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        aria-label="الخدمة السابقة"
                        className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border border-primary text-white transition-colors duration-300 hover:bg-primary"
                    >
                        <FaArrowRight size={16} />
                    </button>

                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        aria-label="الخدمة التالية"
                        className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border border-primary text-white transition-colors duration-300 hover:bg-primary"
                    >
                        <FaArrowLeft size={16} />
                    </button>
                </div>

                {/* All Services */}
                <div className="mt-8">
                    <Link
                        href={`/${locale}/services`}
                        className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-primary px-7 text-custom14 font-[600] text-white transition-colors duration-300 hover:bg-primary"
                    >
                        اكتشف جميع خدماتنا
                    </Link>
                </div>




            </div>


        </div>
    );
}

function ServiceCard({ service }) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white">

            {/* Image */}
            <Link
                href={service.href}
                aria-label={service.title}
                className="relative block h-[210px] shrink-0 overflow-hidden sm:h-[220px]"
            >
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 539px) 85vw, (max-width: 766px) 45vw, (max-width: 989px) 34vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
            </Link>

            {/* Content */}
            <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="text-[18px] font-[700] leading-[1.6] text-secondary">
                    <Link
                        href={service.href}
                        className="transition-colors duration-300 hover:text-primary"
                    >
                        {service.title}
                    </Link>
                </h3>

                <p className="mt-2 text-[14px] line-clamp-2 font-[400] leading-[1.9] text-secondary/75">
                    {service.description}
                </p>

                <div className="mt-auto pt-5">
                    <Link
                        href={service.href}
                        className="inline-flex min-h-[36px] min-w-[100px] items-center justify-center rounded-full border border-primary px-5 text-[13px] font-[600] text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                        اعرف أكثر
                    </Link>
                </div>
            </div>

        </article>
    );
}