
import type {
    CreateOrderPayload,
    CreateOrderResponse,
} from "@/app/types/order";
import api from "@/utils/api";

export async function createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
    const body = new FormData();

    body.append("user_name", payload.user_name);
    body.append("user_phone", payload.user_phone);
    body.append("notes", payload.notes);
    body.append("area", payload.area);
    body.append("design_id", String(payload.design_id));
    body.append("area_id", String(payload.area_id));
    body.append("place_type_id", String(payload.place_type_id));

    if (payload.image) {
        body.append("image", payload.image);
    }

    const sentData: Record<string, FormDataEntryValue> = {};

    body.forEach((value, key) => {
        sentData[key] = value;
    });

    console.log("Order data sent:", sentData);

    if (payload.image) {
        console.log("Image details:", {
            name: payload.image.name,
            type: payload.image.type,
            size: `${(payload.image.size / 1024 / 1024).toFixed(2)} MB`,
        });
    }

    const response = await api.post<CreateOrderResponse>("/orders", body);

    console.log("Order response:", response.data);

    return response.data;
}