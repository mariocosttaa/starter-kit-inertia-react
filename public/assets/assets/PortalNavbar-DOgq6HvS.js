import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import useDarkMode from "./useDarkMode-DW9zJM-O.js";
import { q, Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
import ChangeTheme from "./ChangeTheme-Bn5DuTPc.js";
import DropDown from "./DropDown-Dw9Zgntk.js";
import LanguageSwitcher from "./LanguageSwitcher-BmM1ZeYM.js";
import { useTranslation } from "react-i18next";
import { UserCircleIcon, ReceiptPercentIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import "js-cookie";
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
import "@heroicons/react/24/solid";
function PortalNavbar({ active }) {
  const { auth } = q().props;
  const { t: __ } = useTranslation(["menu"]);
  const [isDarkMode, toggleTheme] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menus = [
    {
      label: __("Virtual Airlines"),
      link: route("portal-virtual-airlines"),
      active: active === "virtual-airlines"
    }
  ];
  return /* @__PURE__ */ jsx("nav", { className: "backdrop-blur-lg sticky top-0 z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-14", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(Ye, { className: "text-2xl font-bold text-primary dark:text-accent-dark tracking-tight", href: route("portal-virtual-airlines"), children: /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", width: 170, alt: "img-fluid" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleMenu,
          className: "sm:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-dark transition-all duration-200",
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center space-x-4", children: [
        menus.map((menu, index) => /* @__PURE__ */ jsx(
          Ye,
          {
            href: menu.link,
            className: `text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent-dark px-2 py-1 rounded-lg transition-colors duration-200 border-b-2 ${menu.active ? "font-bold text-primary dark:text-primary h-8 flex items-center border-primary dark:border-accent-dark" : "text-gray-600 dark:text-gray-300 border-transparent"}`,
            children: menu.label
          },
          index
        )),
        /* @__PURE__ */ jsx(ChangeTheme, {}),
        /* @__PURE__ */ jsx(LanguageSwitcher, {}),
        /* @__PURE__ */ jsx(
          DropDown,
          {
            activeValue: auth.user.name,
            options: [
              { value: "profile", label: __("Profile"), icon: /* @__PURE__ */ jsx(UserCircleIcon, { className: "h-5 w-5" }), link: { url: route("portal-profile"), spa: true } },
              { value: "invoice", label: __("Invoices"), icon: /* @__PURE__ */ jsx(ReceiptPercentIcon, { className: "h-5 w-5" }), link: { url: route("portal-invoices"), spa: true } },
              { value: "settings", label: __("Settings"), icon: /* @__PURE__ */ jsx(Cog6ToothIcon, { className: "h-5 w-5" }), link: { url: route("portal-settings"), spa: true } },
              { value: "logout", label: __("Logout"), icon: /* @__PURE__ */ jsx(ArrowRightOnRectangleIcon, { className: "h-5 w-5" }), link: { url: route("logout"), method: "post", spa: true } }
            ]
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: "sm:hidden backdrop-blur-lg dark:bg-glass-dark shadow-lg rounded-b-xl px-4 py-4 animate-fade-in", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-4", children: [
      menus.map((menu, index) => /* @__PURE__ */ jsx(
        Ye,
        {
          href: menu.link,
          className: `text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent-dark px-2 py-1 rounded-lg transition-colors duration-200 ${menu.active ? "bg-primary dark:bg-accent-dark text-white" : ""}`,
          children: menu.label
        },
        index
      )),
      /* @__PURE__ */ jsx(LanguageSwitcher, {}),
      /* @__PURE__ */ jsx(ChangeTheme, {})
    ] }) })
  ] }) });
}
export {
  PortalNavbar as default
};
