import { InertiaMiddlewareProps } from "@/js/shared/types/Inertia-middleware-prop";
import { usePage } from "@inertiajs/react";

export default function PublicFooter() {
    const { auth, locale, currencies, default_currency, default_currency_id } = usePage<InertiaMiddlewareProps>().props;

    return (
        <div>
            Footer
        </div>
    )
}