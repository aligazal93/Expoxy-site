export interface ServiceDetailsItem {
    name: string;
    content: string;
}

export interface ServiceDetails {
    id: number;
    name: string;
    subtitle: string;
    image: string;
    second_image: string | null;
    methodologies: ServiceDetailsItem[];
    steps: ServiceDetailsItem[];
}

export interface ServiceDetailsResponse {
    service: ServiceDetails;
}