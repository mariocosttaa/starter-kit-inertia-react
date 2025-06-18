import { Subscription, SubscriptionPrice } from "./subscription";
import { User } from "./user";


export interface TenantWithBilling {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    billing_name: string;
    billing_email: string;
    billing_phone: string;
    billing_address: string;
    billing_city: string;
    billing_state: string;
    billing_country: string;
    billing_zip_code: string;
    created_at: string;
    updated_at: string;
}

export interface Tenant {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zip_code: string;
    created_at: string;
    updated_at: string;
}
