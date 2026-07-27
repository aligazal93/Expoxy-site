"use client";

import { environmentManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type TanstackProviderProps = {
    children: ReactNode;
};

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
                retry: 1,
                refetchOnWindowFocus: false,
            },
        },
    });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
    if (environmentManager.isServer()) {
        return makeQueryClient();
    }

    if (!browserQueryClient) {
        browserQueryClient = makeQueryClient();
    }

    return browserQueryClient;
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>
        {children}

        <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-right"
        />
    </QueryClientProvider>
}