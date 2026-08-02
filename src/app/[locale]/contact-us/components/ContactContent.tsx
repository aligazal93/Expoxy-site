"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import {
    FaFacebookF,
    FaInstagram,
    FaSnapchat,
    FaTiktok,
    FaXTwitter,
} from "react-icons/fa6";

import {
    LuMail,
    LuMapPin,
    LuPhone,
} from "react-icons/lu";
import { Information } from "@/app/types/home";
import { toast } from "sonner";
import axios from "axios";
import { sendContactEmail } from "@/app/services/sendEmail";


interface ContactContentProps {
    locale: string;
    informations?: Information;
}

export default function ContactContent({ locale, informations }: ContactContentProps) {
    const isArabic = locale === "ar";
    const [loading, setLoading] = useState(false);

    const phone = informations?.phone?.trim() || "";
    const email = informations?.email?.trim() || "";
    const address = informations?.address?.trim() || "";
    const instagram = informations?.instagram?.trim() || "";
    const facebook = informations?.facebook?.trim() || "";
    const tiktok = informations?.tiktok?.trim() || "";
    const snapchat = informations?.snapchat?.trim() || "";
    const twitter = informations?.twitter?.trim() || "";

    const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "#";
    const mapUrl = address ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : "";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        if (!payload.name || !payload.email || !payload.phone || !payload.message) {
            toast.error(isArabic ? "يرجى إدخال جميع البيانات المطلوبة" : "Please complete all required fields");
            return;
        }

        setLoading(true);

        try {
            const response = await sendContactEmail(payload);

            toast.success(response.message || (isArabic ? "تم إرسال رسالتك بنجاح" : "Your message has been sent successfully"));

            form.reset();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const responseData = error.response?.data as {
                    message?: string;
                    errors?: Record<string, string[]>;
                };

                const validationMessage = responseData?.errors ? Object.values(responseData.errors).flat()[0] : undefined;

                toast.error(validationMessage || responseData?.message || (isArabic ? "تعذر إرسال الرسالة، حاول مرة أخرى" : "Unable to send your message. Please try again"));
            } else {
                toast.error(isArabic ? "حدث خطأ غير متوقع" : "An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="overflow-hidden bg-white py-[60px] md:py-[80px]" >
            <div className="container">

                {/* Contact Area */}
                <div className="grid grid-cols-1 items-start gap-[40px] lg:grid-cols-2 lg:gap-[80px]">

                    {/* Contact Information */}
                    <motion.div initial={{ opacity: 0, x: isArabic ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="lg:pt-[15px]">

                        <span className="mb-[14px] block text-[14px] font-[600] text-primary">
                            {isArabic ? "معلومات التواصل" : "Contact Us"}
                        </span>

                        <h1 className="mb-[20px] text-[32px] font-[700] leading-[1.4] text-blackGrey sm:text-[32px] lg:text-[40px]">

                            {isArabic ? " يسعدنا التواصل معك" : "We are pleased to be in touch with you."}
                        </h1>

                        <p className="max-w-[600px] text-[14px] font-[400] leading-[2] text-greyColor sm:text-[15px]">
                            {isArabic ? " سواء كنت تخطط لبدء مشروع جديد، أو تبحث عن استشارة متخصصة، أو لديك أي استفسار حول خدماتنا، فريقنا جاهز لمساعدتك في كل خطوة." : "Whether you are planning to start a new project, seeking expert advice, or have any inquiries about our services, our team is ready to assist you every step of the way."}


                        </p>

                        <p className="mt-[14px] max-w-[600px] text-[14px] font-[400] leading-[2] text-greyColor sm:text-[15px]">
                            {isArabic ? " تواصل معنا، وسنحرص على الرد عليك في أقرب وقت وتقديم الحل المناسب الذي يتوافق مع احتياجات مشروعك." : "Contact us, and we will ensure a prompt response and provide the appropriate solution tailored to your project's needs."}
                        </p>

                        <div className="my-[20px] h-px w-full bg-borderColor" />

                        <motion.a href="tel:+966500000000" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="group mb-[22px] flex w-fit items-start gap-[14px]">
                            <span className="mt-[2px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-[18px] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                <LuPhone />
                            </span>

                            <div>
                                <span className="mb-[3px] block text-[12px] font-[500] text-greyColor">
                                    {isArabic ? "الهاتف" : "Phone"}
                                </span>

                                <strong className="text-[17px] font-[700] text-blackGrey transition-colors group-hover:text-primary" dir="ltr">
                                    {phone}
                                </strong>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a href="mailto:info@aloulaepoxy.com" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="group mb-[22px] flex w-fit items-start gap-[14px]">
                            <span className="mt-[2px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-[18px] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                <LuMail />
                            </span>

                            <div>
                                <span className="mb-[3px] block text-[12px] font-[500] text-greyColor">
                                    {isArabic ? "البريد الإلكتروني" : "Email"}
                                </span>

                                <strong className="text-[16px] font-[700] text-blackGrey transition-colors group-hover:text-primary" dir="ltr">
                                    {email}
                                </strong>
                            </div>
                        </motion.a>

                        {/* Address */}
                        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-[30px] flex items-start gap-[14px]">
                            <span className="mt-[2px] flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-primary/10 text-[18px] text-primary">
                                <LuMapPin />
                            </span>

                            <div>
                                <span className="mb-[3px] block text-[12px] font-[500] text-greyColor">
                                    {isArabic ? "المكتب الرئيسي" : "Main Office"}
                                </span>

                                <strong className="text-[16px] font-[700] leading-[1.7] text-blackGrey">
                                    {address}
                                </strong>
                            </div>
                        </motion.div>

                        {/* Social */}
                        <div>
                            <span className="mb-[15px] block text-[14px] font-[500] text-greyColor">
                                تابعنا على وسائل التواصل
                            </span>

                            <div className="flex items-center gap-[10px]">

                                <a href={instagram} aria-label="Instagram" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-borderColor text-[18px] text-primary transition-all duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-primary hover:text-white">
                                    <FaInstagram />
                                </a>

                                <a href={tiktok} aria-label="TikTok" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-borderColor text-[18px] text-primary transition-all duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-primary hover:text-white">
                                    <FaTiktok />
                                </a>

                                <a href={snapchat} aria-label="Snapchat" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-borderColor text-[18px] text-primary transition-all duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-primary hover:text-white">
                                    <FaSnapchat />
                                </a>

                                <a href={twitter} aria-label="X" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-borderColor text-[18px] text-primary transition-all duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-primary hover:text-white">
                                    <FaXTwitter />
                                </a>

                                <a href={facebook} aria-label="Facebook" className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-borderColor text-[18px] text-primary transition-all duration-300 hover:-translate-y-[3px] hover:border-primary hover:bg-primary hover:text-white">
                                    <FaFacebookF />
                                </a>

                            </div>
                        </div>

                    </motion.div>

                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: isArabic ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="rounded-[22px] border border-borderColor bg-white p-[22px] shadow-[0_20px_60px_rgba(16,24,40,0.04)] sm:p-[30px] lg:p-[34px]">

                        <h2 className="mb-[10px] text-[21px] font-[700] text-blackGrey">
                            أرسل لنا رسالة
                        </h2>

                        <p className="mb-[25px] text-[13px] font-[400] leading-[1.9] text-greyColor">
                            ملأ النموذج وسيتواصل معك أحد أعضاء فريقنا لمناقشة مشروعك والإجابة عن جميع استفساراتك في أسرع وقت ممكن.
                        </p>

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="mb-[18px]">
                                <label htmlFor="name" className="mb-[8px] block text-[13px] font-[600] text-blackGrey">
                                    الاسم الكامل
                                </label>

                                <input id="name" name="name" type="text" required placeholder={isArabic ? "ادخل الاسم الكامل" : "Enter your full name"} className="h-[50px] w-full rounded-[8px] border border-borderColor bg-white px-[15px] text-[13px] text-blackGrey outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-primary focus:ring-4 focus:ring-primary/5" />
                            </div>

                            {/* Email */}
                            <div className="mb-[18px]">
                                <label htmlFor="email" className="mb-[8px] block text-[13px] font-[600] text-blackGrey">
                                    البريد الإلكتروني
                                </label>

                                <input id="email" name="email" type="email" required placeholder={isArabic ? "ادخل البريد الإلكتروني" : "Enter your email"} className="h-[50px] w-full rounded-[8px] border border-borderColor bg-white px-[15px] text-[13px] text-blackGrey outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-primary focus:ring-4 focus:ring-primary/5" />
                            </div>

                            <div className="mb-[18px]">
                                <label htmlFor="phone" className="mb-[8px] block text-[13px] font-[600] text-blackGrey">
                                    رقم الهاتف
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    inputMode="tel"
                                    dir="ltr"
                                    required
                                    placeholder="ادخل رقم الهاتف"
                                    className="h-[50px] w-full rounded-[8px] border border-borderColor bg-white px-[15px] text-right text-[13px] text-blackGrey outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-primary"
                                />
                            </div>

                            <div className="mb-[20px]">
                                <label htmlFor="message" className="mb-[8px] block text-[13px] font-[600] text-blackGrey">
                                    الرسالة
                                </label>

                                <textarea id="message" name="message" required rows={5} placeholder={isArabic ? "اكتب رسالتك..." : "Write your message..."} className="min-h-[130px] w-full resize-none rounded-[8px] border border-borderColor bg-white px-[15px] py-[13px] text-[13px] leading-[1.8] text-blackGrey outline-none transition-all duration-300 placeholder:text-[#98A2B3] focus:border-primary focus:ring-4 focus:ring-primary/5" />
                            </div>

                            <motion.button type="submit" disabled={loading} whileTap={{ scale: 0.98 }} className="flex min-h-[50px] w-full items-center justify-center gap-[10px] rounded-[8px] bg-primary px-[20px] text-[14px] font-[600] text-white shadow-[0_10px_30px_rgba(22,95,174,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_15px_35px_rgba(22,95,174,0.25)] disabled:pointer-events-none disabled:opacity-60">
                                {loading && <span className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-white/40 border-t-white" />}

                                {loading ? (isArabic ? "جاري الإرسال..." : "Sending...") : isArabic ? "إرسال الرسالة" : "Send Message"}
                            </motion.button>

                        </form>

                    </motion.div>

                </div>

                {/* Map */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8 }} className="relative mt-[55px] h-[280px] w-full overflow-hidden rounded-[22px] border border-borderColor bg-[#F5F7F8] md:mt-[70px] md:h-[360px]">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.4867551081416!2d13.20140517546357!3d32.85883847362963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6e92cb857709751%3A0xc55498846e70a9fd!2z2LTYsdmD2Kkg2KfZhNin2YjZhNmJINin2YTYrdiv2YrYq9ipINmE2YTYr9i52KfZitipINmI2KfZhNin2LnZhNin2YYg2KfZhNmF2K3Yr9mI2K_YqQ!5e0!3m2!1sen!2seg!4v1785685084533!5m2!1sen!2seg" title="موقع الأولى للإيبوكسي" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0 grayscale-[0.35]" />

                </motion.div>

            </div>
        </section>
    );
}