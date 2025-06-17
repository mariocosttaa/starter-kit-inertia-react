import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import DefaultLayout from "./DefaultLayout-CskabVQs.js";
import { q, v as ve, $ as $e, Y as Ye } from "../ssr.js";
import { Input } from "./Input-BZxr3GwB.js";
import InputError from "./InputError-Db5CZtVp.js";
import { Button } from "./Button-DJ5lx1RR.js";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
import { r as route } from "./route-YhFkYWrg.js";
import "react";
import "./TemplateSettings-egI0i6DB.js";
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
import "@radix-ui/react-slot";
import "class-variance-authority";
function Login({ status, canResetPassword }) {
  const { locale } = q().props;
  const { t: __ } = useTranslation(["static-text"]);
  const { data, setData, post, errors, reset } = ve({
    email: "",
    password: "",
    remember: false
  });
  let loginPost = route("public-login");
  const submit = (e) => {
    e.preventDefault();
    post(loginPost, {
      onFinish: () => {
        reset("password");
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(DefaultLayout, { children: [
    /* @__PURE__ */ jsx($e, { title: "Login" }),
    /* @__PURE__ */ jsx("div", { id: "main-wrapper", className: "auth-customizer-none", children: /* @__PURE__ */ jsx("div", { className: "position-relative overflow-hidden radial-gradient min-vh-100 w-100", children: /* @__PURE__ */ jsx("div", { className: "position-relative z-index-5", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-xl-7 col-xxl-8", children: [
        /* @__PURE__ */ jsxs("a", { href: "../main/index.html", className: "text-nowrap logo-img d-block px-4 py-9 w-100", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/dark-logo.svg", className: "dark-logo", alt: "Logo-Dark" }),
          /* @__PURE__ */ jsx("img", { src: "/assets/images/light-logo.svg", className: "light-logo", alt: "Logo-light" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "d-none d-xl-flex align-items-center justify-content-center h-n80", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/backgrounds/login-security.svg", alt: "flexy-img", className: "img-fluid", width: 500 }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-xl-5 col-xxl-4", children: /* @__PURE__ */ jsxs("div", { className: "authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-5", children: [
          /* @__PURE__ */ jsxs(Ye, { href: route("public-home"), className: "d-flex align-items-center", children: [
            /* @__PURE__ */ jsx("i", { className: "ti ti-arrow-left fs-5 me-2" }),
            /* @__PURE__ */ jsx("span", { className: "d-none d-sm-inline", children: __("Back to Website") })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "p-0 py-2 ms-auto", children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "auth-max-width col-sm-8 col-md-6 col-xl-7 px-4", children: [
          /* @__PURE__ */ jsxs("h2", { className: "mb-1 fs-7 fw-bolder", children: [
            __("Welcome To"),
            " Central Virtual Airline Management"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-7", children: __("Virtual Airline Pilot Hub") }),
          /* @__PURE__ */ jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsx("div", { className: "col-6 mb-2 mb-sm-0", children: /* @__PURE__ */ jsxs("a", { className: "btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8", href: "javascript:void(0)", role: "button", children: [
              /* @__PURE__ */ jsx("img", { src: "/assets/images/google-icon.svg", alt: "flexy-img", className: "img-fluid me-2", width: 18, height: 18 }),
              /* @__PURE__ */ jsxs("span", { className: "flex-shrink-0", children: [
                __("Sign In with"),
                " Google"
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("a", { className: "btn text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8", href: "javascript:void(0)", role: "button", children: [
              /* @__PURE__ */ jsx("img", { src: "/assets/images/facebook-icon.svg", alt: "flexy-img", className: "img-fluid me-2", width: 18, height: 18 }),
              /* @__PURE__ */ jsxs("span", { className: "flex-shrink-0", children: [
                __("Sign In with"),
                " Facebook"
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "position-relative text-center my-4", children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-0 fs-4 px-3 d-inline-block bg-body text-dark z-index-5 position-relative", children: [
              __("or"),
              " ",
              __("Sign In with").toLowerCase()
            ] }),
            /* @__PURE__ */ jsx("span", { className: "border-top w-100 position-absolute top-50 start-50 translate-middle" })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
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
                /* @__PURE__ */ jsx("input", { className: "form-check-input primary", type: "checkbox", defaultValue: "true", id: "flexCheckChecked", defaultChecked: true }),
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
              /* @__PURE__ */ jsx(Ye, { className: "text-primary fw-medium ms-2", href: "register", children: __("Create an account") })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "dark-transparent sidebartoggler" })
  ] }) });
}
export {
  Login as default
};
