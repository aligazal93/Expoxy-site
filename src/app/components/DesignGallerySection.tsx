"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";

type Category = "all" | "3d" | "marble" | "metallic" | "pearl" | "industrial" | "pools";

interface DesignGallerySectionProps {
    locale?: string;
}

interface CategoryButtonProps {
    label: string;
    value: Category;
    activeCategory: Category;
    setActiveCategory: Dispatch<SetStateAction<Category>>;
}

interface DesignCardProps {
    locale: string;
    code: string;
    image: string;
    title: string;
    categoryLabel: string;
    categoryKey: Category;
    description: string;
}

function CategoryButton({ label, value, activeCategory, setActiveCategory }: CategoryButtonProps) {
    const active = activeCategory === value;

    return (
        <button type="button" aria-pressed={active} onClick={() => setActiveCategory(value)} className={`relative shrink-0 touch-manipulation overflow-hidden whitespace-nowrap rounded-full border px-5 py-2 text-[13px] font-[600] transition-colors duration-300 ${active ? "border-primary text-white" : "border-[#D8E0E8] bg-white text-[#667085] hover:border-primary hover:text-primary"}`}>
            {active && <motion.span layoutId="active-design-category" className="absolute inset-0 bg-primary" transition={{ type: "spring", stiffness: 450, damping: 35 }} />}

            <span className="relative z-10">{label}</span>
        </button>
    );
}

