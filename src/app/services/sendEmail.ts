import api from "@/utils/api";

export interface SendEmailPayload {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface SendEmailResponse {
    message: string;
}

export async function sendContactEmail(payload: SendEmailPayload): Promise<SendEmailResponse> {
    const response = await api.post<SendEmailResponse>("/send_email", payload, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    return response.data;
}