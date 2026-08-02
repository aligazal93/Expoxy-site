"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong, FaExpand, FaPlay, FaXmark } from "react-icons/fa6";

import type { ProjectImage, ProjectVideo } from "@/app/types/projectDetails";
import EmptyData from "@/app/components/EmptyData";

interface ProjectGalleryProps {
    images: ProjectImage[];
    videos: ProjectVideo[];
    projectName: string;
    locale: string;
}

interface ValidVideo extends ProjectVideo {
    resolvedVideoId: string;
}

function hasValidFileUrl(url?: string | null) {
    if (!url) return false;

    try {
        const pathname = new URL(url).pathname;
        const fileName = pathname.split("/").filter(Boolean).pop();

        return Boolean(fileName && fileName.includes("."));
    } catch {
        return false;
    }
}

function getYouTubeId(url?: string | null) {
    if (!url) return "";

    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.replace("www.", "");

        if (hostname === "youtu.be") {
            return parsedUrl.pathname.split("/").filter(Boolean)[0] || "";
        }

        if (hostname.includes("youtube.com")) {
            const watchId = parsedUrl.searchParams.get("v");

            if (watchId) {
                return watchId;
            }

            const pathParts = parsedUrl.pathname.split("/").filter(Boolean);

            if (pathParts[0] === "embed" || pathParts[0] === "shorts") {
                return pathParts[1] || "";
            }
        }

        return "";
    } catch {
        return "";
    }
}

function getImageLayout(index: number) {
    const layoutIndex = index % 6;

    if (layoutIndex === 0) {
        return "sm:col-span-2 lg:col-span-8 lg:row-span-2";
    }

    if (layoutIndex === 1 || layoutIndex === 2) {
        return "lg:col-span-4 lg:row-span-1";
    }

    return "lg:col-span-4 lg:row-span-1";
}

