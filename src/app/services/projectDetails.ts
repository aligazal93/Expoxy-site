import { cache } from "react";
import api from "@/utils/api";
import { ProjectDetailsResponse } from "../types/projectDetails";

export const getProjectDetailsData = cache(async (id: string, locale: string): Promise<ProjectDetailsResponse> => {
    const response = await api.get<ProjectDetailsResponse>(`/projects/${id}`, {
        headers: {
            "Accept-Language": locale,
            "lang": locale,
        },
    });

    return response.data;
});