"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaBars, FaXmark } from "react-icons/fa6";

import ChangeLanguage from "./ChangeLanguage";
import { Service } from "@/app/types/home";

import { Information } from "@/app/types/home";



type HeaderProps = {
    locale: string;
    services: Service[];
    info: Information;
};

type LinkProps = {
    href: string;
    children: ReactNode;
};

type MobileLinkProps = LinkProps & {
    onClick: () => void;
};

export default function Header({ locale, services, info }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50;

            setIsScrolled((prev) => {
                if (prev === scrolled) return prev;

                return scrolled;
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };
  const isArabic = locale === "ar";


    return (
        <>
            <header className={`sticky top-0 z-[100] w-full bg-white transition-[background-color,box-shadow] duration-300 ease-out ${isScrolled ? "bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.07)] backdrop-blur-md" : "shadow-none"}`}>
                <div className="container flex items-center justify-between gap-5 py-3">

                    {/* Logo */}
                    <Link href={`/${locale}`} className="relative z-10 shrink-0">
                        <Image src={info?.logo || "/images/logo.png"} alt="الأولى للإيبوكسي" width={150} height={50} priority className="h-[70px] w-[150px] object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block" aria-label="القائمة الرئيسية">
                        <ul className="flex items-center justify-center gap-5 text-custom16 font-[700] text-secondary">

                            <li>
                                <NavLink href={`/${locale}`}>
                                    {isArabic ? " الرئيسية" : "Home"}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href={`/${locale}/about-us`}>
                                    {isArabic ? "من نحن" : "About Us"}
                                </NavLink>
                            </li>

                            {/* Services */}
                            <li className="group relative">
                                <Link href={`/${locale}/services`} className="flex items-center gap-2 py-5 transition-colors duration-300 hover:text-primary">
                                    {isArabic ? "خدماتنا" : "Services"}

                                    <FaAngleDown size={13} className="transition-transform duration-300 ease-out group-hover:rotate-180" />
                                </Link>

                                <div className="invisible absolute right-[-80px] top-full z-50 w-[290px] translate-y-2 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="h-2" />

                                    <div className="overflow-hidden rounded-[16px] border border-black/[0.06] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.10)]">

                                        <DropdownLink href={`/${locale}/services`}>
                                            {isArabic ? "كل الخدمات" : "All Services"}
                                        </DropdownLink>

                                        {services.map((service, index) => (
                                            <DropdownLink key={`desktop-service-${service.id}-${index}`} href={`/${locale}/services/${service.id}`}>
                                                {service.name}
                                            </DropdownLink>
                                        ))}

                                    </div>
                                </div>
                            </li>

                            <li>
                                <NavLink href={`/${locale}/projects`}>
                                    {isArabic ? "أعمالنا" : "Projects"}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href={`/${locale}/faqs`}>
                                    {isArabic ? "الأسئلة الشائعة" : "FAQs"}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink href={`/${locale}/flooring-design`}>
                                    {isArabic ? "أطلب تصميم أرضيتك" : "Order Flooring Design"}
                                </NavLink>
                            </li>

                        </ul>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <ChangeLanguage />

                        <Link href={`/${locale}/contact-us`} className="rounded-[12px] bg-primary px-4 py-3 text-custom14 font-[600] text-white transition-colors duration-300 hover:bg-secondary">
                            {isArabic ? "تواصل معنا الآن" : "Contact Us"}
                        </Link>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <ChangeLanguage />
                        <button type="button" onClick={() => setIsMenuOpen(true)} aria-label="فتح القائمة" aria-expanded={isMenuOpen} className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-[10px] bg-primary text-white transition-[background-color,transform] duration-300 hover:bg-secondary active:scale-95">
                            <FaBars size={20} />
                        </button>
                    </div>

                </div>
            </header>

            {/* Overlay */}
            <div onClick={closeMenu} className={`fixed inset-0 z-[200] bg-black/50 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`} />

            {/* Mobile Side Navigation */}
            <aside className={`fixed right-0 top-0 z-[201] flex h-dvh w-[85%] max-w-[360px] flex-col bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* SideNav Header */}
                <div className="flex items-center justify-between border-b border-black/5 p-5">

                    <Link href={`/${locale}`} onClick={closeMenu}>
                        <Image src="/images/logo.png" alt="الأولى للإيبوكسي" width={100} height={50} className="h-[50px] w-[100px] object-contain" />
                    </Link>

                    <button type="button" onClick={closeMenu} aria-label="إغلاق القائمة" className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-full bg-black/[0.05] text-secondary transition-colors duration-300 hover:bg-primary hover:text-white">
                        <FaXmark size={20} />
                    </button>

                </div>

                {/* SideNav Links */}
                <nav className="flex-1 overflow-y-auto px-5 py-6" aria-label="قائمة الجوال">
                    <ul className="space-y-1 font-[700] text-secondary">

                        <li>
                            <MobileLink href={`/${locale}`} onClick={closeMenu}>
                                {isArabic ? "رئيسية" : "Home"}
                            </MobileLink>
                        </li>

                        <li>
                            <MobileLink href={`/${locale}/about-us`} onClick={closeMenu}>
                                {isArabic ? "من نحن" : "About Us"}
                            </MobileLink>
                        </li>

                        {/* Mobile Services */}
                        <li>
                            <button type="button" onClick={() => setIsServicesOpen((prev) => !prev)} aria-expanded={isServicesOpen} className="flex w-full cursor-pointer items-center justify-between rounded-[12px] px-4 py-4 text-right transition-colors duration-300 hover:bg-primary/[0.06] hover:text-primary">
                                <span>{isArabic ? " الخدمات" : " Services"}</span>

                                <FaAngleDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                            </button>

                            <div className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                                <div className="min-h-0">

                                    <div className="mr-4 py-2">

                                        <MobileSubLink href={`/${locale}/services`} onClick={closeMenu}>
                                            {isArabic ? "كل الخدمات" : "All Services"}
                                        </MobileSubLink>

                                        {services.map((service, index) => (
                                            <MobileSubLink key={`mobile-service-${service.id}-${index}`} href={`/${locale}/services/${service.id}`} onClick={closeMenu}>
                                                {service.name}
                                            </MobileSubLink>
                                        ))}

                                    </div>

                                </div>
                            </div>
                        </li>

                        <li>
                            <MobileLink href={`/${locale}/projects`} onClick={closeMenu}>
                                {isArabic ? "أعمالنا" : "Projects"}
                            </MobileLink>
                        </li>

                        <li>
                            <MobileLink href={`/${locale}/faqs`} onClick={closeMenu}>
                                {isArabic ? "الأسئلة الشائعة" : "FAQs"}
                            </MobileLink>
                        </li>

                        <li>
                            <MobileLink href={`/${locale}/flooring-design`} onClick={closeMenu}>
                                {isArabic ? "أطلب تصميم أرضيتك" : " Order Flooring Design"}
                            </MobileLink>
                        </li>

                    </ul>
                </nav>

                {/* SideNav Footer */}
                <div className="border-t border-black/5 p-5">
                    <Link href={`/${locale}/contact-us`} onClick={closeMenu} className="flex w-full items-center justify-center rounded-[12px] bg-primary px-5 py-4 font-[700] text-white transition-colors duration-300 hover:bg-secondary">
                        {isArabic ? "تواصل معنا" : "Contact Us"}
                    </Link>
                </div>

            </aside>
        </>
    );
}

function NavLink({ href, children }: LinkProps) {
    return (
        <Link href={href} className="relative py-5 transition-colors duration-300 after:absolute after:bottom-[12px] after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:text-primary hover:after:w-full">
            {children}
        </Link>
    );
}

function DropdownLink({ href, children }: LinkProps) {
    return (
        <Link href={href} className="block rounded-[10px] px-4 py-3 text-[15px] font-[600] text-secondary transition-[background-color,color,transform] duration-300 hover:-translate-x-[3px] hover:bg-primary/[0.07] hover:text-primary">
            {children}
        </Link>
    );
}

function MobileLink({ href, children, onClick }: MobileLinkProps) {
    return (
        <Link href={href} onClick={onClick} className="block rounded-[12px] px-4 py-4 transition-colors duration-300 hover:bg-primary/[0.06] hover:text-primary">
            {children}
        </Link>
    );
}

function MobileSubLink({ href, children, onClick }: MobileLinkProps) {
    return (
        <Link href={href} onClick={onClick} className="block rounded-[10px] px-3 py-3 text-[14px] font-[600] transition-colors duration-300 hover:bg-primary/[0.06] hover:text-primary">
            {children}
        </Link>
    );
}