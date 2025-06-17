import Country from "./country";
import Currency from "./currency";

// SubscriptionPrice.ts
export interface SubscriptionPrice {
    id: string;
    subscription_id: string;
    currency_code: string;
    value: number;
    value_formatted: string;
    comparative_value: number;  
    comparative_value_formatted: string;
    estimated_discount_percentage: number;
    estimated_discount_value: number;
    estimated_discount_value_formatted: string;
    decimal_separator: number;
    period: string;
    status: boolean;
    currency: Currency;
}

export interface SubscriptionFeature {
    id: string,
    type: string,
    subscription_id: string;
    order: number;
    name: string;
    description: string;
    status: boolean;
}


  // Subscription.ts
  export interface Subscription {
    id: string;
    name: string;
    slug: string;
    description: string;
    level: number;
    is_free: boolean;
    mandatory_period: string;
    status: boolean;
    created_at: string;
    updated_at: string;
    prices: Array<SubscriptionPrice>;
    features: Array<SubscriptionFeature>;
  }

  export interface SubscriptionBillingAddress {
    id: string,
    name: string,
    surname: string,
    phone_code: number,
    phone: string,
    country_id: string,
    country: Country,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    default: boolean,
    created_at: string,
    updated_at: string,
  }
