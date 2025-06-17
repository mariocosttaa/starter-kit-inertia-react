import Cookies from 'js-cookie';

const isBrowser = typeof window !== 'undefined';

export const setSubscriptionPeriodCookie = (period: string): void => {
    Cookies.set('subscription_period', period, { path: '/' });
};

export const getSubscriptionPeriodCookie = (): string | null => {
    return Cookies.get('subscription_period') || null;
};

