import api from "@/utils/api";
import { ProjectResponse } from "../types/projects";

export async function getProjectsData(locale: string): Promise<ProjectResponse> {
    const response = await api.get<ProjectResponse>("/projects", {
        headers: {
            "Accept-Language": locale,
            "lang": locale,
        },
    });

    return response.data;
}