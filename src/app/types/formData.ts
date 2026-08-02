export interface DesignCategory {
    id: number;
    title: string;
}

export interface FormDesign {
    code: string;
    name: string;
    subtitle: string;
    image: string;
    category: DesignCategory;
}

export interface FormArea {
    id: number;
    name: string;
}

export interface FormPlaceType {
    id: number;
    name: string;
}

export interface FormDataResponse {
    designs: FormDesign[];
    areas: FormArea[];
    places_types: FormPlaceType[];
}