export type WizardData = {
    placeTypeId: number | null;
    placeType: string;

    area: string;

    designCode: string;
    designName: string;
    designImage: string;

    locationImage: File | null;

    cityId: number | null;
    city: string;

    name: string;
    phone: string;
    notes: string;
};

export type UpdateFormData = <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;