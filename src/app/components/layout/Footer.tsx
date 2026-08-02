"use client";
import Image from "next/image";
import Link from "next/link";

import {
    FaArrowLeftLong,
    FaInstagram,
    FaTiktok,
    FaSnapchat,
    FaXTwitter,
    FaFacebookF,
    FaTwitter,
    FaX,
    FaArrowRightLong,
} from "react-icons/fa6";

import FloatingActions from "./FloatingButton";
import { usePathname } from "next/navigation";
import { Information } from "@/app/types/home";




type FooterProps = {
    locale: string;
    info?: Information;
};

export default function Footer({ locale, info }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

    const whatsappNumber = info?.whatsapp?.replace(/\D/g, "") ?? "";
    const phoneNumber = info?.phone?.replace(/[^\d+]/g, "") ?? "";
  const isArabic = locale === "ar";


    return (
        <footer className={`relative ${isHome ? "mt-[120px]" : "mt-[0px]"} bg-[#002433]  text-white ${isHome ? "rounded-t-[75px]" : "rounded-t-[0px]"}`}>

            {/* banner */}
            {isHome ? (
                <div className="container relative">
                    <div className="absolute left-1/2 top-0 z-10 w-[calc(100%-30px)] max-w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-[#09A9E8] px-5 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:px-8 md:py-10 lg:px-12 lg:py-9">
                        <h2 className="mb-3 text-[24px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[36px]">
                           {isArabic ? "جاهز لتحويل أرضيتك إلى قطعة فنية؟" : "Are You Ready to Convert Your Design to a Physical Product?"}
                        </h2>

                        <p className="mx-auto mb-6 max-w-[720px] text-[13px] leading-[2] text-white/80 md:text-[14px]">
                           {isArabic ? "أرسل صورة مساحتك الآن، وسنساعدك في اختيار التصميم المناسب وتجهيز تصور مبدئي يناسب ذوقك ومكانك." : "Send a photo of your design to help you choose the right design and to prepare it for you."}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                {isArabic ? "تواصل عبر واتساب" : "Contact Us"}

                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
                            </a>
                            <Link href="/request-design" className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                {isArabic ? "طلب تصميم أرضيتك" : "Request Design"}

                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
                            </Link>


                        </div>
                    </div>
                </div>
            ) : <div className="container">
                <div className="pt-12 block  lg:flex items-center justify-between">
                    <div className="text-start">
                        <h2 className="mb-2  text-[24px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[30px]">
                           {isArabic ? "جاهز لتحويل أرضيتك إلى قطعة فنية؟" : "Are You Ready to Convert Your Design to a Physical Product?"}
                        </h2>

                        <p className="mx-auto mb-6 max-w-[720px] text-start text-[13px] leading-[2] text-white/80 md:text-[14px]">
                           {isArabic ? "أرسل صورة مساحتك الآن، وسنساعدك في اختيار التصميم المناسب وتجهيز تصور مبدئي يناسب ذوقك ومكانك." : "Send a photo of your design to help you choose the right design and to prepare it for you."}
                        </p>
                    </div>
                    <div>
                        <div className="block lg:flex flex-wrap items-center justify-center gap-8">
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="group  inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                {isArabic ? "تواصل عبر واتساب" : "Whatsapp Now"}

                                {isArabic ? <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />  : <FaArrowRightLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />}
                            </a>
                            <Link href={`/${locale}/flooring-design`} className="group inline-flex min-h-[44px] items-center justify-center mx-2 gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                {isArabic ? "طلب تصميم أرضيتك" : "Request Design"}
                                {isArabic ? <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />  : <FaArrowRightLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />}
                                
                            </Link>
                        </div>
                    </div>

                </div>
            </div>}

            {isHome ? null : <hr className="my-10 border border-primary" />}

            {/* Footer Content */}
            <div className={`container pb-6 ${isHome ? "pt-[140px]" : "pt-[20px]"}`}>
                <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr] lg:gap-12">
                    {/* About */}
                    <div>
                        <h2 className="mb-5 text-custom20 font-bold text-[#13AEEB]">
                            {isArabic ? " الأولى للإيبوكسي"  :  "Aloula Epoxy"}
                           
                        </h2>

                        <p className="max-w-[320px] text-[14px] leading-[2] text-white">
                            {info?.small_about || ""}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <ul className="flex items-center gap-3">
                                <li>
                                    <a href={info?.facebook || ""} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <FaFacebookF aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href={info?.instagram || ""} target="_blank" rel="noopener noreferrer" aria-label="instagram" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <FaInstagram aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href={info?.twitter || ""} target="_blank" rel="noopener noreferrer" aria-label="twitter" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <FaX aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href={info?.tiktok || ""} target="_blank" rel="noopener noreferrer" aria-label="tiktok" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <FaTiktok aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href={info?.snapchat || ""} target="_blank" rel="noopener noreferrer" aria-label="snapchat" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <FaSnapchat aria-hidden="true" />
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                    {/* Main Links */}
                    <nav aria-label="الصفحات الرئيسية">
                        <h2 className="mb-5 text-custom20 font-bold text-[#13AEEB]">
                            {isArabic ? "صفحات الرئيسية"  :  "Main Pages"}
                           
                        </h2>

                        <ul className="space-y-3">
                            <li>
                                <Link href={`${locale}/`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? "رئيسية" : "Home"}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${locale}/about-us`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? "من نحن" : "About Us"}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${locale}/projects`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? "مشاريعنا" : "Projects"}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${locale}/services`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? "خدمنا" : "Services"}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${locale}/contact-us`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? "تواصل معنا" : "Contact Us"}
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    {/* Important Links */}
                    <nav aria-label="روابط مهمة">
                        <h2 className="mb-5 text-[15px] font-bold text-[#13AEEB]">
                            {isArabic ? "روابط مهمه"  :  "Important Links"}
                           
                        </h2>

                        <ul className="space-y-3">
                            <li>
                                <Link href={`${locale}/`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? " سياسة الخصوصية" : "Privacy Policy"}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${locale}/`} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    {isArabic ? " الشروط و الاحكام" : "Terms and Conditions"}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h2 className="mb-5 text-[15px] font-bold text-[#13AEEB]">
                            {isArabic ? "تواصل معنا" : "Contact Us"}
                            
                        </h2>

                        <address className="space-y-5 not-italic">
                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    {isArabic ? "الهاتف" : "Phone"}
                                </span>

                                <a href={`tel:${info?.phone?.replace(/\s/g, "") || ""}`} dir="rtl" className="inline-flex items-center gap-2 text-custom14 text-white/80 transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/phone.png" className="object-contain" alt="phone" width={20} height={20} />

                                    <span dir="ltr" className="text-right">
                                        {info?.phone || ""}
                                    </span>
                                </a>
                            </div>

                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    {isArabic ? "البريد الإلكتروني" : "Email"}
                                </span>

                                <a href="mailto:info@epoxy.libya.com" className="inline-flex items-center gap-2 text-custom14 text-white/80 transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/msg.png" className="object-cover" alt="phone" width={20} height={20} />
                                    {info?.email || ""}
                                </a>
                            </div>


                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    {isArabic ? "المكتب الرئيسي" : "Office Address"}
                                </span>

                                <span className="inline-flex items-center gap-2 text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/location.png" className="object-cover" alt="phone" width={16} height={16} />
                                    {info?.address || ""}
                                </span>
                            </div>


                        </address>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 pt-5 text-center text-[16px] text-white sm:flex-row sm:items-center sm:justify-between sm:text-start">
                    <p>
                        © {currentYear} {isArabic ? "الأولى للإيبوكسي. جميع الحقوق محفوظة" : "Aloula Epoxy copyright reserved"}
                    </p>

                    <a href="https://aloula.ly/" target="_blank" rel="noopener noreferrer">
                        {isArabic ? " تصميم وتطوير: شركةالأولي " : "Designed and Developed by Aloula Epoxy"}
                    </a>
                </div>

                <FloatingActions locale={locale} info={info} />

            </div>
        </footer>
    );
}