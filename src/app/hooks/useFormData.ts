"use client";

import { useQuery } from "@tanstack/react-query";
import { getFormData } from "@/app/services/formData";

export function useFormData(locale: string) {
    return useQuery({
        queryKey: ["form-data", locale],
        queryFn: () => getFormData(locale),
        enabled: Boolean(locale),
        staleTime: 0,
        refetchOnMount: "always",
    });
}