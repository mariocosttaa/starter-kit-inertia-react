import { jsxs, jsx } from "react/jsx-runtime";
import { q } from "../ssr.js";
import DefaultLayout from "./DefaultLayout-Dg5rNnne.js";
import Navbar from "./Navbar-BON2O-IC.js";
import Sidebar from "./Sidebar-Bg7GBzwR.js";
import Footer from "./Footer-5Le6GkAo.js";
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
import "react-i18next";
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
import "./useCssManager-D1xujsTe.js";
import "./useTemplateSettings-B6Ycpyl0.js";
import "./TemplateSettings-B4lfXDH4.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
function DashbaordPrivateLayout({ children }) {
  const { auth } = q().props;
  return /* @__PURE__ */ jsxs(DefaultLayout, { children: [
    /* @__PURE__ */ jsx(Sidebar, {}),
    /* @__PURE__ */ jsxs("div", { className: "page-wrapper", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("div", { className: "body-wrapper", children: /* @__PURE__ */ jsx("div", { className: "container-fluid", children }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  DashbaordPrivateLayout as default
};
