type ChoiceButtonProps = {
    active: boolean;
    label: string;
    onClick: () => void;
};

export default function ChoiceButton({ active, label, onClick }: ChoiceButtonProps) {
    return (
        <button type="button" onClick={onClick} className={`flex min-h-[68px] items-center justify-center rounded-[16px] border px-4 text-custom16 font-[600] transition-all duration-300 md:min-h-[78px] ${active ? "border-[2px] border-primary bg-primary/5 text-primary shadow-[0_10px_30px_rgba(22,95,174,0.12)]" : "border-[#D9DEE5] bg-white text-blackGrey hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)]"}`}>
            {label}
        </button>
    );
}