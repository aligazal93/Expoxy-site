import { Service } from "@/app/types/home";
import Image from "next/image";
import Link from "next/link";



type ServiceCardProps = {
  service: Service;
  locale: string;
};

export default function AllServices({ services, locale }) {
  return (
    <>
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


          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} locale={locale} />
            ))}
          </div>

        </div>
      </section>

    </>
  );
}


function ServiceCard({ service, locale }: ServiceCardProps) {
  const serviceUrl = `/${locale}/services/${service.id}`;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-sm">
      <Link href={serviceUrl} aria-label={service.name} className="relative block shrink-0 overflow-hidden sm:h-[300px]">
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

      <Link href={`/${locale}/services/${service.id}`} aria-label={service.name} className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={service.image} alt={service.name} fill sizes="(max-width: 539px) 100vw, (max-width: 766px) 45vw, (max-width: 989px) 34vw, 25vw" className="scale-[1.08] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" />
        </div>
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