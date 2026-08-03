"use client";

import { useQuery } from "@tanstack/react-query";

import { getServiceDetails } from "@/app/services/serviceDetails";

export function useServiceDetails(id: string | number, locale: string) {
    return useQuery({
        queryKey: ["service-details", id, locale],
        queryFn: () => getServiceDetails(id, locale),
        enabled: Boolean(id),
        staleTime: 0,
        
    });
}