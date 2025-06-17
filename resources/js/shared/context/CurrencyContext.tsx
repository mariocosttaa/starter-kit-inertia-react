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

export function CurrencyProvider({ children }: CurrencyProviderProps) {
    // Get page props safely
    let defaultCurrency = '';

    try {
        const pageProps = usePage<SharedData>().props;
        defaultCurrency = pageProps.default_currency;
    } catch (error) {
        // If we can't get page props, we'll rely on cookies only
        console.warn('CurrencyProvider: Could not access page props, falling back to cookies');
    }

    // Initialize with cookies first, then fallback to props
    const [currentCurrencyCode, setCurrentCurrencyCode] = useState<string>(
        getCurrencyCookie() || defaultCurrency
    );


    // Sync cookies with state
    useEffect(() => {
        if (!getCurrencyCookie()) {
            setCurrencyCookie(currentCurrencyCode);
        }
    }, [currentCurrencyCode]);

    const updateCurrency = (code: string) => {
        setCurrentCurrencyCode(code);
        setCurrencyCookie(code);
    };

    return (
        <CurrencyContext.Provider value={{ currentCurrencyCode, updateCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}
