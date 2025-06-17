import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { defaultSettings } from "./TemplateSettings-egI0i6DB.js";
if (typeof window !== "undefined") {
  import("bootstrap").then(() => {
  });
}
function DefaultLayout({ children }) {
  const [settings, setTemplateSettings] = useState(defaultSettings);
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    const setSidebarType = () => {
      if (window.innerWidth < 1300 && settings.SidebarType === "full") {
        setTemplateSettings((prev) => ({ ...prev, SidebarType: "mini-sidebar" }));
      } else if (window.innerWidth >= 1300 && settings.SidebarType === "mini-sidebar") {
        setTemplateSettings((prev) => ({ ...prev, SidebarType: "full" }));
      }
    };
    setSidebarType();
    window.addEventListener("resize", setSidebarType);
    return () => window.removeEventListener("resize", setSidebarType);
  }, [settings.SidebarType]);
  const mainWrapperClasses = [
    "main-wrapper",
    showSidebar ? "show-sidebar" : "",
    settings.SidebarType === "mini-sidebar" ? "close" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-layout": settings.Layout,
      "data-sidebartype": settings.SidebarType,
      "data-boxed-layout": settings.BoxedLayout ? "boxed" : "full",
      dir: settings.Direction,
      "data-bs-theme": settings.Theme,
      "data-card": settings.cardBorder ? "border" : "shadow",
      "data-color-theme": settings.ColorTheme,
      className: mainWrapperClasses,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `offcanvas ${settings.Direction === "ltr" ? "offcanvas-end" : "offcanvas-start"}`
          }
        ),
        children
      ]
    }
  );
}
export {
  DefaultLayout as default
};
