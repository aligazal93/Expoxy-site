import { ServiceDetails, ServiceDetailsResponse } from "@/app/types/serviceDetails";
import api from "@/utils/api";

export async function getServiceDetails(id: string | number, locale: string): Promise<ServiceDetails> {
    const response = await api.get<ServiceDetailsResponse>(`/services/${id}`, {
        headers: {
            "Accept-Language": locale,
        },
    });


    return response.data.service;
}