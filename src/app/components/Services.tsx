"use client";
import ServicesSlider from "./sections/ServicesSlider";
import { Service } from "../types/home";


type ServicesProps = {
  services: Service[];
  locale: string;
};

export default function Services({ services, locale }: ServicesProps) {
  return (
    <section
      className="relative overflow-hidden py-[70px] md:py-[90px] lg:py-[100px]"
      aria-labelledby="services-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/bk-2.png')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="container  relative z-10 bg-transparent">

        <div className="mx-auto mb-[40px] text-center md:mb-[50px]">
          <span className="inline-flex rounded-[30px] border border-primary px-8 py-2 text-custom14  text-white">
            خدماتنا
          </span>

          <h2
            id="services-title"
            className="mt-5 text-[30px] font-[700] leading-[1.5] text-white sm:text-[36px] md:text-[42px] lg:text-[40px]"
          >
            حلول إيبوكسي فاخرة تناسب كل مساحة
          </h2>
        </div>

        <ServicesSlider services={services} locale={locale} />
      </div>
    </section>
  );
}