import { route as ziggyRoute } from 'ziggy-js';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@/js/shared/types/Inertia-middleware-prop';

export function useRoute() {
    const { locale: currentLocale } = usePage<SharedData>().props;

    return (name: string, params: Record<string, any> = {}) => {
        const locale = params.locale || currentLocale;
        return ziggyRoute(name, { locale, ...params });
    };
}
