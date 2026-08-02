import api from "@/utils/api";
import { FormDataResponse } from "../types/formData";

export async function getFormData(locale: string): Promise<FormDataResponse> {
    const response = await api.get<FormDataResponse>("/form_data", {
        headers: {
            "Accept-Language": locale,
            lang: locale,
        },
    });

    return response.data;
}