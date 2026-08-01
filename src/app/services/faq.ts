import api from "@/utils/api";
import { FaqItem, FaqResponse } from "../types/faqs";

export async function getFaqs(locale: string): Promise<FaqItem[]> {
  const response = await api.get<FaqResponse>("/faq", {
    headers: {
      "Accept-Language": locale,
    },
  });

  return response.data?.questions ?? [];
}