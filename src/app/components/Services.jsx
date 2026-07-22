import Link from "next/link";
import ServicesSlider from "./sections/ServicesSlider";

const services = [
  {
    id: 1,
    title: "أرضيات إيبوكسي ثلاثية الأبعاد",
    description: "تصاميم واقعية بأعماق بصرية مذهلة تحول الأرضية إلى لوحة فنية.",
    image: "/images/s-1.png",
    href: "/services/3d-epoxy",
  },
  {
    id: 2,
    title: "إيبوكسي رخامي وميتاليك",
    description: "تدرجات معدنية وعروق رخامية تمنح المكان طابعًا فاخرًا معاصرًا.",
    image: "/images/s-2.png",
    href: "/services/metallic-epoxy",
  },
  {
    id: 3,
    title: "إيبوكسي المنازل والفلل",
    description: "حلول متكاملة لأرضيات المنازل مع تشطيبات ناعمة ومتينة.",
    image: "/images/s-3.png",
    href: "/services/home-epoxy",
  },
  {
    id: 4,
    title: "إيبوكسي المكاتب والمحلات",
    description: "أرضيات عملية أنيقة تتحمل طبيعة الاستخدام اليومية للمساحات التجارية.",
    image: "/images/s-1.png",
    href: "/services/commercial-epoxy",
  },
  {
    id: 5,
    title: "إيبوكسي المطاعم والكافيهات",
    description: "أرضيات مقاومة وسهلة التنظيف بتصميمات فاخرة.",
    image: "/images/s-2.png",
    href: "/services/restaurants-epoxy",
  },
  {
    id: 6,
    title: "الإيبوكسي الصناعي",
    description: "حلول قوية للمصانع والمخازن والجراجات والمساحات الصناعية.",
    image: "/images/s-3.png",
    href: "/services/industrial-epoxy",
  },
];

export default function Services({ locale = "ar" }) {
  const localizedServices = services.map((service) => ({
    ...service,
    href: `/${locale}${service.href}`,
  }));

  return (
    <section
      className="relative overflow-hidden py-[70px] md:py-[90px] lg:py-[100px]"
      aria-labelledby="services-title"
    >
      {/* Background Pattern */}
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

        <ServicesSlider services={localizedServices} locale={locale} />



      </div>
    </section>
  );
}