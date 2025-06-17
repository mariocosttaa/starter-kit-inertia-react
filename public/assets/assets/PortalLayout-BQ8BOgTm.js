import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import PortalNavbar from "./PortalNavbar-DOgq6HvS.js";
import PortalFooter from "./PortalFooter-DBhnE7VI.js";
import TittleAndBreadcrumb from "./TittleAndBreadcrumb-B04ioebb.js";
import { u as useFrontend, $ as $e } from "../ssr.js";
import { useTranslation } from "react-i18next";
import { u as useCssManager } from "./useCssManager-D1xujsTe.js";
import LoadingOverlay from "./LoadingOverlay-DZnlEpZi.js";
import useDarkMode from "./useDarkMode-DW9zJM-O.js";
import "./route-YhFkYWrg.js";
import "./ChangeTheme-Bn5DuTPc.js";
import "@heroicons/react/24/outline";
import "./DropDown-Dw9Zgntk.js";
import "@heroicons/react/24/solid";
import "./LanguageSwitcher-BmM1ZeYM.js";
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
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
function PortalLayout({ pageTittle, activePage, children, tittle, subtitle, breadcrumbs }) {
  const { t: __ } = useTranslation(["static-text"]);
  const { isLoading } = useCssManager("portal");
  const frontend = useFrontend();
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isDarkMode) {
      if (frontend == "portal") {
        document.body.style.backgroundColor = "rgb(21, 25, 26)";
      } else {
        document.body.style.backgroundColor = "";
      }
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isDarkMode]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(LoadingOverlay, { isVisible: isLoading }),
    /* @__PURE__ */ jsx($e, { title: __("Portal") + " - " + pageTittle }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-bg-light to-gray-200 dark:from-dark-bg dark:to-dark-bg-secondary min-h-screen flex flex-col font-sans transition-colors duration-500", children: [
      /* @__PURE__ */ jsx(PortalNavbar, { active: activePage ?? "" }),
      /* @__PURE__ */ jsx("main", { className: "flex-grow px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          TittleAndBreadcrumb,
          {
            title: tittle || "Dashboard",
            subtitle: subtitle || null,
            breadcrumbs
          }
        ),
        children
      ] }) }),
      /* @__PURE__ */ jsx(PortalFooter, {})
    ] })
  ] });
}
export {
  PortalLayout as default
};
