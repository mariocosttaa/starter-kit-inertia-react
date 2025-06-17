import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
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
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("footer", { className: "footer-part pt-7 pb-5", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx(Ye, { href: route("landing-home"), children: /* @__PURE__ */ jsx("img", { src: "/assets/images/favicon.ico", alt: "modernize-img", className: "img-fluid pb-3" }) }),
    /* @__PURE__ */ jsxs("p", { className: "mb-0 text-dark", children: [
      "© ",
      year,
      "  ",
      __("All Rights Reserved by"),
      " Central Virtual Airline Management .",
      /* @__PURE__ */ jsxs("span", { className: "text-dark text-hover-primary border-bottom border-primary", style: { cursor: "pointer" }, children: [
        "  ",
        __("Produced By"),
        " Bindamy Soluctions"
      ] })
    ] })
  ] }) }) }) }) }) });
}
export {
  PublicFooter as default
};
