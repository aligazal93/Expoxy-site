import { UpdateFormData, WizardData } from "@/app/types/wizard";

type StepAreaProps = {
    formData: WizardData;
    updateFormData: UpdateFormData;
};

export default function StepArea({ formData, updateFormData }: StepAreaProps) {
    return (
        <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
            <label htmlFor="area" className="mb-3 block text-custom14 font-[700] text-blackGrey">
                المساحة التقريبية بالمتر المربع
            </label>

            <div className="relative">
                <input id="area" type="number" min="1" inputMode="decimal" value={formData.area} onChange={(event) => updateFormData("area", event.target.value)} placeholder="مثال: 45" className="h-[56px] w-full rounded-[12px] border border-[#E4E7EC] bg-white px-4 pe-[70px] text-custom15 text-blackGrey outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />

                <span className="absolute end-4 top-1/2 -translate-y-1/2 text-custom14 font-[600] text-[#98A2B3]">
                    م²
                </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
                <button type="button" onClick={() => updateFormData("area", "20")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "20" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>20 م²</button>
                <button type="button" onClick={() => updateFormData("area", "30")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "30" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>30 م²</button>
                <button type="button" onClick={() => updateFormData("area", "40")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "40" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>40 م²</button>
                <button type="button" onClick={() => updateFormData("area", "50")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "50" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>50 م²</button>
                <button type="button" onClick={() => updateFormData("area", "60")} className={`rounded-full border px-5 py-2 text-custom13 transition ${formData.area === "60" ? "border-primary bg-primary text-white" : "border-[#E4E7EC] text-[#667085] hover:border-primary hover:text-primary"}`}>60 م²</button>
            </div>
        </div>
    );
}