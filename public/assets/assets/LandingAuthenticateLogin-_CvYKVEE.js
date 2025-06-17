import { jsx, jsxs } from "react/jsx-runtime";
import { q, v as ve, $ as $e, Y as Ye } from "../ssr.js";
import LandingPageLayout from "./LandingPageLayout-Cs_JPAnZ.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
import { useState, useEffect } from "react";
import { Input } from "./Input-w5O8D7Jb.js";
import InputError from "./InputError-CTfaneU7.js";
import { Button } from "./Button-BtO3Wh-T.js";
import { u as useRoute } from "./useRoute-2X_YCVgI.js";
import useDeviceDetect from "./useDeviceDetect-BMZuEs7G.js";
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
import "./route-YhFkYWrg.js";
import "./CurrencySwitcher-Difcr0O7.js";
import "./useCurrency-CWqNCApD.js";
import "./LandingFooter-D-xnuXAk.js";
import "./LandingTittleSection-B-EtpfVD.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
function LandingAuthenticateLogin({ status, canResetPassword, planSlug, subscriptionPeriod }) {
  const { t: __ } = useTranslation(["static-text"]);
  const { isMobile, isTablet, isDesktop, isDesktopOrTablet, isMobileOrTablet } = useDeviceDetect();
  const { locale } = q().props;
  const { data, setData, post, errors } = ve({
    email: "",
    password: "",
    remember: true
  });
  const route = useRoute();
  const [loginPost, setLoginPost] = useState("");
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#49beff1a";
    }
    setLoginPost(route("public-login", {
      redirect: route("landing-subscribe", {
        plan: planSlug,
        period: subscriptionPeriod
      })
    }));
  }, [planSlug, subscriptionPeriod, route]);
  const submit = (e) => {
    e.preventDefault();
    if (loginPost) {
      post(loginPost, {
        onError: () => {
          setData("password", "");
        }
      });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg p-8", children: /* @__PURE__ */ jsxs(LandingPageLayout, { onlystyles: true, children: [
    /* @__PURE__ */ jsx($e, { title: __("Login") }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Ye, { className: "p-4", href: route("landing-home"), children: /* @__PURE__ */ jsx("img", { alt: "img-fluid", src: "/assets/images/logo-light.png", width: 170 }) }),
    /* @__PURE__ */ jsxs("div", { style: { ...isDesktop ? { marginTop: "-5rem" } : {} }, className: isDesktop ? "custom-container p-12 mb-0" : isTablet ? "custom-container mb-0" : "custom-container mb-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mt-4 mb-5 justify-content-between", children: [
        /* @__PURE__ */ jsxs(Ye, { href: route("landing-pricing"), className: "text-decoration-none text-body-secondary", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
          /* @__PURE__ */ jsx("span", { className: "ms-2", children: __("Back") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: isDesktop ? "w-40 mx-auto align-items-center justify-content-center" : "w-100", style: { ...isDesktop ? { marginTop: "-3rem" } : {} }, children: /* @__PURE__ */ jsx("div", { className: "card border-0 rounded-4 bg-white shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "card-body", children: /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-1 fs-7 fw-bolder", children: __("Login") }),
        /* @__PURE__ */ jsx("p", { className: "mb-7", children: "CentralVAM" }),
        /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12 mb-2 mb-sm-0", children: /* @__PURE__ */ jsxs("a", { className: "btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8", href: "javascript:void(0)", role: "button", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/google-icon.svg", alt: "flexy-img", className: "img-fluid me-2", width: 18, height: 18 }),
          /* @__PURE__ */ jsxs("span", { className: "flex-shrink-0", children: [
            __("Sign In with"),
            " Google"
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "position-relative text-center my-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-0 fs-4 px-3 d-inline-block bg-body text-dark z-index-5 position-relative", children: [
            __("or"),
            " ",
            __("Sign In with")
          ] }),
          /* @__PURE__ */ jsx("span", { className: "border-top w-100 position-absolute top-50 start-50 translate-middle" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, autoComplete: "off", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "exampleInputEmail1", className: "form-label", children: __("Email Address") }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "email",
                type: "email",
                required: true,
                autoFocus: true,
                tabIndex: 1,
                autoComplete: "email",
                value: data.email,
                onChange: (e) => setData("email", e.target.value),
                placeholder: __("Email Address")
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "exampleInputPassword1", className: "form-label", children: __("Password") }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password",
                type: "password",
                name: "password",
                placeholder: __("Password"),
                autoComplete: "current-password",
                value: data.password,
                autoFocus: true,
                onChange: (e) => setData("password", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "form-check", children: [
              /* @__PURE__ */ jsx("input", { className: "form-check-input primary", type: "checkbox", defaultChecked: data.remember, id: "flexCheckChecked", onChange: (e) => setData("remember", e.target.checked) }),
              /* @__PURE__ */ jsx("label", { className: "form-check-label text-dark fs-3", htmlFor: "flexCheckChecked", children: __("Remember this Device") })
            ] }),
            /* @__PURE__ */ jsxs(Ye, { className: "text-primary fw-medium fs-3", href: "forgot-password", children: [
              __("Forgot Password"),
              " ?"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "btn btn-primary w-100 py-8 mb-4 rounded-2", children: __("Sign In") }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ jsxs("p", { className: "fs-4 mb-0 fw-medium", children: [
              __("Not Have Account"),
              "?"
            ] }),
            /* @__PURE__ */ jsx(Ye, { className: "text-primary fw-medium ms-2", href: route("landing-authenticate-register", { plan: planSlug, period: subscriptionPeriod }), children: __("Create an account") })
          ] })
        ] })
      ] }) }) }) })
    ] })
  ] }) });
}
export {
  LandingAuthenticateLogin as default
};
