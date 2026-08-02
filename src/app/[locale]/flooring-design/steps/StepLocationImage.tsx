import Image from "next/image";
import { LuImagePlus, LuTrash2, LuUpload } from "react-icons/lu";

type StepLocationImageProps = {
    imagePreview: string;
    handleLocationImage: (file: File | null) => void;
    removeLocationImage: () => void;
};

export default function StepLocationImage({ imagePreview, handleLocationImage, removeLocationImage }: StepLocationImageProps) {
    return (
        <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
            <p className="mb-5 text-center text-custom14 leading-7 text-[#667085]">
                صورة المكان تساعدنا على إعداد تصور دقيق. يمكنك تخطي هذه الخطوة وإرسال الصورة لاحقًا في محادثة الواتساب.
            </p>

            {!imagePreview ? (
                <label htmlFor="location-image" className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center rounded-[22px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 text-center transition hover:border-primary hover:bg-primary/[0.03] md:min-h-[280px]">
                    <LuImagePlus size={46} className="mb-4 text-[#9FB4BF]" />

                    <span className="mb-2 text-custom15 font-[700] text-blackGrey">
                        اسحب الصورة هنا
                    </span>

                    <span className="text-custom13 text-[#667085]">
                        أو اضغط لاختيار صورة من جهازك
                    </span>

                    <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-custom12 font-[600] text-primary shadow-sm">
                        <LuUpload />
                        اختيار الصورة
                    </span>

                    <span className="mt-3 text-[11px] text-[#98A2B3]">
                        JPG أو PNG أو WEBP — بحد أقصى 5 ميجابايت
                    </span>

                    <input id="location-image" type="file" accept="image/png,image/jpeg,image/webp" onChange={(event) => handleLocationImage(event.target.files?.[0] || null)} className="hidden" />
                </label>
            ) : (
                <div className="relative overflow-hidden rounded-[22px] border border-[#E4E7EC]">
                    <div className="relative min-h-[320px]">
                        <Image src={imagePreview} alt="صورة المكان" fill unoptimized className="object-contain" />
                    </div>

                    <button type="button" onClick={removeLocationImage} aria-label="حذف الصورة" className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-error shadow-lg transition hover:scale-105">
                        <LuTrash2 size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}