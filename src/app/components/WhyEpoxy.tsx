import Image from "next/image";

const epoxyImages = [
    {
        id: 1,
        src: "/images/m-1.png",
        alt: "أرضية إيبوكسي رخامية بتصميم عصري",
    },
    {
        id: 2,
        src: "/images/m-2.png",
        alt: "أرضية إيبوكسي داخل منزل بتصميم فاخر",
    },
    {
        id: 3,
        src: "/images/m-3.png",
        alt: "أرضية إيبوكسي داخل منزل بتصميم فاخر",
    },

];

export default function WhyEpoxy({ locale }: { locale?: string }) {
    return (
        <section
            className="relative overflow-hidden bg-white py-[100px]  "
            aria-labelledby="why-epoxy-title"
        >

            <div
                className="pointer-events-none absolute bottom-20 right-0 h-[400px] w-[100%]"
                aria-hidden="true"
            >
                <Image
                    src="/images/layer-1.png"
                    alt=""
                    fill
                    sizes="65vw"
                    className="object-contain object-bottom-right"
                />
            </div>
            <div
                className="pointer-events-none absolute bottom-0 right-0 hidden h-[55%] w-[50%] opacity-[0.04] lg:block"
                aria-hidden="true"
            >
                <Image
                    src="/images/layer-1.png"
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-contain object-bottom-right"
                />
            </div>

            <div className="container relative z-10">
                <div className="grid items-center gap-[45px] lg:grid-cols-2 ">

                    {/* Content */}
                    <div className="relative z-20 text-center lg:text-right">
                        <span className="inline-flex rounded-[30px] border border-black/[0.07] px-5 py-2 text-custom14 font-[500] text-secondary">
                            لماذا الأولى للإيبوكسي؟
                        </span>

                        <h2
                            id="why-epoxy-title"
                            className="mx-auto mt-6 max-w-[600px] text-[30px] font-[700] leading-[1.5] text-secondary sm:text-[36px] md:text-[40px] lg:mx-0 lg:mt-7 lg:text-[48px] xl:text-[52px]"
                        >
                            أرضيات مصممة لتمنح مساحتك طابعًا استثنائيًا
                        </h2>

                        <p className="mx-auto mt-5 max-w-[600px] text-[14px] font-[400] leading-[2] text-secondary/80 sm:text-[15px] lg:mx-0 lg:mt-6 lg:text-custom16">
                            نقدم حلول أرضيات إيبوكسي فاخرة تجمع بين التصميم العصري، الجودة
                            العالية، والتنفيذ الاحترافي. نساعدك على اختيار التصميم المناسب
                            لمساحتك مع إمكانية إعداد تصور بصري قبل بدء التنفيذ.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="relative w-full lg:pb-[100px]">
                        {/* Main Image */}
                        <div className="relative mx-auto h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[500px] md:w-[90%] lg:h-[560px] lg:w-[90%] lg:rounded-[0_30px_30px_30px]">
                            <Image
                                src="/images/pic-1.png"
                                alt="تصميم أرضية إيبوكسي سوداء وذهبية بتشطيب فاخر"
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 990px) 90vw, 45vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                            />
                        </div>

                        {/* Small Images */}
                        <div className="relative mx-auto mt-3 grid w-[96%] grid-cols-3 gap-2 sm:mt-4 sm:w-[92%] sm:gap-3 lg:absolute lg:-bottom-0 lg:left-1/2 lg:mt-0 lg:w-[95%] lg:-translate-x-1/2 lg:gap-4">
                            {epoxyImages.slice(0, 3).map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative h-[100px] overflow-hidden rounded-[14px] border-[4px] border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[145px] sm:rounded-[20px] md:h-[170px] lg:h-[190px] lg:rounded-[24px] lg:border-[6px]"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        sizes="(max-width: 767px) 31vw, (max-width: 990px) 28vw, 190px"
                                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}