"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong, FaPlay } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

type ProjectGalleryProps = {
    locale?: "ar" | "en";
    previousProjectId?: number | string | null;
    nextProjectId?: number | string | null;
};

const galleryImages = [
    "/images/proj-1.png",
    "/images/proj-2.png",
    "/images/proj-3.png",
    "/images/proj-4.png",
    "/images/proj-1.png",
    "/images/proj-2.png",
    "/images/proj-1.png",
    "/images/proj-1.png",
];

export default function ProjectGallery({ locale = "ar", previousProjectId = null, nextProjectId = null }: ProjectGalleryProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handleNextImage = () => {
        setSelectedImageIndex((prev) => {
            if (prev === null) return null;

            return prev === galleryImages.length - 1 ? 0 : prev + 1;
        });
    };

    const handlePreviousImage = () => {
        setSelectedImageIndex((prev) => {
            if (prev === null) return null;

            return prev === 0 ? galleryImages.length - 1 : prev - 1;
        });
    };

    useEffect(() => {
        if (selectedImageIndex === null) return;

        document.body.style.overflow = "hidden";

        const handleKeyboard = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImageIndex(null);
            }

            if (event.key === "ArrowRight") {
                setSelectedImageIndex((prev) => {
                    if (prev === null) return null;

                    return prev === galleryImages.length - 1 ? 0 : prev + 1;
                });
            }

            if (event.key === "ArrowLeft") {
                setSelectedImageIndex((prev) => {
                    if (prev === null) return null;

                    return prev === 0 ? galleryImages.length - 1 : prev - 1;
                });
            }
        };

        window.addEventListener("keydown", handleKeyboard);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyboard);
        };
    }, [selectedImageIndex]);

    return (
        <>
            <section className="overflow-hidden bg-white py-[60px] md:py-[20px]" dir={locale === "ar" ? "rtl" : "ltr"}>
                <div className="container">

                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mb-8 md:mb-10">
                        <h2 className="text-[28px] font-[700] text-blackGrey sm:text-[32px] lg:text-[36px]">
                            معرض المشروع
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-12">

                        <GalleryImage
                            src="/images/proj-1.png"
                            alt="تنفيذ أرضية إيبوكسي داخل المشروع"
                            className="h-[280px] sm:col-span-2 sm:h-[400px] lg:col-span-12 lg:h-[520px]"
                            delay={0}
                            onClick={() => setSelectedImageIndex(0)}
                        />

                        <GalleryImage
                            src="/images/proj-2.png"
                            alt="أرضية إيبوكسي رخامي"
                            className="h-[300px] lg:col-span-7 lg:h-[430px]"
                            delay={0.05}
                            onClick={() => setSelectedImageIndex(1)}
                        />

                        <GalleryImage
                            src="/images/proj-3.png"
                            alt="تفاصيل تشطيب أرضيات الإيبوكسي"
                            className="h-[300px] lg:col-span-5 lg:h-[430px]"
                            delay={0.1}
                            onClick={() => setSelectedImageIndex(2)}
                        />

                        <GalleryImage
                            src="/images/proj-4.png"
                            alt="أرضيات إيبوكسي بتصميم فاخر"
                            className="h-[280px] lg:col-span-4 lg:h-[350px]"
                            delay={0.1}
                            onClick={() => setSelectedImageIndex(3)}
                        />

                        <GalleryImage
                            src="/images/proj-1.png"
                            alt="أرضية إيبوكسي داخلية"
                            className="h-[280px] lg:col-span-4 lg:h-[350px]"
                            delay={0.15}
                            onClick={() => setSelectedImageIndex(4)}
                        />

                        <GalleryImage
                            src="/images/proj-2.png"
                            alt="مشروع أرضيات إيبوكسي"
                            className="h-[280px] lg:col-span-4 lg:h-[350px]"
                            delay={0.2}
                            onClick={() => setSelectedImageIndex(5)}
                        />

                        <GalleryImage
                            src="/images/proj-1.png"
                            alt="تشطيب إيبوكسي احترافي"
                            className="h-[300px] lg:col-span-5 lg:h-[420px]"
                            delay={0.1}
                            onClick={() => setSelectedImageIndex(6)}
                        />

                        <GalleryImage
                            src="/images/proj-1.png"
                            alt="النتيجة النهائية لأرضية الإيبوكسي"
                            className="h-[300px] lg:col-span-7 lg:h-[420px]"
                            delay={0.15}
                            onClick={() => setSelectedImageIndex(7)}
                        />

                    </div>

                    <div className="mt-[60px] md:mt-[80px]">

                        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-7">
                            <h2 className="text-[28px] font-[700] text-blackGrey sm:text-[32px] lg:text-[36px]">
                                فيديوهات المشروع
                            </h2>

                            <p className="mt-2 max-w-[700px] text-[14px] leading-[1.9] text-greyColor sm:text-[15px]">
                                شاهد مراحل تنفيذ المشروع والنتيجة النهائية لأرضيات الإيبوكسي.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-5 ">

                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="group overflow-hidden rounded-[22px] border border-[#707070] bg-white">
                                <div className="relative aspect-video w-full overflow-hidden bg-white">

                                    {activeVideo === "KhHD24cFsks" ? (
                                        <iframe src="https://www.youtube-nocookie.com/embed/KhHD24cFsks?autoplay=1&rel=0&playsinline=1" title="مراحل تنفيذ أرضيات الإيبوكسي" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
                                    ) : (
                                        <button type="button" onClick={() => setActiveVideo("KhHD24cFsks")} aria-label="تشغيل الفيديو" className="absolute inset-0 h-full w-full overflow-hidden">
                                            <Image src="/images/proj-1.png" alt="مشاهدة مراحل تنفيذ أرضيات الإيبوكسي" fill sizes="(max-width: 990px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10" />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.94 }} className="flex h-[66px] w-[66px] items-center justify-center rounded-full border border-white/30 bg-white/95 text-[20px] text-primary shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur-md sm:h-[76px] sm:w-[76px] sm:text-[23px]">
                                                    <FaPlay className="translate-x-[2px]" />
                                                </motion.span>
                                            </div>

                                            <div className="absolute bottom-5 right-5 text-right text-white">
                                                <span className="mb-2 inline-flex rounded-full bg-black/40 px-3 py-1 text-[11px] font-[500] backdrop-blur-md">
                                                    فيديو المشروع
                                                </span>

                                                <p className="text-[16px] font-[700] sm:text-[18px]">
                                                    شاهد مراحل التنفيذ
                                                </p>
                                            </div>
                                        </button>
                                    )}

                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-[60px] flex items-center justify-between gap-3  pt-7 md:mt-[80px]">

                        {previousProjectId ? (
                            <Link href={`/${locale}/projects/${previousProjectId}`} className="group flex min-h-[48px] items-center justify-center gap-3 rounded-[10px] border border-borderColor px-4 text-[14px] font-[600] text-blackGrey transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:min-w-[175px] sm:text-[15px]">
                                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />

                                <span>
                                    المشروع السابق
                                </span>
                            </Link>
                        ) : (
                            <div />
                        )}

                        {nextProjectId ? (
                            <Link href={`/${locale}/projects/${nextProjectId}`} className="group flex min-h-[48px] items-center justify-center gap-3 rounded-[10px] border border-borderColor px-4 text-[14px] font-[600] text-blackGrey transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white sm:min-w-[175px] sm:text-[15px]">
                                <span>
                                    المشروع التالي
                                </span>

                                <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1" />
                            </Link>
                        ) : (
                            <div />
                        )}

                    </div>

                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={() => setSelectedImageIndex(null)} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6">

                        {/* Close */}
                        <motion.button type="button" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={() => setSelectedImageIndex(null)} aria-label="إغلاق معرض الصور" className="absolute right-4 top-4 z-30 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/10 bg-white/10 text-[27px] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:right-7 sm:top-7">
                            <IoClose />
                        </motion.button>

                        {/* Counter */}
                        <div className="absolute left-1/2 top-5 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[13px] font-[500] text-white backdrop-blur-md sm:top-7">
                            {selectedImageIndex + 1} / {galleryImages.length}
                        </div>

                        {/* Previous */}
                        <button type="button" onClick={(event) => { event.stopPropagation(); handlePreviousImage(); }} aria-label="الصورة السابقة" className="absolute left-3 top-1/2 z-30 flex h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[25px] text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:left-7 sm:h-[54px] sm:w-[54px]">
                            <IoChevronBack />
                        </button>

                        {/* Next */}
                        <button type="button" onClick={(event) => { event.stopPropagation(); handleNextImage(); }} aria-label="الصورة التالية" className="absolute right-3 top-1/2 z-30 flex h-[45px] w-[45px] -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[25px] text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:right-7 sm:h-[54px] sm:w-[54px]">
                            <IoChevronForward />
                        </button>

                        {/* Image */}
                        <AnimatePresence mode="wait">
                            <motion.div key={selectedImageIndex} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.15} onDragEnd={(_, info) => {
                                if (info.offset.x < -80) {
                                    handleNextImage();
                                }

                                if (info.offset.x > 80) {
                                    handlePreviousImage();
                                }
                            }} onClick={(event) => event.stopPropagation()} className="relative h-[75vh] w-[calc(100%-80px)] max-w-[1200px] cursor-grab active:cursor-grabbing sm:h-[82vh] sm:w-[calc(100%-150px)]">
                                <Image src={galleryImages[selectedImageIndex]} alt={`صورة المشروع رقم ${selectedImageIndex + 1}`} fill priority sizes="100vw" className="pointer-events-none select-none object-contain" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile hint */}
                        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap text-[11px] text-white/60 sm:hidden">
                            اسحب يمينًا أو يسارًا للتنقل
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

type GalleryImageProps = {
    src: string;
    alt: string;
    className: string;
    delay?: number;
    onClick: () => void;
};

function GalleryImage({ src, alt, className, delay = 0, onClick }: GalleryImageProps) {
    return (
        <motion.button type="button" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay }} onClick={onClick} className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-[20px] bg-[#F5F5F5] ${className}`}>
            <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, (max-width: 990px) 50vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
        </motion.button>
    );
}