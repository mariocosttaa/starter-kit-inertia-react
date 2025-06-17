import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import PortalLayout from "./PortalLayout-BQ8BOgTm.js";
import Card from "./Card-DCFzm0x5.js";
import PortalProfileSidebar from "./PortalProfileSidebar-QYfD6VVc.js";
import { r as route } from "./route-YhFkYWrg.js";
import Div from "./Div-aCINAKI_.js";
import "react";
import "./PortalNavbar-DOgq6HvS.js";
import "./useDarkMode-DW9zJM-O.js";
import "js-cookie";
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
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "./ChangeTheme-Bn5DuTPc.js";
import "@heroicons/react/24/outline";
import "./DropDown-Dw9Zgntk.js";
import "@heroicons/react/24/solid";
import "./LanguageSwitcher-BmM1ZeYM.js";
import "./PortalFooter-DBhnE7VI.js";
import "./TittleAndBreadcrumb-B04ioebb.js";
import "./useCssManager-D1xujsTe.js";
import "./LoadingOverlay-DZnlEpZi.js";
function PortalProfileConnectAccounts() {
  const { t: __ } = useTranslation(["static-text"]);
  return /* @__PURE__ */ jsx(
    PortalLayout,
    {
      pageTittle: __("Connected Accounts"),
      activePage: "profile",
      tittle: __("Connected Accounts"),
      subtitle: __("Adjust Your Profile Preferences"),
      breadcrumbs: [
        { label: "Website", href: route("public-home") },
        { label: __("Profile"), href: route("portal-profile") }
      ],
      children: /* @__PURE__ */ jsx(Div, { className: "max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Div, { className: "flex flex-col md:flex-row gap-8", children: [
        /* @__PURE__ */ jsx(Div, { className: "w-full md:w-64 lg:w-72 flex-shrink-0", children: /* @__PURE__ */ jsx(
          PortalProfileSidebar,
          {
            activeSection: "connect"
          }
        ) }),
        /* @__PURE__ */ jsx(Div, { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs(Div, { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🔗" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: __("Connect Accounts") })
          ] }),
          /* @__PURE__ */ jsxs(Div, { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200",
                type: "button",
                children: [
                  /* @__PURE__ */ jsx(Div, { className: "w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/google.svg", alt: "Google", className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700 dark:text-gray-200", children: __("Connect Google") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200",
                type: "button",
                children: [
                  /* @__PURE__ */ jsx(Div, { className: "w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-200", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/vatsim.svg", alt: "VATSIM", className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700 dark:text-gray-200", children: __("Connect VATSIM") })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200",
                type: "button",
                children: [
                  /* @__PURE__ */ jsx(Div, { className: "w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-200", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/ivao.svg", alt: "IVAO", className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700 dark:text-gray-200", children: __("Connect IVAO") })
                ]
              }
            )
          ] })
        ] }) })
      ] }) })
    }
  );
}
export {
  PortalProfileConnectAccounts as default
};
