import { useState } from "react";
import { getCurrencyCookie, setCurrencyCookie } from "../cookies/currencyCookie";
import { CurrencyContext } from "../context/CurrencyContext";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currentCurrencyCode, setCurrentCurrencyCode] = useState(getCurrencyCookie());

    const updateCurrency = (code: string) => {
        setCurrencyCookie(code);
        setCurrentCurrencyCode(code);
    };

    return (
        <CurrencyContext.Provider value={{
            currentCurrencyCode: currentCurrencyCode || '',
            updateCurrency
        }}>
            {children}
        </CurrencyContext.Provider>
    );
}

