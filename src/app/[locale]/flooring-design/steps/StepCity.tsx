import type { FormArea } from "@/app/types/formData";
import { WizardData } from "@/app/types/wizard";
import ChoiceButton from "../components/ChoiceButton";

interface StepCityProps {
    formData: WizardData;
    areas: FormArea[];
    selectCity: (id: number, name: string) => void;
}

export default function StepCity({ formData, areas, selectCity }: StepCityProps) {
    return (
        <div className="min-h-[330px] rounded-[26px] border border-[#E4E7EC] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-6">
            {areas.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                    {areas.map((area) => (
                        <ChoiceButton key={area.id} active={formData.cityId === area.id} label={area.name} onClick={() => selectCity(area.id, area.name)} />
                    ))}
                </div>
            ) : (
                <div className="rounded-[16px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 py-10 text-center">
                    <p className="text-custom14 font-[600] text-[#667085]">
                        لا توجد مدن أو مناطق متوفرة حاليًا
                    </p>
                </div>
            )}
        </div>
    );
}