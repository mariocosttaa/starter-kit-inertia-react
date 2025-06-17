import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import Card from "./Card-DCFzm0x5.js";
import { Y as Ye } from "../ssr.js";
import { r as route } from "./route-YhFkYWrg.js";
import "es-toolkit";
import "qs";
import "axios";
import "react";
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
function PortalProfileSidebar({ activeSection }) {
  const { t: __ } = useTranslation(["static-text"]);
  const menus = [
    { key: "details", label: "Edit Your Details", icon: "👤", href: route("portal-profile-update-details") },
    { key: "password", label: "Change Password", icon: "🔒", href: route("portal-profile-update-password") },
    { key: "network", label: "Networks", icon: "🌐", href: route("portal-profile-update-networks") },
    { key: "connect", label: "Connect Accounts", icon: "🔗", href: route("portal-profile-connect-accounts") }
  ];
  return /* @__PURE__ */ jsx("aside", { className: "md:col-span-3 lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "sticky top-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-4 h-full", animate: false, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-2", children: __("Profile Settings") }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: __("Manage your account settings and preferences") })
    ] }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: menus.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Ye,
      {
        href: item.href,
        className: `w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3
                                            ${activeSection === item.key ? "bg-primary text-white shadow-md" : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"}`,
        type: "button",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: item.icon }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: __(item.label) })
        ]
      }
    ) }, item.key)) }) })
  ] }) }) });
}
export {
  PortalProfileSidebar as default
};
