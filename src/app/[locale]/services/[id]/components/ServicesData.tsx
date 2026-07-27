"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import Questions from "./Questions";

type ServicesDataProps = {
    locale: string;
};

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardsContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ServicesData({ locale }: ServicesDataProps) {
    const isArabic = locale === "ar";

    return (
        <section className="overflow-visible bg-white py-[0px] md:py-[80px] lg:py-[0px]" dir={isArabic ? "rtl" : "ltr"}>
            <div className="container">

                <div className="grid grid-cols-12 items-start gap-[30px] lg:gap-[35px] xl:gap-[48px]">

                    {/* Main Content */}
                    <div className="col-span-12 lg:col-span-9">

                        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp} className="mb-[25px] text-[20px] font-[700] leading-[1.4] text-blackGrey md:mb-[24px] md:text-[28px] lg:text-[32px]">
                            منهجية العمل
                        </motion.h2>

                        {/* Steps */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={cardsContainer} className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">

                            <motion.article variants={cardAnimation} className="group rounded-[16px] border border-[#E5E5E5] bg-white px-[20px] py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:px-[22px] md:py-[25px]">
                                <h3 className="mb-[14px] text-[16px] font-[700] text-blackGrey md:mb-[12px] md:text-[16px]">
                                    01. فهم احتياجاتك
                                </h3>

                                <p className="text-[14px] font-[400] leading-[2] text-greyColor">
                                    نبدأ بالتعرف على طبيعة المكان ونوع التصميم المطلوب والمساحة والاستخدام المتوقع، حتى نتمكن من تقديم الحل الأنسب.
                                </p>
                            </motion.article>

                            <motion.article variants={cardAnimation} className="group rounded-[16px] border border-[#E5E5E5] bg-white px-[20px] py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:px-[22px] md:py-[25px]">
                                <h3 className="mb-[14px] text-[14px] font-[700] text-blackGrey md:mb-[17px] md:text-[15px]">
                                    02. إعداد التصور واختيار التصميم
                                </h3>

                                <p className="text-[13px] font-[400] leading-[2] text-greyColor">
                                    نقترح مجموعة من التصاميم المناسبة ونجهز تصورًا بصريًا يساعدك على رؤية النتيجة قبل التنفيذ واختيار ما يناسب ذوقك.
                                </p>
                            </motion.article>

                            <motion.article variants={cardAnimation} className="group rounded-[16px] border border-[#E5E5E5] bg-white px-[20px] py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:px-[22px] md:py-[25px]">
                                <h3 className="mb-[14px] text-[14px] font-[700] text-blackGrey md:mb-[17px] md:text-[15px]">
                                    03. تجهيز الموقع واختيار الخامات
                                </h3>

                                <p className="text-[13px] font-[400] leading-[2] text-greyColor">
                                    بعد اعتماد التصميم، يتم تجهيز السطح واختيار المواد والتشطيبات المناسبة لضمان أفضل جودة وأداء طويل الأمد.
                                </p>
                            </motion.article>

                            <motion.article variants={cardAnimation} className="group rounded-[16px] border border-[#E5E5E5] bg-white px-[20px] py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:px-[22px] md:py-[25px]">
                                <h3 className="mb-[14px] text-[14px] font-[700] text-blackGrey md:mb-[17px] md:text-[15px]">
                                    04. التنفيذ والتسليم
                                </h3>

                                <p className="text-[13px] font-[400] leading-[2] text-greyColor">
                                    يبدأ فريقنا المتخصص في التنفيذ باحترافية مع الاهتمام بأدق التفاصيل حتى تسليم أرضية متقنة تجمع بين الجمال والمتانة.
                                </p>
                            </motion.article>

                        </motion.div>

                        {/* Image */}
                        <motion.div initial={{ opacity: 0, y: 35, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="group relative mt-[25px] aspect-[4/3] w-full overflow-hidden rounded-[16px] sm:aspect-[16/9] md:rounded-[20px] lg:aspect-[16/8]">
                            <Image src="/images/serv-3.png" alt="تنفيذ أرضيات الإيبوكسي الاحترافية" fill sizes="(max-width: 539px) 100vw, (max-width: 989px) 90vw, 75vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} className="mt-[30px] md:mt-[40px]">
                            <h2 className="mb-[18px] text-[26px] font-[700] leading-[1.4] text-blackGrey md:text-[30px] lg:text-[34px]">
                                لماذا الأولى للإيبوكسي؟
                            </h2>

                            <p className="mb-[20px] text-[16px] font-[400] leading-[2] text-[#707070]">
                                في الأولى للإيبوكسي لا نقدم عملًا على تنفيذ أرضيات جميلة فقط، بل نركز على تقديم تجربة متكاملة تمنح العميل الثقة منذ اللحظة الأولى وحتى اكتمال المشروع.
                            </p>

                            <ul className="space-y-[10px] mb-6 mx-4 pe-[18px] text-[13px] font-[400] leading-[1.8] text-[#707070] md:text-[14px]">
                                <li className="list-disc">
                                    استشارة متخصصة لفهم احتياجات كل مساحة.
                                </li>

                                <li className="list-disc">
                                    تصاميم عصرية تناسب ذوق العميل وطبيعة المكان.
                                </li>

                                <li className="list-disc">
                                    تصور بصري يساعدك على اتخاذ القرار قبل التنفيذ.
                                </li>

                                <li className="list-disc">
                                    خامات إيبوكسي عالية الجودة وتشطيبات احترافية.
                                </li>

                                <li className="list-disc">
                                    تنفيذ دقيق وفق أعلى معايير الجودة.
                                </li>

                                <li className="list-disc">
                                    التزام بالمواعيد ومتابعة في جميع مراحل العمل.
                                </li>
                            </ul>
                        </motion.div>


                        <h2 className="mb-0 lg:mb-[18px] border-y-[1px] py-[30px] border-[#CFCECD] text-[26px] font-[700] leading-[1.4] text-blackGrey md:text-[30px] lg:text-[34px]">
                            الأسئلة الشائعة
                        </h2>

                        <Questions locale={locale} />


                    </div>

                    {/* Sticky CTA */}
                    <motion.aside initial={{ opacity: 0, x: isArabic ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="col-span-12 lg:col-span-3 lg:sticky lg:top-[110px]">
                        <div className="relative mb-[20px] overflow-hidden rounded-[20px] bg-[#0FA9E6] px-[22px] py-[25px] text-center text-white shadow-[0_20px_50px_rgba(15,169,230,0.15)] md:px-[30px] md:py-[30px]">

                            <div className="pointer-events-none absolute -end-[60px] -top-[60px] h-[150px] w-[150px] rounded-full bg-white/[0.08]" aria-hidden="true" />

                            <div className="pointer-events-none absolute -bottom-[80px] -start-[70px] h-[180px] w-[180px] rounded-full bg-white/[0.06]" aria-hidden="true" />

                            <div className="relative z-10">
                                <span className="mb-[10px] block text-[12px] font-[500] text-white/90">
                                    إبدأ مشروعك معنا
                                </span>

                                <h3 className="mb-[15px] text-[22px] font-[700] leading-[1.5] md:text-[24px]">
                                    هل لديك فكرة لأرضيتك؟
                                </h3>

                                <p className="mb-[22px] text-[13px] font-[400] leading-[1.9] text-white/90">
                                    شاركنا نوع المكان أو تفاصيل المساحة وسنساعدك في اختيار التصميم المناسب ونقدم لك تصورًا أوليًا للتنفيذ بدون تعقيد.
                                </p>

                                <Link href={`/${locale}/contact`} className="group/btn flex min-h-[46px] w-full items-center justify-center gap-[12px] rounded-[8px] bg-white px-[16px] text-[14px] font-[600] text-primary shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.14)]">
                                    اطلب هذه الخدمة

                                    <span className="transition-transform duration-300 group-hover/btn:-translate-x-[4px]" aria-hidden="true">
                                        ←
                                    </span>
                                </Link>
                            </div>

                        </div>
                    </motion.aside>

                </div>

            </div>
        </section>
    );
}