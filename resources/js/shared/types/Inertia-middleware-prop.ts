import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import Currency from './model/currency';
import { User } from './model/user';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}



export interface InertiaMiddlewareProps {
    locale: string;
    currencies: Array<Currency>
    default_currency: string;
    default_currency_id: string;
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}


