import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import PortalLayout from "./PortalLayout-BQ8BOgTm.js";
import Card from "./Card-DCFzm0x5.js";
import Label from "./Label-CO2rAZZX.js";
import Input from "./Input-BLYT2enS.js";
import Div from "./Div-aCINAKI_.js";
import PortalProfileSidebar from "./PortalProfileSidebar-QYfD6VVc.js";
import { r as route } from "./route-YhFkYWrg.js";
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
function PortalProfileUpdateNetworks() {
  const { t: __ } = useTranslation(["static-text"]);
  return /* @__PURE__ */ jsx(
    PortalLayout,
    {
      pageTittle: __("Networks"),
      activePage: "profile",
      tittle: __("Networks"),
      subtitle: __("Adjust Your Profile Preferences"),
      breadcrumbs: [
        { label: "Website", href: route("public-home") },
        { label: __("Profile"), href: route("portal-profile") }
      ],
      children: /* @__PURE__ */ jsx(Div, { className: "max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Div, { className: "flex flex-col md:flex-row gap-8", children: [
        /* @__PURE__ */ jsx(Div, { className: "w-full md:w-64 lg:w-72 flex-shrink-0", children: /* @__PURE__ */ jsx(
          PortalProfileSidebar,
          {
            activeSection: "network"
          }
        ) }),
        /* @__PURE__ */ jsx(Div, { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
          /* @__PURE__ */ jsxs(Div, { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl", children: "🌐" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: __("Networks") })
          ] }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(Div, { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs(Div, { children: [
                /* @__PURE__ */ jsx(Label, { children: __("IVAO ID") }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "ivao_id",
                    type: "text",
                    placeholder: __("IVAO ID"),
                    defaultValue: ""
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(Div, { children: [
                /* @__PURE__ */ jsx(Label, { children: __("VATSIM ID") }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "vatsim_id",
                    type: "text",
                    placeholder: __("VATSIM ID"),
                    defaultValue: ""
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(Div, { className: "flex justify-end", children: /* @__PURE__ */ jsx(
              "button",
              {
                className: "bg-primary hover:bg-primary-dark text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                type: "submit",
                children: __("Save Network IDs")
              }
            ) })
          ] })
        ] }) })
      ] }) })
    }
  );
}
export {
  PortalProfileUpdateNetworks as default
};
