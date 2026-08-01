"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

interface Category {
    id: number | string;
    title: string;
}

interface Design {
    code: string;
    name: string;
    subtitle: string;
    image: string;
    category: Category;
}

interface DesignGallerySectionProps {
    categories?: Category[];
    designs?: Design[];
    locale?: string;
}

interface CategoryButtonProps {
    label: string;
    value: string;
    activeCategory: string;
    onSelect: (value: string) => void;
}

interface DesignCardProps {
    design: Design;
    locale: string;
}

function CategoryButton({ label, value, activeCategory, onSelect }: CategoryButtonProps) {
    const isActive = activeCategory === value;

    return (
        <button type="button" aria-pressed={isActive} onClick={() => onSelect(value)} className={`relative shrink-0 touch-manipulation overflow-hidden whitespace-nowrap rounded-full border px-5 py-2 text-[13px] font-[600] transition-colors duration-300 ${isActive ? "border-primary text-white" : "border-[#D8E0E8] bg-white text-[#667085] hover:border-primary hover:text-primary"}`}>
            {isActive && <motion.span layoutId="active-design-category" className="absolute inset-0 bg-primary" transition={{ type: "spring", stiffness: 450, damping: 35 }} />}

            <span className="relative z-10">{label}</span>
        </button>
    );
}

function DesignCard({ design, locale }: DesignCardProps) {
    const isArabic = locale === "ar";

    return (
        <motion.article layout data-category={design.category?.id} initial={{ opacity: 0, y: 35, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }} className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-shadow duration-500 hover:border-primary/25 hover:shadow-[0_25px_65px_rgba(15,23,42,0.13)]">
            <div className="relative aspect-[1.08/1] w-full overflow-hidden bg-[#F2F4F7]">
                <Image src={design.image} alt={design.name} fill sizes="(max-width: 767px) 100vw, (max-width: 990px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]" />

                <span className="absolute start-4 top-4 rounded-full border border-[#B9E8FF] bg-white/95 px-3 py-1.5 text-[11px] font-[700] text-[#0BA5EC] shadow-sm backdrop-blur-md">
                    {design.code}
                </span>
            </div>

            <div className="relative flex flex-1 flex-col p-5 md:p-6">
                {design.category?.title && (
                    <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="inline-flex rounded-full bg-primary/5 px-3 py-1 text-[11px] font-[600] text-primary">
                            {design.category.title}
                        </span>
                    </div>
                )}

                <h3 className="mb-2 text-[18px] font-[700] leading-[1.6] text-blackGrey transition-colors duration-300 group-hover:text-primary md:text-[20px]">
                    {design.name}
                </h3>

                {design.subtitle && (
                    <p className="mb-5 text-[13px] font-[400] leading-7 text-[#667085]">
                        {design.subtitle}
                    </p>
                )}

                <Link href={`/${locale}/flooring-design?design=${encodeURIComponent(design.code)}`} className="group/button mt-auto flex w-fit items-center gap-2 rounded-full border border-primary px-4 py-2 text-[12px] font-[700] text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_8px_25px_rgba(22,95,174,0.25)]">
                    {isArabic ? "أريد هذا التصميم لأرضيتي" : "I want this floor design"}

                    {isArabic ? <FaArrowLeftLong className="transition-transform duration-300 group-hover/button:-translate-x-1" /> : <FaArrowRightLong className="transition-transform duration-300 group-hover/button:translate-x-1" />}
                </Link>
            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </motion.article>
    );
}

export default function DesignGallerySection({ categories = [], designs = [], locale = "ar" }: DesignGallerySectionProps) {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const isArabic = locale === "ar";

    const availableCategories = useMemo(() => {
        const categoriesMap = new Map<string, Category>();

        categories.forEach((category) => {
            categoriesMap.set(String(category.id), category);
        });

        designs.forEach((design) => {
            if (design.category) {
                categoriesMap.set(String(design.category.id), design.category);
            }
        });

        return Array.from(categoriesMap.values());
    }, [categories, designs]);

    const filteredDesigns = useMemo(() => {
        if (activeCategory === "all") {
            return designs;
        }

        return designs.filter((design) => String(design.category?.id) === activeCategory);
    }, [activeCategory, designs]);

    if (categories.length === 0 && designs.length === 0) {
        return null;
    }

    return (
        <section id="designs" dir={isArabic ? "rtl" : "ltr"} className="relative overflow-hidden bg-white py-[70px] md:py-[90px] lg:py-[120px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(22,95,174,0.07),_transparent_38%)]" />

            <div className="pointer-events-none absolute -end-[120px] top-[15%] h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[100px]" />

            <div className="pointer-events-none absolute -start-[120px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="container relative z-10">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-8 max-w-[750px] text-center md:mb-10">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-4 py-2 text-[12px] font-[600] text-[#667085] shadow-sm">
                        <HiOutlineSparkles className="text-primary" size={16} />

                        {isArabic ? "كتالوج التصاميم" : "Design catalogue"}
                    </span>

                    <h2 className="mb-4 text-[28px] font-[700] leading-[1.45] text-[#101828] sm:text-[34px] md:text-[42px]">
                        {isArabic ? (
                            <>
                                اختر التصميم الذي يلامس{" "}
                                ذوقك
                            </>
                        ) : (
                            <>
                                Choose the design that matches{" "}
                                <span className="relative whitespace-nowrap text-primary">
                                    your style
                                    <span className="absolute -bottom-1 start-0 h-[7px] w-full rounded-full bg-primary/10" />
                                </span>
                            </>
                        )}
                    </h2>

                    <p className="mx-auto max-w-[650px] text-[14px] font-[400] leading-7 text-[#667085] md:text-[16px]">
                        {isArabic ? "مجموعة مختارة من التصاميم العصرية، صُممت لتمنح مساحتك طابعًا مميزًا يعكس ذوقك وشخصيتك." : "A curated collection of modern flooring designs created to give your space a distinctive and elegant identity."}
                    </p>
                </motion.div>

                {availableCategories.length > 0 && (
                    <div className="mb-8 w-full max-w-full overflow-x-auto overscroll-x-contain pb-3 touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="flex w-max min-w-full flex-nowrap items-center gap-2 px-1 lg:justify-center">
                            <CategoryButton label={isArabic ? "الكل" : "All"} value="all" activeCategory={activeCategory} onSelect={setActiveCategory} />

                            {availableCategories.map((category, index) => (
                                <CategoryButton key={category.id ?? `${category.title}-${index}`} label={category.title} value={String(category.id)} activeCategory={activeCategory} onSelect={setActiveCategory} />
                            ))}
                        </motion.div>
                    </div>
                )}

                {filteredDesigns.length > 0 ? (
                    <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                            {filteredDesigns.map((design, index) => (
                                <DesignCard key={`${design.category?.id}-${design.code}-${index}`} design={design} locale={locale} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="rounded-[20px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 py-14 text-center">
                        <span className="mx-auto mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary/5 text-primary">
                            <HiOutlineSparkles size={24} />
                        </span>

                        <p className="text-[15px] font-[600] text-[#667085]">
                            {isArabic ? "لا توجد تصاميم مضافة داخل هذا التصنيف حاليًا." : "There are currently no designs in this category."}
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}