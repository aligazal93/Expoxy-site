"use client";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "../services/home";

export const homeKeys = {
  all: ["home"] as const,
  detail: (locale: string) => [...homeKeys.all, locale] as const,
};

export function useHome(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
  });
}

export function useServices(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.services,
  });
}

export function useProjects(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.projects,
  });
}

export function useSteps(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.steps,
  });
}

export function useQuestions(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.questions,
  });
}

export function useClients(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.clients,
  });
}

export function useInformation(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.informations,
  });
}


export function useCategories(locale: string) {
  return useQuery({
    queryKey: homeKeys.detail(locale),
    queryFn: () => getHomeData(locale),
    select: (data) => data.categories,
  });
}