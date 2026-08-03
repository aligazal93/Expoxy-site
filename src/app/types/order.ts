export interface CreateOrderPayload {
    user_name: string;
    user_phone: string;
    notes: string;
    area: string;
    design_id: number;
    area_id: number;
    place_type_id: number;
    image: File | null;
}

export interface CreateOrderResponse {
    message?: string;
    data?: {
        id: number;
    };
}