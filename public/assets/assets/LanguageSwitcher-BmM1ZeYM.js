import { jsx, jsxs } from "react/jsx-runtime";
import { q, m as me } from "../ssr.js";
import { useTranslation } from "react-i18next";
import DropDown from "./DropDown-Dw9Zgntk.js";
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
import "@heroicons/react/24/solid";
function LanguageSwitcher({ includeDownIcon = false, className = "" }) {
  var _a;
  const { locale } = q().props;
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split("/");
    pathParts[1] = lng;
    url.pathname = pathParts.join("/");
    i18n.changeLanguage(lng);
    const currentScrollPosition = window.scrollY;
    me.visit(url.toString(), {
      preserveScroll: true,
      onSuccess: () => window.scrollTo(0, currentScrollPosition)
    });
  };
  const languages = [
    { code: "en", name: "English", img: "us" },
    { code: "pt", name: "Português", img: "pt" },
    { code: "es", name: "Spanish", img: "es" },
    { code: "fr", name: "French", img: "fr" }
  ];
  return /* @__PURE__ */ jsx(
    DropDown,
    {
      activeValue: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx("img", { src: `/assets/images/${locale === "en" ? "us" : locale}.svg`, width: 20, alt: `${locale.toUpperCase()} flag`, className: "inline-block mr-2" }),
        (_a = languages.find((lng) => lng.code === locale)) == null ? void 0 : _a.name
      ] }),
      options: languages.map((lng) => ({
        value: lng.code,
        label: lng.name,
        icon: `/assets/images/${lng.img}.svg`
      })),
      onChange: changeLanguage
    }
  );
}
export {
  LanguageSwitcher as default
};
