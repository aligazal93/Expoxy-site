export interface WizardData {
    placeTypeId: number | null;
    placeType: string;

    area: string;

    designId: number | null;
    designCode: string;
    designName: string;
    designImage: string;

    locationImage: File | null;

    areaId: number | null;
    city: string;

    name: string;
    phone: string;
    notes: string;
}

export type UpdateFormData = <K extends keyof WizardData>(key: K, value: WizardData[K]) => void;