import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Y as Ye } from "../ssr.js";
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
function PublicFooter() {
  const { t: __ } = useTranslation(["static-text"]);
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsx("div", { className: "border-bottom", children: /* @__PURE__ */ jsxs("div", { className: "row mb-sm-12 mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-md-3 col-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "fs-4 fw-semibold mb-7", children: "Our Mission" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-body mb-0", children: "Virtual Airline System is a powerful SaaS designed for virtual airlines to manage their operations, staff, and aircraft. The system is designed to be user-friendly and easy to use, making it accessible to virtual airlines of all sizes." }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-md-3 col-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "fs-4 fw-semibold mb-7", children: "About AVS" }),
        /* @__PURE__ */ jsxs("ul", { className: "d-flex flex-column gap-9", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Ye, { className: "fs-4 text-body link-primary", href: "/faqs", children: "FAQ" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Ye, { className: "fs-4 text-body link-primary", href: "/pilot-career", children: "Pilot Career" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Ye, { className: "fs-4 text-body link-primary", href: "/privacy", children: "Privacy Policy" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-md-3 col-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "fs-4 fw-semibold mb-7", children: "For Business" }),
        /* @__PURE__ */ jsxs("ul", { className: "d-flex flex-column gap-9", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Ye, { className: "fs-4 text-body link-primary", href: "/for-business", children: "Create Your Company" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Ye, { className: "fs-4 text-body link-primary", href: "/contact", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "col-md-3 col-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "fs-4 fw-semibold mb-7", children: "Stay Connected" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex gap-9", children: [
          /* @__PURE__ */ jsx(Ye, { href: "https://facebook.com", target: "_blank", className: "text-body hover-primary", children: /* @__PURE__ */ jsx("i", { className: "ti ti-brand-facebook fs-6" }) }),
          /* @__PURE__ */ jsx(Ye, { href: "https://twitter.com", target: "_blank", className: "text-body hover-primary", children: /* @__PURE__ */ jsx("i", { className: "ti ti-brand-twitter fs-6" }) }),
          /* @__PURE__ */ jsx(Ye, { href: "https://linkedin.com", target: "_blank", className: "text-body hover-primary", children: /* @__PURE__ */ jsx("i", { className: "ti ti-brand-linkedin fs-6" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between py-7 flex-md-nowrap flex-wrap gap-sm-0 gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex gap-3 align-items-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/assets/images/favicon.png", alt: "icon" }),
        /* @__PURE__ */ jsxs("p", { className: "fs-4 mb-0", children: [
          "© ",
          year,
          "  ",
          __("All rights reserved by"),
          " Central Virtual Airline Management"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "mb-0", children: [
        __("Produced By"),
        " ",
        /* @__PURE__ */ jsx("a", { target: "_blank", style: { cursor: "pointer" }, className: "text-primary link-primary", children: "Bindamy" }),
        "."
      ] }) })
    ] })
  ] }) }) });
}
export {
  PublicFooter as default
};
