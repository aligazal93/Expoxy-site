import { WizardData } from "@/app/types/wizard";
import type { FormPlaceType } from "@/app/types/formData";
import ChoiceButton from "../components/ChoiceButton";

interface StepPlaceTypeProps {
    formData: WizardData;
    placeTypes: FormPlaceType[];
    selectPlaceType: (id: number, name: string) => void;
}

export default function StepPlaceType({ formData, placeTypes, selectPlaceType }: StepPlaceTypeProps) {
    return (
        <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-6">
            {placeTypes.length > 0 ? (
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
                    {placeTypes.map((placeType) => (
                        <ChoiceButton key={placeType.id} active={formData.placeTypeId === placeType.id} label={placeType.name} onClick={() => selectPlaceType(placeType.id, placeType.name)} />
                    ))}
                </div>
            ) : (
                <div className="rounded-[16px] border border-dashed border-[#D0D5DD] bg-[#F9FAFB] px-5 py-10 text-center">
                    <p className="text-custom14 font-[600] text-[#667085]">
                        لا توجد أنواع أماكن متوفرة حاليًا
                    </p>
                </div>
            )}
        </div>
    );
}