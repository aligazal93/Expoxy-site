"use client";

import { useQuery } from "@tanstack/react-query";
import { getAboutData } from "../services/about";

export function useAbout(locale: string) {
    return useQuery({
        queryKey: ["about", locale],
        queryFn: () => getAboutData(locale),
        enabled: Boolean(locale),
        staleTime: 0,
        refetchOnMount: "always",
    });
}