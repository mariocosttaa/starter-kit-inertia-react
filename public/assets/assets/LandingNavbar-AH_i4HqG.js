import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { q, Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
import CurrencySwitcher from "./CurrencySwitcher-Difcr0O7.js";
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
import "./useCurrency-CWqNCApD.js";
function PublicNavbar() {
  const { auth } = q().props;
  const { t: __ } = useTranslation(["static-text", "menu"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "header", children: /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg py-0", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(Ye, { className: "navbar-brand me-0 py-0", href: route("landing-home"), children: /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", width: 170, alt: "img-fluid" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "navbar-toggler d-none",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2 fs-9" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "navbar-toggler border-0 p-0 shadow-none",
          type: "button",
          "data-bs-toggle": "offcanvas",
          "data-bs-target": "#offcanvasNavbar",
          "aria-controls": "offcanvasNavbar",
          children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2 fs-9" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav align-items-center mb-2 mb-lg-0 ms-auto", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-home"), children: __("Home", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-about"), children: __("About", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-features"), children: __("Features", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-integrations"), children: __("Integrations", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-pricing"), children: __("Pricing", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-contact"), children: __("Contact", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("public-home"), children: __("Virtual Airlines", { ns: "menu" }) }) }),
        /* @__PURE__ */ jsx(LanguageSwitcher, { includeDownIcon: true }),
        /* @__PURE__ */ jsx(CurrencySwitcher, { includeDownIcon: true }),
        /* @__PURE__ */ jsx(
          Ye,
          {
            className: "btn btn-primary fs-3 rounded btn-hover-shadow px-3 py-2",
            href: route("landing-pricing"),
            children: __("Try Now")
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "offcanvas offcanvas-start modernize-lp-offcanvas",
        tabIndex: -1,
        id: "offcanvasNavbar",
        "aria-labelledby": "offcanvasNavbarLabel",
        children: [
          /* @__PURE__ */ jsx("div", { className: "offcanvas-header p-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/assets/images/dark-logo.svg",
              alt: "modernize-img",
              className: "img-fluid",
              width: 150
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "offcanvas-body p-4", children: [
            /* @__PURE__ */ jsxs("ul", { className: "navbar-nav justify-content-end flex-grow-1", children: [
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3 active", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link active", "aria-current": "page", href: route("landing-home"), children: __("Home", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-about"), children: __("About", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-features"), children: __("Features", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-integrations"), children: __("Integrations", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-pricing"), children: __("Pricing", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("landing-contact"), children: __("Contact", { ns: "menu" }) }) }),
              /* @__PURE__ */ jsx("li", { className: "nav-item mt-3", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link", "aria-current": "page", href: route("public-home"), children: __("Virtual Airlines", { ns: "menu" }) }) })
            ] }),
            /* @__PURE__ */ jsx("form", { className: "d-flex mt-4", role: "search", children: /* @__PURE__ */ jsx(Ye, { href: route("landing-pricing"), className: "btn btn-primary w-100 py-2", children: __("Try now") }) })
          ] })
        ]
      }
    )
  ] });
}
export {
  PublicNavbar as default
};
