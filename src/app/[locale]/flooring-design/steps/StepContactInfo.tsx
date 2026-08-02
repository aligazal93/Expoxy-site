import { UpdateFormData, WizardData } from "@/app/types/wizard";

type StepContactInfoProps = {
    formData: WizardData;
    updateFormData: UpdateFormData;
};

export default function StepContactInfo({ formData, updateFormData }: StepContactInfoProps) {
    return (
        <div className="rounded-[26px] border border-[#E4E7EC] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] md:p-7">
            <div className="space-y-5">
                <div>
                    <label htmlFor="wizard-name" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                        الاسم الكامل
                    </label>

                    <input id="wizard-name" type="text" autoComplete="name" value={formData.name} onChange={(event) => updateFormData("name", event.target.value)} placeholder="اسمك الكامل" className="h-[54px] w-full rounded-[12px] border border-[#E4E7EC] px-4 text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </div>

                <div>
                    <label htmlFor="wizard-phone" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                        رقم الجوال
                    </label>

                    <input id="wizard-phone" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={formData.phone} onChange={(event) => updateFormData("phone", event.target.value)} placeholder="+966 5X XXX XXXX" className="h-[54px] w-full rounded-[12px] border border-[#E4E7EC] px-4 text-end text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </div>

                <div>
                    <label htmlFor="wizard-notes" className="mb-2 block text-custom14 font-[700] text-blackGrey">
                        ملاحظات إضافية <span className="font-[400] text-[#98A2B3]">(اختياري)</span>
                    </label>

                    <textarea id="wizard-notes" rows={4} value={formData.notes} onChange={(event) => updateFormData("notes", event.target.value)} placeholder="ألوان مفضلة أو تفاصيل خاصة" className="w-full resize-none rounded-[12px] border border-[#E4E7EC] px-4 py-3 text-custom14 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10" />
                </div>
            </div>
        </div>
    );
}