import { Subscription, SubscriptionPrice } from "./subscription";
import { User } from "./user";


export interface TenancyWithBilling {
    id: string;
    name: string;
    slug: string;
    subscription_id: string;
    subscription_price_id: string;
    payment_date: string;
    expiration_date: string | null;
    owner_user_id: string;
    status: boolean;
    created_at: string;
    updated_at: string;

    subscription: Subscription;
    subscriptionPrice: SubscriptionPrice;
    owner_user: User
}

export interface Tenancy {
    id: string;
    name: string;
    slug: string;
    status: boolean;
    created_at: string;
    updated_at: string
}