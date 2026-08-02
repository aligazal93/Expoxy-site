import { WizardData } from "@/app/types/wizard";
import Image from "next/image";
import { LuEye } from "react-icons/lu";

type StepReviewProps = {
    formData: WizardData;
    imagePreview: string;
};

export default function StepReview({ formData, imagePreview }: StepReviewProps) {
    return (
        <div className="overflow-hidden rounded-[26px] border border-[#E4E7EC] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
            {formData.designImage && (
                <div className="relative h-[220px] w-full md:h-[280px]">
                    <Image src={formData.designImage} alt={formData.designName} fill className="object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 start-5 text-white">
                        <span className="mb-1 block text-custom12 opacity-80">{formData.designCode}</span>
                        <h3 className="text-[22px] font-[700]">{formData.designName}</h3>
                    </div>
                </div>
            )}

            <div className="p-5 md:p-7">
                <div className="divide-y divide-[#EAECF0]">
                    <ReviewRow label="نوع المكان" value={formData.placeType} />

                    <ReviewRow label="المساحة" value={`${formData.area} م²`} />

                    <ReviewRow label="التصميم" value={`${formData.designName} (${formData.designCode})`} />

                    <div className="grid grid-cols-[100px_1fr] items-center gap-4 py-4 md:grid-cols-[180px_1fr]">
                        <span className="text-custom14 text-[#667085]">الصورة</span>

                        {formData.locationImage && imagePreview ? (
                            <button type="button" onClick={() => window.open(imagePreview, "_blank", "noopener,noreferrer")} className="flex w-fit items-center gap-2 rounded-[8px] border border-primary/20 bg-primary/5 px-3 py-2 text-custom14 font-[700] text-primary transition-all hover:border-primary hover:bg-primary hover:text-white">
                                <LuEye size={18} />
                                عرض الصورة
                            </button>
                        ) : (
                            <strong className="text-custom15 font-[700] leading-7 text-blackGrey">
                                سيتم إرسالها لاحقًا في المحادثة
                            </strong>
                        )}
                    </div>

                    <ReviewRow label="المدينة" value={formData.city} />
                    <ReviewRow label="الاسم" value={formData.name} />
                    <ReviewRow label="الجوال" value={formData.phone} dir="ltr" />
                    <ReviewRow label="ملاحظات" value={formData.notes || "لا توجد"} />
                </div>
            </div>
        </div>
    );
}

type ReviewRowProps = {
    label: string;
    value: string;
    dir?: "ltr" | "rtl";
};

function ReviewRow({ label, value, dir }: ReviewRowProps) {
    return (
        <div className="grid grid-cols-[100px_1fr] gap-4 py-4 md:grid-cols-[180px_1fr]">
            <span className="text-custom14 text-[#667085]">{label}</span>

            <strong dir={dir} className={`text-custom15 font-[700] leading-7 text-blackGrey ${dir === "ltr" ? "text-end" : ""}`}>
                {value}
            </strong>
        </div>
    );
}