"use client";

import { useQuery } from "@tanstack/react-query";
import { getProjectsData } from "../services/projects";

export function useAllProjects(locale: string) {
    return useQuery({
        queryKey: ["projects", locale],
        queryFn: () => getProjectsData(locale),
        enabled: Boolean(locale),
        staleTime: 0,
        refetchOnMount: "always",
    });
}