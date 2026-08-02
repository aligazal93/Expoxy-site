import Image from "next/image";
import { motion } from "framer-motion";

interface DesignOptionProps {
    active: boolean;
    code: string;
    title: string;
    subtitle?: string;
    category: string;
    image: string;
    onClick: () => void;
}

export default function DesignOption({ active, code, title, subtitle, category, image, onClick }: DesignOptionProps) {
    return (
        <motion.button type="button" layout onClick={onClick} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} className={`group overflow-hidden rounded-[22px] border bg-white text-start transition-all duration-300 ${active ? "border-[2px] border-primary shadow-[0_20px_50px_rgba(22,95,174,0.16)]" : "border-[#E4E7EC] shadow-[0_10px_35px_rgba(15,23,42,0.05)] hover:border-primary/40"}`}>
            <div className="relative aspect-[1.15/1] overflow-hidden">
                <Image src={image} alt={title} fill sizes="(max-width: 767px) 100vw, (max-width: 990px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />

                <span className="absolute start-4 top-4 rounded-full border border-[#B9E8FF] bg-white/95 px-3 py-1.5 text-[11px] font-[700] text-[#0BA5EC] shadow-sm">
                    {code}
                </span>

                {active && (
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute end-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                        ✓
                    </motion.span>
                )}
            </div>

            <div className="p-4 md:p-5">
                <span className="mb-2 block text-[12px] font-[600] text-primary">
                    {category}
                </span>

                <h3 className="text-custom16 font-[700] text-blackGrey">
                    {title}
                </h3>

                {subtitle?.trim() && (
                    <p className="mt-2 line-clamp-2 text-custom13 leading-6 text-[#667085]">
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.button>
    );
}