import { usePage } from "@inertiajs/react";
import { SharedData } from "../types/Inertia-middleware-prop";
import { useTranslation } from "react-i18next";
import Currency from "../types/model/currency";
import { useEffect } from "react";
import { useCurrency } from "../hooks/useCurrency";

export default function CurrencySwitcher({ includeDownIcon = false }: { includeDownIcon?: boolean }) {
    const { currencies, default_currency } = usePage<SharedData>().props;
    const { t: __ } = useTranslation(['static-text']);
    const { currentCurrencyCode, updateCurrency } = useCurrency();

    // Initialize with current values from context or defaults
    const effectiveCurrencyCode = currentCurrencyCode || default_currency;

    // Set default currency if none is set
    useEffect(() => {
        if (!currentCurrencyCode) {
            updateCurrency(default_currency);
        }
    }, [currentCurrencyCode, default_currency, updateCurrency]);

    // Get actual currency data from currencies array
    const actualCurrencyData = currencies.find((currency) =>
        currency.code === effectiveCurrencyCode
    ) || currencies.find((currency) =>
        currency.code === default_currency
    );

    function changeCurrency(code: string): void {
        updateCurrency(code);
    }

    // Ensure we have a valid currency data
    if (!actualCurrencyData) {
        return null;
    }

    return (
        <div className="dropdown">
            <button
                className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
                id="bd-currency"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-display="static"
            >
                <span>{actualCurrencyData.name}</span>
                {includeDownIcon && (
                    <i className="ti ti-chevron-down dropdown-indicator"></i>
                )}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-currency">
                {currencies.map((currency) => (
                    <li key={currency.id}>
                        <button
                            onClick={() => changeCurrency(currency.code)}
                            className={`dropdown-item d-flex align-items-center justify-content-between ${currency.code === effectiveCurrencyCode ? 'active' : ''}`}
                            type="button"
                        >
                            <span>{currency.name}</span>
                            <span className="text-muted">{currency.symbol}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
