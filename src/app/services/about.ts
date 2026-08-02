import api from "@/utils/api";
import { AboutResponse } from "../types/about";

export async function getAboutData(locale: string): Promise<AboutResponse> {
    const response = await api.get<AboutResponse>("/about", {
        headers: {
            "Accept-Language": locale,
            "lang": locale,
        },
    });

    return response.data;
}