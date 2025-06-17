import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useCssManager } from "./useCssManager-D1xujsTe.js";
import { q } from "../ssr.js";
import PublicNavbar from "./PublicNavbar-8lfJSopR.js";
import PublicFooter from "./PublicFooter-Cs7C5yJb.js";
import LoadingOverlay from "./LoadingOverlay-DZnlEpZi.js";
import "react";
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
import "react-i18next";
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
import "./route-YhFkYWrg.js";
import "./LanguageSwitcher-CVv6azVH.js";
import "./useDarkMode-DW9zJM-O.js";
if (typeof window !== "undefined") {
  import("bootstrap").then(() => {
  });
}
function PublicPageLayout({ children, bodyHeaderSubtittle = "", bodyHeaderTittle = "" }) {
  const { auth } = q().props;
  const { isLoading } = useCssManager("public");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LoadingOverlay, { isVisible: isLoading }),
    /* @__PURE__ */ jsx(PublicNavbar, {}),
    bodyHeaderSubtittle.length > 0 && bodyHeaderTittle.length > 0 ? /* @__PURE__ */ jsx("section", { className: "bg-primary-subtle py-14", children: /* @__PURE__ */ jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-primary fs-4 fw-bolder", children: bodyHeaderSubtittle }),
      /* @__PURE__ */ jsx("h1", { className: "fw-bolder fs-12", children: bodyHeaderTittle })
    ] }) }) }) : null,
    /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "main-wrapper overflow-hidden", children }),
      /* @__PURE__ */ jsx(PublicFooter, {})
    ] })
  ] });
}
export {
  PublicPageLayout as default
};
