import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useCssManager } from "./useCssManager-D1xujsTe.js";
import PublicNavbar from "./LandingNavbar-AH_i4HqG.js";
import PublicFooter from "./LandingFooter-D-xnuXAk.js";
import LandingTittleSection from "./LandingTittleSection-B-EtpfVD.js";
import LoadingOverlay from "./LoadingOverlay-DZnlEpZi.js";
import "react";
import "../ssr.js";
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
import "./CurrencySwitcher-Difcr0O7.js";
import "./useCurrency-CWqNCApD.js";
import "./useDarkMode-DW9zJM-O.js";
if (typeof window !== "undefined") {
  import("bootstrap").then(() => {
  });
}
function LandingPageLayout({ children, bodyHeaderTittle, bodyHeaderSubtittle, onlystyles = false }) {
  const { isLoading } = useCssManager("landing");
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LoadingOverlay, { isVisible: isLoading }),
    onlystyles === false && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(PublicNavbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "body-wrapper overflow-hidden pt-0", children: [
        (bodyHeaderSubtittle || bodyHeaderTittle) && /* @__PURE__ */ jsx(LandingTittleSection, { bodyHeaderSubtittle, bodyHeaderTittle }),
        children,
        /* @__PURE__ */ jsx(PublicFooter, {})
      ] })
    ] }),
    onlystyles === true && children
  ] });
}
export {
  LandingPageLayout as default
};
