import Cookies from 'js-cookie';

const isBrowser = typeof window !== 'undefined';

export const setCurrencyCookie = (currencyCode: string): void => {
    Cookies.set('currency', currencyCode, { path: '/' });
};

export const getCurrencyCookie = (): string | null => {
    return Cookies.get('currency') || null;
};

