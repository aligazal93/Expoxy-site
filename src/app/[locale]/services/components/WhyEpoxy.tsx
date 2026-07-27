import Image from "next/image";


export default function WhyUsEpoxy({ locale }: { locale?: string }) {
    return (
        <section
            className="relative overflow-hidden bg-white py-[100px]  "
            aria-labelledby="why-epoxy-title"
        >
            <div className="container relative z-10">
                <div className="grid items-center gap-[45px] lg:grid-cols-2 ">

                    {/* Content */}
                    <div className="relative z-20 text-center lg:text-right">
                        <span className="inline-flex rounded-[30px] border border-black/[0.07] px-5 py-2 text-custom14 font-[500] text-secondary">
                            لماذا الأولى للإيبوكسي؟
                        </span>

                        <h2
                            id="why-epoxy-title"
                            className="mx-auto mt-6  text-[30px] font-[700] leading-[1.5] text-secondary sm:text-[26px] md:text-[32px] lg:mx-0 lg:mt-7 lg:text-[40px] xl:text-[48px]"
                        >
                            أرضيات تعكس ذوقك وتمنح مساحتك هوية فريدة
                        </h2>

                        <p className="mx-auto mt-5  text-[14px] font-[400] leading-[2] text-secondary/80 sm:text-[16px] lg:mx-0 lg:mt-6 lg:text-custom18">
                            نصمم وننفذ أرضيات إيبوكسي فاخرة تجمع بين الإبداع في التصميم، ودقة التنفيذ، وجودة التشطيبات. نساعدك على اختيار الحل الأنسب لمساحتك، مع إعداد تصور بصري يتيح لك رؤية النتيجة المتوقعة قبل بدء التنفيذ، لتتخذ قرارك بثقة ووضوح.
                        </p>
                    </div>

                    {/* Images */}
                    <div className="relative w-full lg:pb-[100px]">
                        {/* Main Image */}
                        <div className="relative mx-auto h-[420px] w-full overflow-hidden rounded-[24px] sm:h-[500px] md:w-[90%] lg:h-[560px] lg:w-[90%] lg:rounded-[0_30px_30px_30px]">
                            <Image
                                src="/images/serv.png"
                                alt="تصميم أرضية إيبوكسي سوداء وذهبية بتشطيب فاخر"
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 990px) 90vw, 45vw"
                                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}