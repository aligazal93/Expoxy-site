"use client";

import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../services/faq";

export function useFaqs(locale: string) {
  return useQuery({
    queryKey: ["faqs", locale],
    queryFn: () => getFaqs(locale),
    enabled: Boolean(locale),
    staleTime: 0,
    refetchOnMount: "always",
  });
}