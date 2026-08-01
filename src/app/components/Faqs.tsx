"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

interface FaqItem {
    id?: number | string;
    title: string;
    content: string;
}

interface FaqSectionProps {
    faqs?: FaqItem[];
    info?: {
        whatsapp?: string;
    };
    locale?: string;
}

export default function FaqSection({ faqs = [], info = {}, locale = "ar" }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const isArabic = locale === "ar";
    const whatsappNumber = info.whatsapp?.replace(/\D/g, "");
    const whatsappMessage = isArabic ? "مرحبًا، لدي استفسار بخصوص خدمات الإيبوكسي" : "Hello, I have a question about your epoxy services";
    const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}` : "";

    const handleToggle = (index: number) => {
        setOpenIndex((current) => (current === index ? null : index));
    };

    if (faqs.length === 0) return null;
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

                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center mx-1 justify-center rounded-full border border-[#05AEEF] px-6 text-[14px] font-medium text-[#05AEEF] transition-all duration-300 hover:bg-[#05AEEF] hover:text-white">
                        اسألنا عبر الواتساب
                    </Link>

                    {/* <a href="/images/epoxy.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center mx-1 justify-center rounded-full border border-[#05AEEF] px-6 text-[14px] font-medium text-[#05AEEF] transition-all duration-300 hover:bg-[#05AEEF] hover:text-white">
                        تحميل ملف الشركة
                    </a> */}
                </div>

                {/* Accordion */}
                <div className="">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const contentId = `faq-content-${faq.id}`;
                        const buttonId = `faq-button-${faq.id}`;

                        return (
                            <article key={index} className="border-b border-[#DED8D0]">
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
                                            {faq.title}
                                        </span>

                                        <FaChevronDown className={`shrink-0 text-[13px] text-[#14242B] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} aria-hidden="true" />
                                    </button>
                                </h3>

                                <div id={contentId} role="region" aria-labelledby={buttonId} className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                    <div className="overflow-hidden">
                                        <p className="max-w-[620px] pb-[20px] text-[13px] leading-[2] text-[#706D69] md:text-[14px]">
                                            {faq.content}
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