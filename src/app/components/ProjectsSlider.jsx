"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaArrowUpLong,
} from "react-icons/fa6";

import "swiper/css";

export default function ProjectsSlider({
  projects = [],
  locale = "ar",
}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isArabic = locale === "ar";

  if (!projects?.length) return null;

  return (
    <section
      className="overflow-hidden py-[70px] lg:py-[50px]"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="projects-heading"
    >
      <div className="container">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          
          {/* Title */}
          <div>
            <span className="mb-5 inline-flex rounded-full border border-[#DED8D0] px-4 py-[7px] text-[13px] font-medium text-[#807B75]">
              {isArabic ? "معرض الأعمال" : "Our Projects"}
            </span>

            <h2
              id="projects-heading"
              className="text-[28px] font-bold leading-[1.4] text-[#102027] md:text-[36px] lg:text-[40px]"
            >
              {isArabic
                ? "مشاريعنا تتحدث عن جودتنا"
                : "Our projects speak for our quality"}
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 lg:min-w-[320px]" dir="ltr">

            {/* Previous */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label={isArabic ? "المشروع السابق" : "Previous project"}
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#DDD8D1] bg-white text-[#16252B] transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white"
            >
              <FaArrowLeftLong size={16} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label={isArabic ? "المشروع التالي" : "Next project"}
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#DDD8D1] bg-white text-[#16252B] transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white"
            >
              <FaArrowRightLong size={16} />
            </button>

            {/* Progress */}
            <div
              className="flex h-[2px] flex-1 items-center gap-[3px]"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={projects.length}
              aria-valuenow={activeIndex + 1}
              aria-label={isArabic ? "تقدم معرض الأعمال" : "Projects progress"}
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  aria-label={
                    isArabic
                      ? `عرض المشروع ${index + 1}`
                      : `View project ${index + 1}`
                  }
                  className="group/progress relative h-[12px] flex-1"
                >
                  <span
                    className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 transition-colors duration-500 ${index === activeIndex ? "bg-[#05AEEF]" : "bg-[#DDD5CA]"}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[A11y, Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          onRealIndexChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={projects.length > 3}
          speed={700}
          grabCursor
          watchOverflow
          slidesPerView={1.12}
          spaceBetween={14}
          a11y={{
            enabled: true,
          }}
          breakpoints={{
            540: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            990: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function ProjectCard({ project, locale }) {
  const isArabic = locale === "ar";
  const projectUrl = `/${locale}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#DDD8D1] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,32,39,0.08)]">

      {/* Image */}
      <Link
        href={projectUrl}
        className="relative block"
        aria-label={`${isArabic ? "عرض مشروع" : "View project"} ${project.title}`}
      >
        <div className="relative aspect-[1.05/1] overflow-hidden">
          <Image
            src={project.image}
            alt={project.alt || project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 539px) 88vw, (max-width: 766px) 65vw, (max-width: 989px) 50vw, 33vw"
          />
        </div>

        {/* Arrow */}
        <span
          className="absolute bottom-[-18px] left-[16px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#05AEEF] text-white shadow-sm transition-all duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <FaArrowUpLong size={14} className="-rotate-45" />
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-7 md:px-6">

        {project.category && (
          <p className="mb-3 text-[13px] font-medium leading-6 text-[#817D78]">
            {project.category}
          </p>
        )}

        <h3 className="mt-auto text-[19px] font-bold leading-[1.7] text-[#101F25] md:text-[21px]">
          <Link
            href={projectUrl}
            className="transition-colors duration-300 hover:text-[#05AEEF]"
          >
            {project.title}
          </Link>
        </h3>
      </div>
    </article>
  );
}