function DesignCard({ locale, code, image, title, categoryLabel, categoryKey, description }: DesignCardProps) {
    const isArabic = locale === "ar";

    return (
        <motion.article layout data-category={categoryKey} initial={{ opacity: 0, y: 35, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-shadow duration-500 hover:border-primary/25 hover:shadow-[0_25px_65px_rgba(15,23,42,0.13)]">
            <div className="relative aspect-[1.08/1] w-full overflow-hidden bg-[#F2F4F7]">
                <Image src={image} alt={title} fill sizes="(max-width: 767px) 100vw, (max-width: 990px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]" />

                <span className="absolute start-4 top-4 rounded-full border border-[#B9E8FF] bg-white/95 px-3 py-1.5 text-[11px] font-[700] text-[#0BA5EC] shadow-sm backdrop-blur-md">
                    {code}
                </span>
            </div>

            <div className="relative p-5 md:p-6">
                <h3 className="mb-2 text-[18px] font-[700] leading-[1.6] text-blackGrey transition-colors duration-300 group-hover:text-primary md:text-[20px]">
                    {title}
                </h3>

                <p className="mb-5 text-[13px] font-[400] leading-7 text-[#667085]">
                    {description}
                </p>

                <Link href={`/${locale}/contact-us?design=${code}`} className="group/button flex w-fit items-center gap-2 rounded-full border border-primary px-4 py-2 text-[12px] font-[700] text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_8px_25px_rgba(22,95,174,0.25)]">
                    أريد هذا التصميم لأرضيتي
                </Link>
            </div>

            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </motion.article>
    );
}

export default function DesignGallerySection({ locale = "ar" }: DesignGallerySectionProps) {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const isArabic = locale === "ar";

    const showCategory = (category: Category) => {
        return activeCategory === "all" || activeCategory === category;
    };

    return (
        <section id="designs" className="relative overflow-hidden bg-white py-[70px] md:py-[90px] lg:py-[120px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(22,95,174,0.07),_transparent_38%)]" />

            <div className="pointer-events-none absolute -end-[120px] top-[15%] h-[300px] w-[300px] rounded-full bg-secondary/5 blur-[100px]" />

            <div className="pointer-events-none absolute -start-[120px] bottom-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="container relative z-10">
                <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mb-8 max-w-[750px] text-center md:mb-10">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E4E7EC] bg-white px-4 py-2 text-[12px] font-[600] text-[#667085] shadow-sm">
                        {isArabic ? "كتالوج التصاميم" : "Design catalogue"}
                    </span>

                    <h2 className="mb-4 text-[28px] font-[700] leading-[1.45] text-[#101828] sm:text-[34px] md:text-[42px]">
                        {isArabic ? (
                            <>
                                اختر التصميم الذي يلامس {''}
                                <span className="relative whitespace-nowrap text-primary">
                                    ذوقك
                                </span>
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

                <div className="mb-8 w-full max-w-full overflow-x-auto overscroll-x-contain pb-4 touch-pan-x [scrollbar-width:thin] [scrollbar-color:#165FAE_#E4E7EC] [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="flex w-max min-w-full flex-nowrap items-center gap-2 px-1 lg:w-full lg:justify-center">
                        <CategoryButton label={isArabic ? "الكل" : "All"} value="all" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "إيبوكسي 3D" : "3D Epoxy"} value="3d" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "رخامي" : "Marble"} value="marble" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "ميتاليك" : "Metallic"} value="metallic" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "لؤلؤي" : "Pearl"} value="pearl" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "صناعي" : "Industrial"} value="industrial" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

                        <CategoryButton label={isArabic ? "مسابح" : "Pools"} value="pools" activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    </motion.div>
                </div>

                <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {showCategory("3d") && (
                            <DesignCard key="design-3d" locale={locale} code="AE-GD-001" image="/images/proj-1.png" title={isArabic ? "أمواج المحيط 3D" : "3D Ocean Waves"} categoryLabel={isArabic ? "إيبوكسي ثلاثي الأبعاد" : "3D Epoxy"} categoryKey="3d" description={isArabic ? "تصميم مستوحى من أمواج البحر يمنح المساحة عمقًا بصريًا وتجربة مختلفة." : "An ocean-inspired design that creates visual depth and a unique flooring experience."} />
                        )}

                        {showCategory("metallic") && (
                            <DesignCard key="design-metallic" locale={locale} code="AE-GD-002" image="/images/proj-2.png" title={isArabic ? "لؤلؤ ميتاليك فضي" : "Silver Metallic Pearl"} categoryLabel={isArabic ? "ميتاليك" : "Metallic"} categoryKey="metallic" description={isArabic ? "تموجات فضية ناعمة بلمعان متوازن تناسب المساحات الحديثة والفاخرة." : "Soft silver waves with balanced shine, ideal for luxurious modern spaces."} />
                        )}

                        {showCategory("marble") && (
                            <DesignCard key="design-marble" locale={locale} code="AE-GD-003" image="/images/proj-3.png" title={isArabic ? "عروق ذهبية على عاج" : "Golden Ivory Veins"} categoryLabel={isArabic ? "رخامي" : "Marble"} categoryKey="marble" description={isArabic ? "مزيج عاجي أنيق مع عروق ذهبية يمنح الأرضية مظهر الرخام الطبيعي." : "An elegant ivory surface with gold veins inspired by natural marble."} />
                        )}

                        {showCategory("pearl") && (
                            <DesignCard key="design-pearl" locale={locale} code="AE-GD-004" image="/images/proj-1.png" title={isArabic ? "كريمي لؤلؤي هادئ" : "Soft Pearl Cream"} categoryLabel={isArabic ? "لؤلؤي" : "Pearl"} categoryKey="pearl" description={isArabic ? "درجات كريمية هادئة بلمسة لؤلؤية تضيف اتساعًا وراحة للمكان." : "Calm cream tones with a pearl effect that make the space feel brighter and wider."} />
                        )}

                        {showCategory("industrial") && (
                            <DesignCard key="design-industrial" locale={locale} code="AE-GD-005" image="/images/proj-1.png" title={isArabic ? "رمادي صناعي عصري" : "Modern Industrial Grey"} categoryLabel={isArabic ? "صناعي" : "Industrial"} categoryKey="industrial" description={isArabic ? "أرضية قوية وعملية بتصميم عصري مناسبة للمكاتب والمشاريع التجارية." : "A durable modern flooring design suitable for offices and commercial projects."} />
                        )}

                        {showCategory("pools") && (
                            <DesignCard key="design-pools" locale={locale} code="AE-GD-006" image="/images/proj-1.png" title={isArabic ? "أزرق كريستالي للمسابح" : "Crystal Pool Blue"} categoryLabel={isArabic ? "مسابح" : "Pools"} categoryKey="pools" description={isArabic ? "تدرجات زرقاء منعشة تعكس صفاء المياه وتمنح المسبح مظهرًا جذابًا." : "Refreshing blue tones that enhance the clarity and visual appeal of swimming pools."} />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}