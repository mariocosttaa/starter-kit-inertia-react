import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrencyCookie, setCurrencyCookie } from '../cookies/currencyCookie';
import { usePage } from '@inertiajs/react';
import { SharedData } from '../types/Inertia-middleware-prop';

interface CurrencyContextType {
    currentCurrencyCode: string;
    updateCurrency: (code: string) => void;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
    children: React.ReactNode;
}

const isBrowser = typeof window !== 'undefined';

export function CurrencyProvider({ children }: CurrencyProviderProps) {
    // Get page props safely (only on client)
    let defaultCurrency = '';
    if (isBrowser) {
        try {
            const pageProps = usePage<SharedData>().props;
            defaultCurrency = pageProps.default_currency;
        } catch (error) {
            // If we can't get page props, we'll rely on cookies only
            console.warn('CurrencyProvider: Could not access page props, falling back to cookies');
        }
    }

    // Initialize with cookies first (client), then fallback to props, else empty string
    const [currentCurrencyCode, setCurrentCurrencyCode] = useState<string>(
        isBrowser ? (getCurrencyCookie() || defaultCurrency) : ''
    );

    // Sync cookies with state (client only)
    useEffect(() => {
        if (!isBrowser) return;
        if (!getCurrencyCookie()) {
            setCurrencyCookie(currentCurrencyCode);
        }
    }, [currentCurrencyCode]);

    const updateCurrency = (code: string) => {
        setCurrentCurrencyCode(code);
        if (isBrowser) setCurrencyCookie(code);
    };

    return (
        <CurrencyContext.Provider value={{ currentCurrencyCode, updateCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}
