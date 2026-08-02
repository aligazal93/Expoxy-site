import type { FormDesign } from "@/app/types/formData";
import { WizardData } from "@/app/types/wizard";
import DesignOption from "../components/DesignOption";

interface StepDesignProps {
    formData: WizardData;
    designs: FormDesign[];
    selectDesign: (design: FormDesign) => void;
}

export default function StepDesign({ formData, designs, selectDesign }: StepDesignProps) {
    return (
        <div>
            <div className="mb-7 text-center">
                <span className="mb-3 inline-flex rounded-full border border-[#E4E7EC] px-4 py-1.5 text-[12px] text-[#667085]">
                    كتالوج التصاميم
                </span>

                <h2 className="text-[24px] font-[700] text-[#101828] md:text-[32px]">
                    اختر التصميم الذي يلامس ذوقك
                </h2>

                <p className="mt-3 text-custom14 leading-7 text-[#667085]">
                    اختر التصميم الأقرب للمكان الذي ترغب في تنفيذه.
                </p>
            </div>

            {designs.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {designs.map((design) => (
                        <DesignOption key={design.code} active={formData.designCode === design.code} code={design.code} title={design.name} subtitle={design.subtitle} category={design.category?.title || ""} image={design.image} onClick={() => selectDesign(design)} />
                    ))}
                </div>
            ) : (
                <div className="rounded-[16px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 py-12 text-center">
                    <p className="text-custom14 font-[600] text-[#667085]">
                        لا توجد تصميمات متوفرة حاليًا
                    </p>
                </div>
            )}
        </div>
    );
}