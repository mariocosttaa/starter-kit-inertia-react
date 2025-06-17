import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { q, $ as $e, Y as Ye } from "../ssr.js";
import LandingPageLayout from "./LandingPageLayout-Cs_JPAnZ.js";
import AOS from "aos";
import { useEffect } from "react";
import { r as route } from "./route-YhFkYWrg.js";
import { useTranslation } from "react-i18next";
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
import "./useCssManager-D1xujsTe.js";
import "./LandingNavbar-AH_i4HqG.js";
import "./LanguageSwitcher-CVv6azVH.js";
import "./CurrencySwitcher-Difcr0O7.js";
import "./useCurrency-CWqNCApD.js";
import "./LandingFooter-D-xnuXAk.js";
import "./LandingTittleSection-B-EtpfVD.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
function LandingHome() {
  const { auth } = q().props;
  const { t: __ } = useTranslation(["static-text"]);
  useEffect(() => {
    AOS.init({
      duration: 1e3,
      once: true
    });
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(LandingPageLayout, { children: [
    /* @__PURE__ */ jsx($e, { title: "AVG - For Business" }),
    /* @__PURE__ */ jsx("section", { className: "hero-section position-relative overflow-hidden mb-0 mb-lg-5", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row align-items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "col-xl-6", children: /* @__PURE__ */ jsxs("div", { className: "hero-content my-5 my-xl-0", children: [
        /* @__PURE__ */ jsxs("h6", { className: "d-flex align-items-center gap-2 fs-4 fw-semibold mb-3", "data-aos": "fade-up", "data-aos-delay": 200, "data-aos-duration": 1e3, children: [
          /* @__PURE__ */ jsx("i", { className: "ti ti-rocket text-secondary fs-6" }),
          __("Boost Your Virtual Pilots Experience")
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "fw-bolder mb-7 fs-13", "data-aos": "fade-up", "data-aos-delay": 400, "data-aos-duration": 1e3, children: [
          __("Most powerful System to"),
          /* @__PURE__ */ jsxs("span", { className: "text-primary", children: [
            " ",
            __("Manage your Virtual Airline")
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "fs-5 mb-5 text-dark fw-normal", "data-aos": "fade-up", "data-aos-delay": 600, "data-aos-duration": 1e3, children: __("AVG is a cutting-edge system that allows you to efficiently manage your virtual airline, featuring a modern design and a wide range of tools to help you succeed.") }),
        /* @__PURE__ */ jsxs("div", { className: "d-sm-flex align-items-center gap-3", "data-aos": "fade-up", "data-aos-delay": 800, "data-aos-duration": 1e3, children: [
          /* @__PURE__ */ jsx(Ye, { className: "btn btn-primary px-5 py-6 btn-hover-shadow d-block mb-3 mb-sm-0", href: route("landing-pricing"), children: __("Try Now") }),
          /* @__PURE__ */ jsx(Ye, { className: "btn btn-outline-primary d-block scroll-link px-7 py-6", href: route("public-home"), children: __("Virtual Airlines") })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-xl-6 d-none d-xl-block", children: /* @__PURE__ */ jsx("div", { className: "hero-img-slide position-relative bg-primary-subtle p-4 rounded", children: /* @__PURE__ */ jsxs("div", { className: "d-flex flex-row", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "banner-img-1 slideup", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/bannerimg1.svg", alt: "modernize-img", className: "img-fluid" }) }),
          /* @__PURE__ */ jsx("div", { className: "banner-img-1 slideup", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/bannerimg1.svg", alt: "modernize-img", className: "img-fluid" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "banner-img-2 slideDown", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/bannerimg2.svg", alt: "modernize-img", className: "img-fluid" }) }),
          /* @__PURE__ */ jsx("div", { className: "banner-img-2 slideDown", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/bannerimg2.svg", alt: "modernize-img", className: "img-fluid" }) })
        ] })
      ] }) }) })
    ] }) }) })
  ] }) });
}
export {
  LandingHome as default
};
