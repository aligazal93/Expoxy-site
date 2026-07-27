
type RoadProps = {
    locale: string;
    title: string;
};

export default function Road({ locale, title }: RoadProps) {
    return (
        <section
            className=" relative overflow-hidden py-[100px] md:py-[110px] lg:py-[120px] bg-[url('/images/bk-2.png')] bg-cover bg-center bg-no-repeat "
            aria-labelledby="works-hero-title"
        >
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            />

            <div className="container relative z-10">
                <div className="flex flex-col gap-8 justify-center sm:flex-row sm:items-center sm:justify-between lg:gap-12">
                    <h2
                        id="works-hero-title"
                        className="text-[30px] text-center font-[700] leading-none text-white md:text-[40px] lg:text-[42px] xl:text-[48px]"
                    >
                        {title}
                    </h2>

                    <nav
                        aria-label="breadcrumb"
                    >
                        <ol className="flex items-center justify-center gap-3 text-[13px] font-[400] text-white/85 sm:text-custom14 md:text-[15px]">
                            <li>
                                <a
                                    href={`/${locale}/`}
                                    className="transition-colors duration-200 hover:text-white"
                                >
                                    الرئيسية
                                </a>
                            </li>
                            <li
                                aria-hidden="true"
                                className="text-white/70"
                            >
                                |
                            </li>
                            <li
                                aria-current="page"
                                className="text-white"
                            >
                                {title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
}