import { jsxs, jsx } from "react/jsx-runtime";
import PortalLayout from "./PortalLayout-BQ8BOgTm.js";
import Row from "./Row-CpYE0W9h.js";
import Card from "./Card-DCFzm0x5.js";
import P from "./P--Khfw00L.js";
import Button from "./Button-BYx2FSd4.js";
import { useTranslation } from "react-i18next";
import { Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
import "react";
import "./PortalNavbar-DOgq6HvS.js";
import "./useDarkMode-DW9zJM-O.js";
import "js-cookie";
import "./ChangeTheme-Bn5DuTPc.js";
import "@heroicons/react/24/outline";
import "./DropDown-Dw9Zgntk.js";
import "@heroicons/react/24/solid";
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
import "./LanguageSwitcher-BmM1ZeYM.js";
import "./PortalFooter-DBhnE7VI.js";
import "./TittleAndBreadcrumb-B04ioebb.js";
import "./useCssManager-D1xujsTe.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDeviceDetect-BMZuEs7G.js";
function PortalVirtualAirlines({ virtualAirlines }) {
  const { t: __ } = useTranslation(["static-text"]);
  console.log(JSON.stringify(virtualAirlines));
  return /* @__PURE__ */ jsxs(
    PortalLayout,
    {
      pageTittle: __("Virtual Airlines"),
      activePage: "virtual-airlines",
      tittle: __("My Virtual Airlines"),
      subtitle: __("List of virtual airlines you are a member of"),
      breadcrumbs: [
        { label: __("Website"), href: "/" }
      ],
      children: [
        (!virtualAirlines || virtualAirlines.length === 0) && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs(Card, { classNameAdd: "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 text-sm rounded flex items-center", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 mr-2 text-yellow-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" }) }),
          /* @__PURE__ */ jsxs("span", { children: [
            __("You are not a member of any virtual airline yet"),
            "."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs(Row, { quantity: 3, children: [
          virtualAirlines && virtualAirlines.map((userTenancy) => /* @__PURE__ */ jsxs(Card, { classNameAdd: "cursor-pointer", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: userTenancy.tenancy.name }),
            /* @__PURE__ */ jsxs(P, { className: "mt-1 text-xs", children: [
              " ",
              __("Online Pilots"),
              ": --"
            ] }),
            /* @__PURE__ */ jsxs(P, { className: "text-xs", children: [
              __("Last Flight"),
              ": --"
            ] }),
            /* @__PURE__ */ jsx(Button, { type: "primary", size: "md", className: "w-full mt-3", children: __("Join") })
          ] }, userTenancy.id)),
          /* @__PURE__ */ jsx(Card, { className: "bg-white dark:bg-dark-card bg-opacity-95 dark:bg-opacity-85 rounded-xl p-4 shadow-soft dark:shadow-soft-dark hover:animate-hover-lift transition-all duration-300 flex items-center justify-center animate-scale-in", children: /* @__PURE__ */ jsxs(Ye, { href: route("public-home"), className: "dark:bg-dark-card flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent-dark", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }) }),
            /* @__PURE__ */ jsx("span", { className: "mt-1 text-sm font-medium", children: __("New Company") })
          ] }) })
        ] })
      ]
    }
  );
}
export {
  PortalVirtualAirlines as default
};
