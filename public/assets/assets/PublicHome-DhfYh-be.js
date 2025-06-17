import { jsxs, jsx } from "react/jsx-runtime";
import { q, $ as $e } from "../ssr.js";
import PublicPageLayout from "./PublicPageLayout-DEz7MXDA.js";
import { useTranslation } from "react-i18next";
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
import "./useCssManager-D1xujsTe.js";
import "./PublicNavbar-8lfJSopR.js";
import "./route-YhFkYWrg.js";
import "./LanguageSwitcher-CVv6azVH.js";
import "./PublicFooter-Cs7C5yJb.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
function PublicHome() {
  const { t: __ } = useTranslation(["static-text"]);
  const { auth } = q().props;
  if (auth.user) {
    auth.user.name + " " + auth.user.surname;
  } else {
    __("Guest");
  }
  return /* @__PURE__ */ jsxs(
    PublicPageLayout,
    {
      bodyHeaderSubtittle: __("You Are Welcome"),
      bodyHeaderTittle: __("Check and Explore all Airlines"),
      children: [
        /* @__PURE__ */ jsx($e, { title: `AVS - ${__("Airlines")}` }),
        /* @__PURE__ */ jsx("section", { className: "pt-md-14 pb-md-5 pt-1 pb-4", "data-ssr-marker": "true", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-sm-flex align-items-center justify-content-between mb-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-sm-0 fw-semibold d-flex align-items-center mb-3", children: [
              __("Total Airlines"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "badge text-bg-secondary fs-2 rounded-4 ms-2 px-2 py-1", children: "120" })
            ] }),
            /* @__PURE__ */ jsxs("form", { className: "position-relative", children: [
              /* @__PURE__ */ jsx("input", { type: "text", className: "form-control search-chat py-2 ps-5", id: "text-srh", placeholder: "Search Airlines" }),
              /* @__PURE__ */ jsx("i", { className: "ti ti-search position-absolute translate-middle-y text-dark start-0 top-50 ms-3" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4", children: /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("div", { className: "card overflow-hidden h-100", children: /* @__PURE__ */ jsx("div", { className: "card-body p-2", children: /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://flyavagroup.org/All-Images/Website-Images/taag-virtual-logo.png",
                className: "rounded-circle me-2",
                width: 60,
                alt: "taag"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-dark fs-6", children: /* @__PURE__ */ jsx("small", { className: "text-muted d-block", children: "powered by AVAGroup" }) })
          ] }) }) }) }) }) })
        ] }) })
      ]
    }
  );
}
export {
  PublicHome as default
};
