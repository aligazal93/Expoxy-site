import Image from "next/image";
import { LuDownload } from "react-icons/lu";

type AboutContentProps = {
    locale: string;
};

type AboutData = {
    label: string;
    title: string;
    description: string[];
    vision: {
        title: string;
        description: string;
    };
    mission: {
        title: string;
        description: string;
    };
    download: string;
};



export default function AboutContent({ locale }: AboutContentProps) {
    const isArabic = locale === "ar";

    return (
        <section className="relative py-[70px] md:py-[90px] lg:py-[120px]" aria-labelledby="about-content-title">
            <div className="container">
                <div className="grid items-center gap-[40px]  lg:gap-[45px] xl:gap-[60px]">
                    <div className="col-span-12">
                        <span className="mb-[20px] block text-[15px] font-medium text-primary">
                            من نحن
                        </span>

                        <h2 id="about-content-title" className="mb-[10px] w-full lg:w-1/2 text-[30px] font-bold leading-[1.5] text-blackGrey md:text-[36px] lg:text-[42px] xl:text-[46px]">
                            نصنع أرضيات تعكس ذوقك وتمنح مساحتك هوية فريدة
                        </h2>
                    </div>

                    <div className="col-span-12 lg:col-span-3">
                        <p className="mb-[20px] text-custom14 leading-relaxed text-[#707070]">
                            في الأولى للإيبوكسي نؤمن أن الأرضية ليست مجرد جزء من المكان، بل هي العنصر الذي يمنح المساحة شخصيتها ويعكس مستوى الجودة والفخامة فيها. لذلك نحرص على تقديم حلول إيبوكسي متكاملة تجمع بين الإبداع في التصميم، والدقة في التنفيذ، وجودة التشطيبات.
                        </p>


                        <p className="mb-[20px] text-custom14 leading-relaxed text-[#707070]">
                            في الأولى للإيبوكسي نؤمن أن الأرضية ليست مجرد جزء من المكان، بل هي العنصر الذي يمنح المساحة شخصيتها ويعكس مستوى الجودة والفخامة فيها. لذلك نحرص على تقديم حلول إيبوكسي متكاملة تجمع بين الإبداع في التصميم، والدقة في التنفيذ، وجودة التشطيبات.
                        </p>

                        <p className="mb-[10px] text-custom14 leading-relaxed text-[#707070]">
                            من خلال فريق متخصص وخبرة عملية في تنفيذ أرضيات الإيبوكسي، نسعى إلى تقديم حلول تجمع بين الجمال، الأداء، والاستدامة، مع الاهتمام بأدق التفاصيل لضمان تجربة تنفيذ مميزة ونتائج تدوم لسنوات.
                        </p>

                        <a href="/images/epoxy.pdf" target="_blank" rel="noopener noreferrer" className="mt-[10px] inline-flex items-center gap-[10px] rounded-[8px] bg-primary px-[22px] py-[13px] text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-[2px] hover:opacity-90">
                            تحميل الملف
                            <LuDownload className="text-[17px]" />
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-6">
                        <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[20px]">
                            <Image alt="About pic" src="/images/about-1.png" width={200} height={200} className="object-cover w-full h-full" sizes="(max-width: 990px) 90vw, 35vw" />
                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-3">
                        <div>
                            <h3 className="mb-[10px] text-custom20 font-bold text-dark">رؤيتنا</h3>

                            <p className="text-custom14 leading-relaxed text-[#707070] lg:w-[80%] w-full">
                                أن نكون الخيار الأول في مجال تصميم وتنفيذ أرضيات الإيبوكسي الفاخرة، من خلال تقديم حلول مبتكرة، وجودة تنفيذ عالية، وتجربة عمل ترتكز على الثقة والاحترافية.
                            </p>
                        </div>

                        <div className="my-[35px] h-[2px] border border-[#CFCECD] w-full bg-[#CFCECD]" />

                        <div>
                            <h3 className="mb-[10px] text-custom20 font-bold text-dark">رسالتنا</h3>

                            <p className="text-custom14 leading-relaxed text-[#707070] lg:w-[80%] w-full">
                                تقديم حلول إيبوكسي متكاملة تحول الأفكار إلى أرضيات استثنائية، عبر تصميمات مخصصة، تصور بصري قبل التنفيذ، وخدمات احترافية تضمن أعلى مستويات الجودة والرضا في كل مشروع.
                            </p>
                        </div>

                    </div>






                </div>
            </div>
        </section>
    );
}