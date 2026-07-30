"use client";
import Image from "next/image";
import Link from "next/link";

import {
    FaArrowLeftLong,
    FaInstagram,
    FaTiktok,
    FaSnapchat,
    FaXTwitter,
} from "react-icons/fa6";

import FloatingActions from "./FloatingButton";
import { usePathname } from "next/navigation";

const mainLinks = [
    { id: 1, title: "الرئيسية", href: "/" },
    { id: 2, title: "خدماتنا", href: "/" },
    { id: 3, title: "أعمالنا", href: "/" },
    { id: 4, title: "كيف نعمل", href: "/" },
];

const importantLinks = [
    { id: 1, title: "الأسئلة الشائعة", href: "/#" },
    { id: 2, title: "طلب استشارة", href: "/" },
    { id: 3, title: "سياسة الخصوصية", href: "/" },
    { id: 4, title: "الشروط والأحكام", href: "/" },
];

const socialLinks = [
    {
        id: 1,
        title: "Instagram",
        href: "https://instagram.com/",
        icon: FaInstagram,
    },
    {
        id: 2,
        title: "Snapchat",
        href: "https://snapchat.com/",
        icon: FaSnapchat,
    },
    {
        id: 3,
        title: "TikTok",
        href: "https://tiktok.com/",
        icon: FaTiktok,
    },
    {
        id: 4,
        title: "X",
        href: "https://x.com/",
        icon: FaXTwitter,
    },
];

type FooterProps = {
    locale: string;
};

export default function Footer({ locale }: FooterProps) {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

    return (
        <footer className={`relative ${isHome ? "mt-[120px]" : "mt-[0px]"} bg-[#002433]  text-white ${isHome ? "rounded-t-[75px]" : "rounded-t-[0px]"}`}>

            {/* banner */}
            {isHome ? (
                <div className="container relative">
                    <div className="absolute left-1/2 top-0 z-10 w-[calc(100%-30px)] max-w-[1080px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-[#09A9E8] px-5 py-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:px-8 md:py-10 lg:px-12 lg:py-9">
                        <h2 className="mb-3 text-[24px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[36px]">
                            جاهز لتحويل أرضيتك إلى قطعة فنية؟
                        </h2>

                        <p className="mx-auto mb-6 max-w-[720px] text-[13px] leading-[2] text-white/80 md:text-[14px]">
                            أرسل صورة مساحتك الآن، وسنساعدك في اختيار التصميم المناسب وتجهيز تصور مبدئي يناسب ذوقك ومكانك.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <a href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                تواصل عبر واتساب

                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
                            </a>
                            <Link href="/request-design" className="group inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                اطلب تصميم أرضيتك

                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
                            </Link>


                        </div>
                    </div>
                </div>
            ) : <div className="container">
                <div className="pt-12 block  lg:flex items-center justify-between">
                    <div>
                        <h2 className="mb-2  text-[24px] font-bold leading-[1.5] text-white md:text-[32px] lg:text-[36px]">
                            جاهز لتحويل أرضيتك إلى قطعة فنية؟
                        </h2>

                        <p className="mx-auto mb-6 max-w-[720px] text-[13px] leading-[2] text-white/80 md:text-[14px]">
                            أرسل صورة مساحتك الآن، وسنساعدك في اختيار التصميم المناسب وتجهيز تصور مبدئي يناسب ذوقك ومكانك.
                        </p>
                    </div>
                    <div>
                        <div className="block lg:flex flex-wrap items-center justify-center gap-8">
                            <a href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer" className="group  inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                تواصل عبر واتساب

                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
                            </a>
                            <Link href={`/${locale}/flooring-design`} className="group inline-flex min-h-[44px] items-center justify-center mx-2 gap-3 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-[#05AEEF]">
                                اطلب تصميم أرضيتك
                                <FaArrowLeftLong className="text-[13px] transition-transform duration-300 group-hover:-translate-x-1" />
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
                            الأولى للإيبوكسي
                        </h2>

                        <p className="max-w-[320px] text-[14px] leading-[2] text-white">
                            متخصصون في تصميم وتنفيذ أرضيات الإيبوكسي ثلاثية الأبعاد والتشطيبات الفاخرة. نقدم حلول أرضيات مبتكرة تجمع بين الجمال والجودة والمتانة لتحويل المساحات إلى تجارب بصرية استثنائية.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.title} className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[17px] text-white/80 transition-all duration-300 hover:border-[#05AEEF] hover:bg-[#05AEEF] hover:text-white">
                                        <Icon aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Links */}
                    <nav aria-label="الصفحات الرئيسية">
                        <h2 className="mb-5 text-custom20 font-bold text-[#13AEEB]">
                            الصفحات الرئيسية
                        </h2>

                        <ul className="space-y-3">
                            {mainLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.href} className="inline-block text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Important Links */}
                    <nav aria-label="روابط مهمة">
                        <h2 className="mb-5 text-[15px] font-bold text-[#13AEEB]">
                            روابط مهمة
                        </h2>

                        <ul className="space-y-3">
                            {importantLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={link.href} className="inline-block text-[14px] text-white/70 transition-colors duration-300 hover:text-[#13AEEB]">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h2 className="mb-5 text-[15px] font-bold text-[#13AEEB]">
                            تواصل معنا
                        </h2>

                        <address className="space-y-5 not-italic">
                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    الهاتف
                                </span>

                                <a href="tel:+9664564564569" className="inline-flex items-center gap-2 text-custom14 text-white/80 transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/phone.png" className="object-cover" alt="phone" width={20} height={20} />
                                    +966 456 456 4569
                                </a>
                            </div>

                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    البريد الإلكتروني
                                </span>

                                <a href="mailto:info@epoxy.libya.com" className="inline-flex items-center gap-2 text-custom14 text-white/80 transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/msg.png" className="object-cover" alt="phone" width={20} height={20} />
                                    info@epoxy.libya.com
                                </a>
                            </div>


                            <div>
                                <span className="mb-1 block text-custom14 text-white">
                                    المكتب الرئيسي
                                </span>

                                <span className="inline-flex items-center gap-2 text-custom14 text-white transition-colors duration-300 hover:text-[#13AEEB]">
                                    <Image src="/images/location.png" className="object-cover" alt="phone" width={16} height={16} />
                                    لبيا، طرابلس، مصراتة، بني غازي
                                </span>
                            </div>


                        </address>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-4 pt-5 text-center text-[16px] text-white sm:flex-row sm:items-center sm:justify-between sm:text-start">
                    <p>
                        © {currentYear} الأولى للإيبوكسي. جميع الحقوق محفوظة
                    </p>

                    <p>
                        تصميم وتطوير: شركة الأولى الحديثة للدعاية والإعلان المحدودة
                    </p>
                </div>

                <FloatingActions />

            </div>
        </footer>
    );
}