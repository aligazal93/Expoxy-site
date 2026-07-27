import api from "@/utils/api";
import { cache } from "react";
import { HomeResponse } from "../types/home";

export const getHomeData = cache(async (locale: string): Promise<HomeResponse> => {
  const response = await api.get<HomeResponse>("/home", {
    headers: {
      "Accept-Language": locale,
      "lang": locale,
    },
  });

  return response.data;
});