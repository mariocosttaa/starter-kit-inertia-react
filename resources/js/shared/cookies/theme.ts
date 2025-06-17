

import Cookies from 'js-cookie';

const isBrowser = typeof window !== 'undefined';

export const setThemeDark = (): void => {
    Cookies.set('theme', 'dark', { expires: 365 });
};

export const setThemeLight = (): void => {
    Cookies.set('theme', 'light', { expires: 365 });
};

export const getTheme = (): string | null => {
    return Cookies.get('theme') || null;
};



