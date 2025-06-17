import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { q, Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
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
function PublicNavbar() {
  const { auth } = q().props;
  const { t: __ } = useTranslation(["static-text", "menu"]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "topbar-image bg-primary py-1 rounded-0 mb-0 alert alert-dismissible fade show", role: "alert", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-center gap-sm-3 gap-2 align-items-center text-center flex-md-nowrap flex-wrap", children: [
        /* @__PURE__ */ jsx("span", { className: "badge bg-white bg-opacity-10 fs-2 fw-bolder px-2", children: __("New") }),
        /* @__PURE__ */ jsxs("p", { className: "mb-0 text-white fw-bold", children: [
          __("Welcome To"),
          " Central Virtual Airline Management"
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close btn-close-white p-2 fs-2", "data-bs-dismiss": "alert", "aria-label": "Close" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "header-fp p-0 w-100", children: /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg bg-primary-subtle py-2 py-lg-10", children: /* @__PURE__ */ jsxs("div", { className: "custom-container d-flex align-items-center justify-content-between", children: [
      /* @__PURE__ */ jsx(Ye, { href: route("public-home"), className: "text-nowrap logo-img", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", width: 180, alt: "img-fluid" }) }),
      /* @__PURE__ */ jsx("button", { className: "navbar-toggler border-0 p-0 shadow-none", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#offcanvasRight", "aria-controls": "offcanvasRight", children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2 fs-8" }) }),
      /* @__PURE__ */ jsxs("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", children: [
        /* @__PURE__ */ jsxs("ul", { className: "navbar-nav mx-auto mb-2 gap-xl-7 gap-8 mb-lg-0", children: [
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link fs-4 px-6 fw-bold text-dark link-primary", href: route("public-home"), children: __("Home", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link fs-4 px-6 fw-bold text-dark link-primary", href: route("public-blog"), children: __("Blog", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Ye, { className: "nav-link fs-4 px-6 fw-bold text-dark link-primary", href: route("landing-home"), children: __("For Business", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx(LanguageSwitcher, {})
        ] }),
        /* @__PURE__ */ jsx("div", { children: auth.user ? /* @__PURE__ */ jsx(Ye, { href: route("portal-virtual-airlines"), className: "btn btn-success py-8 px-9", children: __("Portal") }) : /* @__PURE__ */ jsx(Ye, { href: route("public-login"), className: "btn btn-primary py-8 px-9", children: __("Log In", { ns: "menu" }) }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "offcanvas offcanvas-end", tabIndex: -1, id: "offcanvasRight", "aria-labelledby": "offcanvasRightLabel", children: [
      /* @__PURE__ */ jsxs("div", { className: "offcanvas-header", children: [
        /* @__PURE__ */ jsx(Ye, { href: route("landing-home"), children: /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", width: 170, alt: "img-fluid" }) }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close text-reset", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "offcanvas-body", children: [
        /* @__PURE__ */ jsxs("ul", { className: "list-unstyled ps-0", children: [
          /* @__PURE__ */ jsx("li", { className: "mb-1", children: /* @__PURE__ */ jsx(Ye, { className: "px-0 fs-4 d-block text-dark link-primary w-100 py-2", href: route("public-home"), children: __("Home", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-1", children: /* @__PURE__ */ jsx(Ye, { className: "px-0 fs-4 d-block text-dark link-primary w-100 py-2", href: route("public-blog"), children: __("Blog", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx("li", { className: "mb-1", children: /* @__PURE__ */ jsx(Ye, { className: "px-0 fs-4 d-block text-dark link-primary w-100 py-2", href: route("landing-home"), children: __("For Business", { ns: "menu" }) }) }),
          /* @__PURE__ */ jsx(LanguageSwitcher, {})
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-3", children: auth.user ? /* @__PURE__ */ jsx(Ye, { href: route("portal-virtual-airlines"), className: "btn btn-success py-8 px-9", children: __("Portal") }) : /* @__PURE__ */ jsx(Ye, { href: route("public-login"), className: "btn btn-primary py-8 px-9", children: __("Log In", { ns: "menu" }) }) })
      ] })
    ] })
  ] });
}
export {
  PublicNavbar as default
};
