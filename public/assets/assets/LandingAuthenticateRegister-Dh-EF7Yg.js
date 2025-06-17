import { jsx, jsxs } from "react/jsx-runtime";
import { q, v as ve, $ as $e, Y as Ye } from "../ssr.js";
import LandingPageLayout from "./LandingPageLayout-Cs_JPAnZ.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
import RequiredAsteristic from "./RequiredAsteristic-Cm1U2gpX.js";
import { useState, useEffect } from "react";
import { Input } from "./Input-w5O8D7Jb.js";
import InputError from "./InputError-CTfaneU7.js";
import { Button } from "./Button-BtO3Wh-T.js";
import { u as useRoute } from "./useRoute-2X_YCVgI.js";
import useDeviceDetect from "./useDeviceDetect-BMZuEs7G.js";
import Select from "./Select-V4bBbPbC.js";
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
import "react-select";
function LandingAuthenticateRegister({ countries, planSlug, subscriptionPeriod }) {
  const { auth, locale, default_currency, default_currency_id } = q().props;
  const { t: __ } = useTranslation(["static-text"]);
  const { isMobile, isTablet, isDesktop, isDesktopOrTablet, isMobileOrTablet } = useDeviceDetect();
  const defaultCountry = countries.find((country) => country.code === locale.toUpperCase());
  const { data, setData, post, errors, setError, clearErrors, reset } = ve({
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
    country_id: (defaultCountry == null ? void 0 : defaultCountry.id) ?? ""
  });
  const route = useRoute();
  const [registerPost, setRegisterPost] = useState("");
  useEffect(() => {
    setRegisterPost(route("landing-authenticate-register", {
      redirect: route("landing-subscribe", {
        plan: planSlug,
        period: subscriptionPeriod
      })
    }));
  }, [planSlug, subscriptionPeriod, route]);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#49beff1a";
      document.body.style.backgroundImage = "url(/assets/images/background/landing-auth-bg.svg)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundSize = "cover";
    }
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (data.password !== data.password_confirmation) {
      setError("password_confirmation", __("Passwords do not match"));
      return;
    }
    clearErrors("password_confirmation");
    post(registerPost, {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "bg p-8", children: /* @__PURE__ */ jsxs(LandingPageLayout, { onlystyles: true, children: [
    /* @__PURE__ */ jsx($e, { title: __("Register") }),
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
      /* @__PURE__ */ jsx("div", { className: isDesktop ? "w-50 mx-auto align-items-center justify-content-center" : "w-100", style: { ...isDesktop ? { marginTop: "-3rem" } : {} }, children: /* @__PURE__ */ jsx("div", { className: "card border-0 rounded-4 bg-white shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "card-body", children: /* @__PURE__ */ jsxs("div", { className: "px-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-1 fs-7 fw-bolder", children: __("Register") }),
        /* @__PURE__ */ jsx("p", { className: "mb-7", children: "CentralVAM" }),
        /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12 mb-2 mb-sm-0", children: /* @__PURE__ */ jsxs("a", { className: "btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8", href: "javascript:void(0)", role: "button", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/google-icon.svg", alt: "flexy-img", className: "img-fluid me-2", width: 18, height: 18 }),
          /* @__PURE__ */ jsxs("span", { className: "flex-shrink-0", children: [
            __("Sign Up with"),
            " Google"
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "position-relative text-center my-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-0 fs-4 px-3 d-inline-block bg-body text-dark z-index-5 position-relative", children: [
            __("or"),
            " ",
            __("Sign Up with")
          ] }),
          /* @__PURE__ */ jsx("span", { className: "border-top w-100 position-absolute top-50 start-50 translate-middle" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "exampleInputEmail1", className: "form-label", children: [
              __("Name"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "name",
                  type: "name",
                  required: true,
                  autoFocus: true,
                  tabIndex: 1,
                  autoComplete: "name",
                  value: data.name,
                  onChange: (e) => {
                    setData("name", e.target.value);
                    clearErrors("name");
                  },
                  placeholder: __("Name")
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "surname",
                  type: "surname",
                  autoFocus: true,
                  tabIndex: 1,
                  autoComplete: "name",
                  value: data.surname,
                  onChange: (e) => {
                    setData("surname", e.target.value);
                    clearErrors("surname");
                  },
                  placeholder: __("Surname")
                }
              )
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.name }),
            /* @__PURE__ */ jsx(InputError, { message: errors.surname })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "exampleInputEmail1", className: "form-label", children: [
              __("Country"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
            /* @__PURE__ */ jsx(
              Select,
              {
                required: true,
                options: countries.map((country) => ({
                  value: country.id,
                  label: `${country.name}`
                })),
                defaultValue: defaultCountry ? {
                  value: defaultCountry.id,
                  label: `${defaultCountry.name}`
                } : null,
                onChange: (e) => {
                  setData("country_id", e.value);
                  clearErrors("country_id");
                },
                className: "w-100"
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.country_id })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "exampleInputEmail1", className: "form-label", children: [
              __("Email Address"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
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
                onChange: (e) => {
                  setData("email", e.target.value);
                  clearErrors("email");
                },
                placeholder: __("Email Address")
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "exampleInputPassword1", className: "form-label", children: [
              __("Password"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
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
                onChange: (e) => {
                  setData("password", e.target.value);
                  clearErrors("password");
                }
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "exampleInputPassword1", className: "form-label", children: [
              __("Confirm Password"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "password_confirmation",
                type: "password",
                name: "password_confirmation",
                placeholder: __("Confirm Password"),
                autoComplete: "current-password",
                value: data.password_confirmation,
                autoFocus: true,
                onChange: (e) => {
                  setData("password_confirmation", e.target.value);
                  clearErrors("password_confirmation");
                }
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "btn btn-primary w-100 py-8 mb-4 rounded-2", onClick: submit, children: __("Register") }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ jsxs("p", { className: "fs-4 mb-0 fw-medium", children: [
              __("You Have Account"),
              "?"
            ] }),
            /* @__PURE__ */ jsx(Ye, { className: "text-primary fw-medium ms-2", href: route("landing-authenticate-login", { plan: planSlug, period: subscriptionPeriod }), children: __("Login") })
          ] })
        ] })
      ] }) }) }) })
    ] })
  ] }) });
}
export {
  LandingAuthenticateRegister as default
};
