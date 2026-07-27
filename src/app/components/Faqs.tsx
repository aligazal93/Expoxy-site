"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const defaultFaqs = [
    {
        id: 1,
        question: "هل يمكن التنفيذ فوق السيراميك؟",
        answer: "نعم، يمكن تنفيذ الإيبوكسي فوق السيراميك بعد تجهيز السطح بشكل صحيح لضمان التصاق مثالي وعمر أطول.",
    },
    {
        id: 2,
        question: "هل أرضيات الإيبوكسي مقاومة للبكتيريا؟",
        answer: "نعم، سطح الإيبوكسي المتجانس وقليل الفواصل يساعد على سهولة التنظيف ويجعله مناسبًا للعديد من المساحات التي تتطلب مستوى عاليًا من النظافة.",
    },
    {
        id: 3,
        question: "كم تستغرق مدة التنفيذ؟",
        answer: "تختلف مدة التنفيذ حسب مساحة المشروع، حالة الأرضية، ونوع التصميم، ويتم تحديد المدة المتوقعة بعد معاينة الموقع.",
    },
    {
        id: 4,
        question: "كيف يتم حساب السعر؟",
        answer: "يتم تحديد السعر بناءً على المساحة، حالة الأرضية الحالية، نوع الإيبوكسي، التصميم المختار ومتطلبات التجهيز والتنفيذ.",
    },
    {
        id: 5,
        question: "هل الإيبوكسي مقاوم للخدش؟",
        answer: "يتميز الإيبوكسي بمتانة عالية ومقاومة جيدة للاستخدام اليومي، ويمكن اختيار طبقات حماية إضافية حسب طبيعة واستخدام المكان.",
    },
    {
        id: 6,
        question: "هل يمكن رؤية التصميم قبل التنفيذ؟",
        answer: "نعم، يمكن إعداد تصور مبدئي للتصميم لمساعدتك على رؤية شكل الأرضية واختيار الألوان والنمط المناسب قبل بدء التنفيذ.",
    },
    {
        id: 7,
        question: "كيف تتم صيانة الأرضية؟",
        answer: "تتميز أرضيات الإيبوكسي بسهولة الصيانة، ويكفي تنظيفها بشكل دوري باستخدام أدوات ومنظفات مناسبة للحفاظ على مظهرها.",
    },
];

export default function FaqSection({
    faqs = defaultFaqs,
    locale,
}: { faqs?: any[], locale?: string }) {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    return (
        <section className="container py-[70px] md:py-[90px] lg:py-[110px]" aria-labelledby="faq-heading">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr]">

                {/* Content */}
                <div className="text-start lg:pt-3">
                    <span className="mb-6 block text-[13px] font-medium text-[#96908A]">
                        أسئلة شائعة
                    </span>

                    <h2 id="faq-heading" className="mb-5 text-[30px] font-bold leading-[1.4] text-[#102027] md:text-[38px] lg:text-[44px]">
                        كل ما تحتاج معرفته
                    </h2>

                    <p className="mb-7 max-w-[490px] text-[14px] leading-[2] text-[#77736F] md:text-[15px]">
                        جمعنا لك أكثر الأسئلة تكرارًا. إن لم تجد إجابتك، تواصل معنا مباشرة.
                    </p>

                    <Link href="" className="inline-flex min-h-[44px] items-center mx-1 justify-center rounded-full border border-[#05AEEF] px-6 text-[14px] font-medium text-[#05AEEF] transition-all duration-300 hover:bg-[#05AEEF] hover:text-white">
                        اسألنا عبر الواتساب
                    </Link>

                    <a href="/images/epoxy.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center mx-1 justify-center rounded-full border border-[#05AEEF] px-6 text-[14px] font-medium text-[#05AEEF] transition-all duration-300 hover:bg-[#05AEEF] hover:text-white">
                        تحميل ملف الشركة
                    </a>
                </div>

                {/* Accordion */}
                <div className="">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const contentId = `faq-content-${faq.id}`;
                        const buttonId = `faq-button-${faq.id}`;

                        return (
                            <article key={faq.id} className="border-b border-[#DED8D0]">
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={contentId}
                                        className="flex w-full items-center justify-between gap-5 py-[20px] text-start"
                                    >
                                        <span className="text-[16px] font-bold leading-[1.7] text-[#14242B] md:text-[18px]">
                                            {faq.question}
                                        </span>

                                        <FaChevronDown className={`shrink-0 text-[13px] text-[#14242B] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true" />
                                    </button>
                                </h3>

                                <div id={contentId} role="region" aria-labelledby={buttonId} className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <p className="max-w-[620px] pb-[20px] text-[13px] leading-[2] text-[#706D69] md:text-[14px]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}