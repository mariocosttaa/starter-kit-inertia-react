import { routeLang } from "@/js/shared/helpers/routeLang";
import { InertiaMiddlewareProps } from "@/js/shared/types/Inertia-middleware-prop";
import { usePage } from "@inertiajs/react";

interface PublicNavbarProps {
    active: string;
}

export default function PublicNavbar({ active }: PublicNavbarProps) {
    const { auth, locale, currencies, default_currency, default_currency_id } = usePage<InertiaMiddlewareProps>().props;

    //menus
    const menus = [
        {
            label: 'Home',
            href: routeLang('public-home'),
            isActive: active === 'home',
        },

    ]

    return (
        <div>
            Navbar
        </div>
    )
}