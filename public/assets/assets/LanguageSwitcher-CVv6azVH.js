import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { q, m as me } from "../ssr.js";
import { useTranslation } from "react-i18next";
import "es-toolkit";
import "qs";
import "axios";
import "react";
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
function LanguageSwitcher({ includeDownIcon = false, className = "" }) {
  const { locale } = q().props;
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split("/");
    pathParts[1] = lng;
    url.pathname = pathParts.join("/");
    i18n.changeLanguage(lng);
    const currentScrollPosition = window.scrollY;
    me.visit(url.toString(), {
      preserveScroll: true,
      onSuccess: () => window.scrollTo(0, currentScrollPosition)
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown ms-2", children: [
    locale == "en" ? /* @__PURE__ */ jsxs("a", { className: `nav-link dropdown-toggle ${className}`, href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ jsx("img", { src: `/assets/images/us.svg`, alt: "English", className: "me-2", width: 20 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "English" }),
      includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-5 me-2" })
    ] }) : locale == "pt" ? /* @__PURE__ */ jsxs("a", { className: `nav-link dropdown-toggle ${className}`, href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ jsx("img", { src: `/assets/images/pt.svg`, alt: "Português", className: "me-2", width: 20 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "Português" }),
      includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-5 me-2" })
    ] }) : locale == "es" ? /* @__PURE__ */ jsxs("a", { className: `nav-link dropdown-toggle ${className}`, href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ jsx("img", { src: `/assets/images/es.svg`, alt: "Spanish", className: "me-2", width: 20 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "Spanish" }),
      includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-5 me-2" })
    ] }) : locale == "fr" ? /* @__PURE__ */ jsxs("a", { className: `nav-link dropdown-toggle ${className}`, href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ jsx("img", { src: `/assets/images/fr.svg`, alt: "French", className: "me-2", width: 20 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: "French" }),
      includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-5 me-2" })
    ] }) : /* @__PURE__ */ jsxs("a", { className: `nav-link dropdown-toggle ${className}`, href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [
      /* @__PURE__ */ jsx("img", { src: `/assets/images/${locale}.svg`, alt: locale, className: "me-2", width: 20 }),
      /* @__PURE__ */ jsx("span", { className: "align-middle", children: locale }),
      includeDownIcon && /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-5 me-2" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "dropdown-menu", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { onClick: () => changeLanguage("en"), className: "dropdown-item", children: [
        /* @__PURE__ */ jsx("img", { src: `/assets/images/us.svg`, alt: "English", className: "me-2", width: 20 }),
        " English"
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { onClick: () => changeLanguage("pt"), className: "dropdown-item", children: [
        /* @__PURE__ */ jsx("img", { src: `/assets/images/pt.svg`, alt: "Português", className: "me-2", width: 20 }),
        " Português"
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { onClick: () => changeLanguage("es"), className: "dropdown-item", children: [
        /* @__PURE__ */ jsx("img", { src: `/assets/images/es.svg`, alt: "Spanish", className: "me-2", width: 20 }),
        " Spanish"
      ] }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { onClick: () => changeLanguage("fr"), className: "dropdown-item", children: [
        /* @__PURE__ */ jsx("img", { src: `/assets/images/fr.svg`, alt: "French", className: "me-2", width: 20 }),
        " French"
      ] }) })
    ] })
  ] }) });
}
export {
  LanguageSwitcher as default
};
