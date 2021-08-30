
export namespace ProductApiResponse {
    export interface Product {
        name: string;
        id: string;
        features: string[];
        plans: Plan[];
    };
    export interface PlanData {
        currency: string;
        id: string;
        priceCents: number;
    };
    export interface Plan1 extends PlanData {
        paymentInterval: PaymentInterval
    };
    export interface Plan2 extends PlanData {
        interval: PaymentInterval
    };
    export type Plan = Plan1 | Plan2;
    type PaymentInterval = 'MONTH' | 'YEAR'
}

export interface ProductApiResponse {
    products: ProductApiResponse.Product[]
}
