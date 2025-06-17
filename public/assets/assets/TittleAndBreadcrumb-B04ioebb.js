import { jsxs, jsx } from "react/jsx-runtime";
import { Y as Ye } from "../ssr.js";
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
import "react-i18next";
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
function TittleAndBreadcrumb({ title, subtitle, breadcrumbs }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h6", { className: "animate-fade-in mb-1 text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white", children: title }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "animate-fade-in mb-2 text-center text-sm text-gray-500 dark:text-gray-400", children: subtitle }),
    /* @__PURE__ */ jsx("nav", { className: "mb-6 flex", "aria-label": "Breadcrumb", children: breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsxs("ol", { className: "flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400", children: [
      breadcrumbs.map((breadcrumb, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Ye, { href: breadcrumb.href, className: "hover:text-primary dark:hover:text-accent-dark transition-colors duration-200", children: breadcrumb.label }),
        index < breadcrumbs.length - 1 && /* @__PURE__ */ jsx("svg", { className: "h-4 w-4 mx-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) })
      ] }, index)),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "cursor-pointer animate-fade-in font-medium text-gray-700 dark:text-gray-200", children: title }) })
    ] }) })
  ] });
}
export {
  TittleAndBreadcrumb as default
};