export default function ProjectGallery({ images, videos, projectName, locale }: ProjectGalleryProps) {
    const isArabic = locale === "ar";

    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const validImages = (images ?? []).filter((image) => hasValidFileUrl(image.url));

    const validVideos: ValidVideo[] = (videos ?? [])
        .map((video) => ({
            ...video,
            resolvedVideoId: video.video_id?.trim() || getYouTubeId(video.url),
        }))
        .filter((video) => Boolean(video.resolvedVideoId));

    const isModalOpen = activeImageIndex !== null || activeVideoId !== null;

    const closeModal = () => {
        setActiveImageIndex(null);
        setActiveVideoId(null);
    };

    const showPreviousImage = () => {
        if (validImages.length <= 1) return;

        setActiveImageIndex((currentIndex) => {
            if (currentIndex === null) return null;

            return currentIndex === 0 ? validImages.length - 1 : currentIndex - 1;
        });
    };

    const showNextImage = () => {
        if (validImages.length <= 1) return;

        setActiveImageIndex((currentIndex) => {
            if (currentIndex === null) return null;

            return currentIndex === validImages.length - 1 ? 0 : currentIndex + 1;
        });
    };

    useEffect(() => {
        if (!isModalOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }

            if (activeImageIndex !== null && event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (activeImageIndex !== null && event.key === "ArrowRight") {
                showNextImage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isModalOpen, activeImageIndex, validImages.length]);

    return (
        <>
            <section className="mb-12 overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-white p-4 shadow-[0_20px_60px_rgba(16,31,37,0.06)] sm:p-6 lg:p-8">
                <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="mb-2 block text-[13px] font-[700] text-primary">
                            {isArabic ? "معرض المشروع" : "Project Gallery"}
                        </span>

                        <h2 className="text-[26px] font-[700] leading-[1.5] text-blackGrey md:text-[32px]">
                            {isArabic ? "تفاصيل المشروع بالصور والفيديو" : "Explore the project in photos and videos"}
                        </h2>

                        <p className="mt-3 max-w-[650px] text-[14px] leading-[1.9] text-grey md:text-[15px]">
                            {isArabic ? "تصفح مراحل وتفاصيل المشروع واضغط على أي صورة لمشاهدتها بالحجم الكامل." : "Browse the project details and click any image to view it in full size."}
                        </p>
                    </div>

                    {(validImages.length > 0 || validVideos.length > 0) && (
                        <div className="flex items-center gap-3">
                            {validImages.length > 0 && (
                                <span className="rounded-full border border-[#E4E7EC] bg-[#F8FAFC] px-4 py-2 text-[13px] font-[600] text-grey">
                                    {validImages.length} {isArabic ? "صور" : "Photos"}
                                </span>
                            )}

                            {validVideos.length > 0 && (
                                <span className="rounded-full border border-[#E4E7EC] bg-[#F8FAFC] px-4 py-2 text-[13px] font-[600] text-grey">
                                    {validVideos.length} {isArabic ? "فيديو" : "Videos"}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {validImages.length === 0 && validVideos.length === 0 ? (
                    <EmptyData locale={locale} message={isArabic ? "لا توجد صور أو فيديوهات متوفرة لهذا المشروع" : "No images or videos are available for this project"} />
                ) : (
                    <>
                        {validImages.length > 0 && (
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[190px]">
                                {validImages.map((image, index) => (
                                    <button key={`${image.url}-${index}`} type="button" onClick={() => setActiveImageIndex(index)} className={`group relative h-[260px] overflow-hidden rounded-[20px] bg-[#F2F4F7] text-start shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(16,31,37,0.16)] sm:h-[300px] lg:h-auto ${getImageLayout(index)}`} aria-label={`${isArabic ? "فتح الصورة" : "Open image"} ${index + 1}`}>
                                        <Image src={image.url} alt={`${projectName} ${index + 1}`} fill sizes={index === 0 ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 100vw, 33vw"} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]" />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                                        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                                            <div>
                                                <span className="mb-1 block text-[11px] font-[600] uppercase tracking-[0.12em] text-white/75">
                                                    {isArabic ? "صورة المشروع" : "Project photo"}
                                                </span>

                                                <span className="block text-[15px] font-[700] text-white">
                                                    {projectName}
                                                </span>
                                            </div>

                                            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-primary">
                                                <FaExpand size={15} />
                                            </span>
                                        </div>

                                        <span className="absolute end-4 top-4 flex h-[32px] min-w-[32px] items-center justify-center rounded-full bg-black/35 px-2 text-[12px] font-[700] text-white backdrop-blur-md">
                                            {index + 1}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {validVideos.length > 0 && (
                            <div className={validImages.length > 0 ? "mt-10 border-t border-[#E4E7EC] pt-10" : ""}>
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <FaPlay size={14} />
                                    </span>

                                    <div>
                                        <h3 className="text-[21px] font-[700] text-blackGrey">
                                            {isArabic ? "فيديوهات المشروع" : "Project Videos"}
                                        </h3>

                                        <p className="mt-1 text-[13px] text-grey">
                                            {isArabic ? "شاهد تفاصيل التنفيذ والنتيجة النهائية." : "Watch the installation details and final result."}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    {validVideos.map((video, index) => (
                                        <button key={`${video.url}-${index}`} type="button" onClick={() => setActiveVideoId(video.resolvedVideoId)} className="group relative aspect-video overflow-hidden rounded-[22px] bg-black text-start shadow-[0_15px_35px_rgba(16,31,37,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(16,31,37,0.2)]" aria-label={`${isArabic ? "تشغيل الفيديو" : "Play video"} ${index + 1}`}>
                                            <div className="absolute inset-0 scale-105 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("https://i.ytimg.com/vi/${video.resolvedVideoId}/hqdefault.jpg")` }} />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                                                    <FaPlay size={20} className="ms-1" />
                                                </span>
                                            </div>

                                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                                                <div>
                                                    <span className="mb-1 block text-[11px] font-[600] uppercase tracking-[0.12em] text-white/70">
                                                        {isArabic ? "فيديو المشروع" : "Project video"}
                                                    </span>

                                                    <span className="text-[15px] font-[700] text-white">
                                                        {projectName} - {index + 1}
                                                    </span>
                                                </div>

                                                <span className="rounded-full bg-black/35 px-3 py-1 text-[11px] font-[600] text-white backdrop-blur-md">
                                                    YouTube
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </section>

            {activeImageIndex !== null && validImages[activeImageIndex] && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label={isArabic ? "عارض صور المشروع" : "Project image viewer"} onClick={closeModal}>
                    <button type="button" onClick={closeModal} className="absolute end-4 top-4 z-30 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black sm:end-7 sm:top-7" aria-label={isArabic ? "إغلاق" : "Close"}>
                        <FaXmark size={20} />
                    </button>

                    {validImages.length > 1 && (
                        <>
                            <button type="button" onClick={(event) => { event.stopPropagation(); showPreviousImage(); }} className="absolute start-3 top-1/2 z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:start-7 sm:h-[54px] sm:w-[54px]" aria-label={isArabic ? "الصورة السابقة" : "Previous image"}>
                                <FaArrowRightLong size={18} />

                            </button>

                            <button type="button" onClick={(event) => { event.stopPropagation(); showNextImage(); }} className="absolute end-3 top-1/2 z-30 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black sm:end-7 sm:h-[54px] sm:w-[54px]" aria-label={isArabic ? "الصورة التالية" : "Next image"}>
                                <FaArrowLeftLong size={18} />

                            </button>
                        </>
                    )}

                    <div className="relative flex h-full w-full max-w-[1400px] flex-col items-center justify-center" onClick={(event) => event.stopPropagation()}>
                        <div className="relative h-[calc(100vh-150px)] w-full overflow-hidden rounded-[18px]">
                            <Image src={validImages[activeImageIndex].url} alt={`${projectName} ${activeImageIndex + 1}`} fill priority sizes="100vw" className="object-contain" />
                        </div>

                        <div className="mt-4 flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] font-[600] text-white backdrop-blur-md">
                            <span>{projectName}</span>
                            <span className="h-1 w-1 rounded-full bg-white/50" />
                            <span>{activeImageIndex + 1} / {validImages.length}</span>
                        </div>

                        {validImages.length > 1 && (
                            <div className="mt-4 hidden max-w-full items-center gap-2 overflow-x-auto px-2 md:flex">
                                {validImages.map((image, index) => (
                                    <button key={`${image.url}-thumbnail-${index}`} type="button" onClick={() => setActiveImageIndex(index)} className={`relative h-[58px] w-[82px] shrink-0 overflow-hidden rounded-[9px] border-2 transition-all duration-300 ${activeImageIndex === index ? "scale-105 border-white opacity-100" : "border-transparent opacity-45 hover:opacity-100"}`} aria-label={`${isArabic ? "عرض الصورة" : "View image"} ${index + 1}`}>
                                        <Image src={image.url} alt={`${projectName} thumbnail ${index + 1}`} fill sizes="82px" className="object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeVideoId && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label={isArabic ? "مشغل فيديو المشروع" : "Project video player"} onClick={closeModal}>
                    <button type="button" onClick={closeModal} className="absolute end-4 top-4 z-30 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black sm:end-7 sm:top-7" aria-label={isArabic ? "إغلاق" : "Close"}>
                        <FaXmark size={20} />
                    </button>

                    <div className="w-full max-w-[1100px]" onClick={(event) => event.stopPropagation()}>
                        <div className="aspect-video overflow-hidden rounded-[20px] bg-black shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                            <iframe src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`} title={projectName} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                        </div>

                        <div className="mt-4 text-center text-[15px] font-[600] text-white">
                            {projectName}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}