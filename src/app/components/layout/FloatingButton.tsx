import { FaWhatsapp } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";

export default function FloatingButton({ locale }: { locale?: string }) {
    return (
        <div className="fixed bottom-[20px] left-[15px] z-[999] flex flex-col items-end gap-3 sm:bottom-[25px] sm:right-[25px]">

            {/* WhatsApp */}
            <a href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب" className="group relative flex items-center justify-end">
                <span className="mr-2 hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-[#122A34] px-0 py-2 text-[13px] font-[600] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-[160px] group-hover:px-4 group-hover:opacity-100 sm:block">
                    تواصل عبر واتساب
                </span>

                <span className="absolute h-[56px] w-[56px] rounded-full bg-[#25D366]/25 animate-ping sm:h-[60px] sm:w-[60px]" />

                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-[25px] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_18px_40px_rgba(37,211,102,0.5)] sm:h-[56px] sm:w-[56px] sm:text-[27px]">
                    <FaWhatsapp aria-hidden="true" />
                </span>
            </a>

            {/* Call */}
            <a href="tel:+9666666666666" aria-label="اتصل بنا الآن" className="group relative flex items-center justify-end">
                <span className="mr-2 hidden max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-[#122A34] px-0 py-2 text-[13px] font-[600] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-[130px] group-hover:px-4 group-hover:opacity-100 sm:block">
                    اتصل بنا الآن
                </span>

                <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary text-[22px] text-white shadow-[0_12px_30px_rgba(5,174,239,0.30)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-[0_18px_40px_rgba(5,174,239,0.45)] sm:h-[56px] sm:w-[56px]">
                    <LuPhone aria-hidden="true" />
                </span>
            </a>

        </div>
    );
}