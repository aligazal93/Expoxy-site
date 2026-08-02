interface EmptyDataProps {
    locale: string;
    message?: string;
}

export default function EmptyData({ locale, message }: EmptyDataProps) {
    const isArabic = locale === "ar";

    return (
        <div className="rounded-[16px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 py-10 text-center">
            <p className="text-[15px] font-[600] text-[#667085]">
                {message || (isArabic ? "لا توجد بيانات متوفرة حاليًا" : "No data available at the moment")}
            </p>
        </div>
    );
}