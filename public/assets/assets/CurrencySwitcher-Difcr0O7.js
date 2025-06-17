import { jsxs, jsx } from "react/jsx-runtime";
import { q } from "../ssr.js";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useCurrency } from "./useCurrency-CWqNCApD.js";
import "es-toolkit";
import "qs";
import "axios";
import "es-toolkit/compat";
import "http";
import "process";
import "node:cluster";
import "node:os";
import "react-dom/server";
import "i18next";
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
function CurrencySwitcher({ includeDownIcon = false }) {
  const { currencies, default_currency } = q().props;
  const { t: __ } = useTranslation(["static-text"]);
  const { currentCurrencyCode, updateCurrency } = useCurrency();
  const effectiveCurrencyCode = currentCurrencyCode || default_currency;
  useEffect(() => {
    if (!currentCurrencyCode) {
      updateCurrency(default_currency);
    }
  }, [currentCurrencyCode, default_currency, updateCurrency]);
  const actualCurrencyData = currencies.find(
    (currency) => currency.code === effectiveCurrencyCode
  ) || currencies.find(
    (currency) => currency.code === default_currency
  );
  function changeCurrency(code) {
    updateCurrency(code);
  }
  if (!actualCurrencyData) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center",
        id: "bd-currency",
        type: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        "data-bs-display": "static",
        children: [
          /* @__PURE__ */ jsx("span", { children: actualCurrencyData.name }),
          includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down dropdown-indicator" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("ul", { className: "dropdown-menu dropdown-menu-end", "aria-labelledby": "bd-currency", children: currencies.map((currency) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => changeCurrency(currency.code),
        className: `dropdown-item d-flex align-items-center justify-content-between ${currency.code === effectiveCurrencyCode ? "active" : ""}`,
        type: "button",
        children: [
          /* @__PURE__ */ jsx("span", { children: currency.name }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: currency.symbol })
        ]
      }
    ) }, currency.id)) })
  ] });
}
export {
  CurrencySwitcher as default
};
