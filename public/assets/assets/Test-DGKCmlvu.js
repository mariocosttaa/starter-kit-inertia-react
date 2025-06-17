import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import useDarkMode from "./useDarkMode-DW9zJM-O.js";
import PortalLayout from "./PortalLayout-BQ8BOgTm.js";
import Row from "./Row-CpYE0W9h.js";
import Card from "./Card-DCFzm0x5.js";
import Button from "./Button-BYx2FSd4.js";
import P from "./P--Khfw00L.js";
import "js-cookie";
import "./PortalNavbar-DOgq6HvS.js";
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
import "./route-YhFkYWrg.js";
import "./ChangeTheme-Bn5DuTPc.js";
import "@heroicons/react/24/outline";
import "./DropDown-Dw9Zgntk.js";
import "@heroicons/react/24/solid";
import "./LanguageSwitcher-BmM1ZeYM.js";
import "./PortalFooter-DBhnE7VI.js";
import "./TittleAndBreadcrumb-B04ioebb.js";
import "./useCssManager-D1xujsTe.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDeviceDetect-BMZuEs7G.js";
const Test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, toggleTheme] = useDarkMode();
  return /* @__PURE__ */ jsx(
    PortalLayout,
    {
      tittle: "Test Page",
      subtitle: "This is a test page for the VA Dashboard",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Test", href: "/test" }
      ],
      children: /* @__PURE__ */ jsxs(Row, { quantity: 3, children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "SkyHigh Airlines" }),
          /* @__PURE__ */ jsx(P, { className: "mt-1 text-xs", children: "Membro desde: Jan 2023" }),
          /* @__PURE__ */ jsx(P, { className: "text-xs", children: "Horas de voo: 320h" }),
          /* @__PURE__ */ jsx(Button, { type: "primary", size: "md", className: "w-full mt-3", children: "Detalhes" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Global Wings" }),
          /* @__PURE__ */ jsx(P, { className: "mt-1 text-xs", children: "Membro desde: Jan 2023" }),
          /* @__PURE__ */ jsx(P, { className: "text-xs", children: "Horas de voo: 320h" }),
          /* @__PURE__ */ jsx(Button, { type: "primary", size: "md", className: "w-full mt-3", children: "Detalhes" })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "bg-white dark:bg-dark-card bg-opacity-95 dark:bg-opacity-85 rounded-xl p-4 shadow-soft dark:shadow-soft-dark hover:animate-hover-lift transition-all duration-300 flex items-center justify-center animate-scale-in", children: /* @__PURE__ */ jsxs(Button, { className: "dark:bg-dark-card flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent-dark", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 4v16m8-8H4" }) }),
          /* @__PURE__ */ jsx("span", { className: "mt-1 text-sm font-medium", children: "Nova Companhia" })
        ] }) })
      ] })
    }
  );
};
export {
  Test as default
};
