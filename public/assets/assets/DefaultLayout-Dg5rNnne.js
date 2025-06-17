import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { u as useCssManager } from "./useCssManager-D1xujsTe.js";
import { TemplateSettingsProvider, useTemplateSettings } from "./useTemplateSettings-B6Ycpyl0.js";
import LoadingOverlay from "./LoadingOverlay-DZnlEpZi.js";
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
import "./TemplateSettings-B4lfXDH4.js";
import "./useDarkMode-DW9zJM-O.js";
if (typeof window !== "undefined") {
  import("bootstrap").then(() => {
  });
}
function DefaultLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);
  const { isLoading } = useCssManager("private");
  return /* @__PURE__ */ jsxs(TemplateSettingsProvider, { children: [
    /* @__PURE__ */ jsx(LoadingOverlay, { isVisible: isLoading }),
    /* @__PURE__ */ jsx(LayoutContent, { showSidebar, children })
  ] });
}
function LayoutContent({ children, showSidebar }) {
  const { settings } = useTemplateSettings();
  useEffect(() => {
    document.body.setAttribute("data-sidebartype", settings.SidebarType);
  }, [settings.SidebarType]);
  const mainWrapperClasses = settings.SidebarType === "mini-sidebar" ? "show-sidebar" : "";
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "main-wrapper",
      "data-layout": settings.Layout,
      "data-boxed-layout": settings.BoxedLayout ? "boxed" : "full",
      dir: settings.Direction,
      "data-bs-theme": settings.Theme,
      "data-card": settings.cardBorder ? "border" : "shadow",
      "data-color-theme": settings.ColorTheme,
      className: mainWrapperClasses,
      children
    }
  );
}
export {
  DefaultLayout as default
};
