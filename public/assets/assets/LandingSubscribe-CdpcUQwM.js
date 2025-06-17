import { jsx, jsxs } from "react/jsx-runtime";
import { q, v as ve, $ as $e, Y as Ye } from "../ssr.js";
import LandingPageLayout from "./LandingPageLayout-Cs_JPAnZ.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useMemo } from "react";
import { r as route } from "./route-YhFkYWrg.js";
import { useCurrency } from "./useCurrency-CWqNCApD.js";
import LanguageSwitcher from "./LanguageSwitcher-CVv6azVH.js";
import Select from "./Select-V4bBbPbC.js";
import RequiredAsteristic from "./RequiredAsteristic-Cm1U2gpX.js";
import { g as getSubscriptionPeriodCookie, s as setSubscriptionPeriodCookie } from "./subscriptionPeriod-qGpfr_U7.js";
import useDeviceDetect from "./useDeviceDetect-BMZuEs7G.js";
import { Input } from "./Input-w5O8D7Jb.js";
import InputError from "./InputError-CTfaneU7.js";
import useLocalTime from "./useLocalTime-Dp6N5xXj.js";
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
import "./CurrencySwitcher-Difcr0O7.js";
import "./LandingFooter-D-xnuXAk.js";
import "./LandingTittleSection-B-EtpfVD.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
import "react-select";
function LandingSubscribe({ user_billings_address, subscription, countries, period, planSlug }) {
  var _a, _b;
  const { auth, locale, default_currency } = q().props;
  const { isMobile, isTablet, isDesktop, isDesktopOrTablet, isMobileOrTablet } = useDeviceDetect();
  const { t: __ } = useTranslation(["static-text"]);
  const defaultCountry = countries.find((country) => country.code === locale.toUpperCase());
  const [createBilling, setCreateBilling] = useState(false);
  const [adressCountry, setAdressCountry] = useState(defaultCountry || null);
  let subscriptionPeriod = getSubscriptionPeriodCookie();
  if (!subscriptionPeriod) {
    subscriptionPeriod = period;
    setSubscriptionPeriodCookie(subscriptionPeriod);
  }
  const { currentCurrencyCode } = useCurrency();
  const { data, setData, post, errors } = ve({
    subscription_slug: subscription.slug,
    billing_address_id: "",
    currency_code: currentCurrencyCode || default_currency,
    period,
    name: auth.user.name,
    surname: auth.user.surname,
    phone_code: null,
    phone: "",
    country_id: "",
    address: "",
    city: "",
    state: "",
    zip_code: ""
  });
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.backgroundColor = "#49beff1a";
    }
    if (createBilling) {
      setData({
        ...data
      });
      setAdressCountry(defaultCountry || null);
    }
    if (user_billings_address.length < 1) {
      setCreateBilling(true);
    }
  }, [createBilling, user_billings_address]);
  const phoneCodeOptions = useMemo(
    () => countries.map((country) => ({
      value: country.calling_code,
      label: `+${country.calling_code} (${country.name})`
    })),
    [countries]
  );
  const countryOptions = useMemo(
    () => countries.map((country) => ({
      value: country.id,
      label: country.name
    })),
    [countries]
  );
  const price = (_a = subscription.prices) == null ? void 0 : _a.find(
    (price2) => price2.currency_code === currentCurrencyCode && price2.period === subscriptionPeriod
  );
  const logoutPage = route("logout", { redirect: route("landing-authenticate-login") });
  const logout = () => {
    post(logoutPage);
  };
  const applyCouponCode = (couponCode) => {
  };
  const BillingCards = ({ user_billings_address: user_billings_address2 }) => {
    return /* @__PURE__ */ jsx("div", { className: "row", children: user_billings_address2.map((address, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "col-xl-10 col-md-12 col-sm-12",
        style: { cursor: "pointer" },
        onClick: () => {
          setData({
            subscription_slug: subscription.slug,
            billing_address_id: address.id,
            currency_code: currentCurrencyCode || default_currency,
            period: subscriptionPeriod,
            name: auth.user.name,
            surname: auth.user.surname,
            phone_code: address.phone_code,
            phone: address.phone,
            country_id: address.country_id,
            address: address.address,
            city: address.city,
            state: address.state,
            zip_code: address.zip_code
          });
          setAdressCountry(address.country);
          console.log(data.phone_code, data.country_id);
        },
        children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsxs("h6", { className: "card-title", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/assets/images/" + address.country.code.toLowerCase() + ".svg",
                width: "20",
                className: "me-2"
              }
            ),
            address.address ?? __("Undefined Address")
          ] }),
          "#",
          index + 1,
          " - ",
          address.country.name,
          /* @__PURE__ */ jsxs("small", { className: "text-muted float-end", children: [
            " ",
            useLocalTime(address.created_at, { format: "date" }),
            " ",
            useLocalTime(address.created_at, { format: "time" })
          ] })
        ] }) })
      },
      address.id
    )) });
  };
  let goPayPage = route("landing-subscribe-save-billing-address-and-go-pay");
  const submit = (e) => {
    e.preventDefault();
    post(goPayPage);
  };
  return /* @__PURE__ */ jsx("div", { className: "b p-8", children: /* @__PURE__ */ jsxs(LandingPageLayout, { onlystyles: true, children: [
    /* @__PURE__ */ jsx($e, { title: __("Checkout") }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(Ye, { className: "p-4", href: route("landing-home"), children: /* @__PURE__ */ jsx("img", { alt: "img-fluid", src: "/assets/images/logo-light.png", width: 170 }) }),
    /* @__PURE__ */ jsxs("div", { style: isDesktopOrTablet ? { marginTop: "-5rem" } : {}, className: `custom-container ${isDesktopOrTablet ? "p-12" : ""} mb-0`, children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mt-4 mb-5 justify-content-between", children: [
        data.billing_address_id !== "" && user_billings_address.length > 0 && !createBilling ? /* @__PURE__ */ jsxs("button", { onClick: () => {
          setData({ ...data, billing_address_id: "" });
          setCreateBilling(false);
        }, style: { cursor: "pointer", border: "none", background: "transparent" }, className: "text-body-secondary", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
          /* @__PURE__ */ jsx("span", { className: "ms-2", children: __("Back") })
        ] }) : /* @__PURE__ */ jsxs(Ye, { href: route("landing-subscribe"), className: "text-decoration-none text-body-secondary", children: [
          /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M19 12H5M12 19l-7-7 7-7" }) }),
          /* @__PURE__ */ jsx("span", { className: "ms-2", children: __("Back") })
        ] }),
        isDesktopOrTablet && /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "col-xl-4 col-md-4 col-sm-4", children: /* @__PURE__ */ jsx("ul", { children: /* @__PURE__ */ jsx(LanguageSwitcher, {}) }) }),
          /* @__PURE__ */ jsxs("div", { className: "col-xl-8 col-md-8 col-sm-8", children: [
            "| ",
            (_b = auth.user) == null ? void 0 : _b.email,
            " ",
            /* @__PURE__ */ jsx("button", { className: "text-primary", style: { cursor: "pointer", border: "none", background: "transparent" }, onClick: logout, children: __("Logout") })
          ] })
        ] }) })
      ] }),
      data.billing_address_id === "" && user_billings_address.length > 0 && !createBilling ? /* @__PURE__ */ jsx(BillingCards, { user_billings_address }) : /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
        /* @__PURE__ */ jsx("div", { className: "col-xl-7 col-md-12 col-sm-12", children: /* @__PURE__ */ jsx("div", { className: "card border-0 rounded-4 bg-white shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center justify-content-center rounded-circle bg-primary text-white", style: { width: "28px", height: "28px" }, children: /* @__PURE__ */ jsx("span", { children: "1" }) }),
            /* @__PURE__ */ jsx("h5", { className: "mb-0 ms-3 fw-bold fs-6", children: __("Billing Address") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("First Name"),
                " ",
                /* @__PURE__ */ jsx(RequiredAsteristic, {})
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  defaultValue: data.name,
                  placeholder: __("First Name"),
                  required: true,
                  onChange: (e) => setData("name", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.name })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("Last Name"),
                " "
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  defaultValue: data.surname ?? "",
                  placeholder: __("Last Name"),
                  onChange: (e) => setData("surname", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.surname })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
              __("Phone Number"),
              " "
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ jsx(
                Select,
                {
                  options: [{ value: "", label: __("Selecionar") }, ...phoneCodeOptions],
                  className: "w-25",
                  onChange: (e) => setData("phone_code", parseInt(e.value))
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  defaultValue: data.phone || "",
                  placeholder: __("Phone Number"),
                  onChange: (e) => setData("phone", e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsx(InputError, { message: errors.phone_code }),
            /* @__PURE__ */ jsx(InputError, { message: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
              __("Country of Residence"),
              " ",
              /* @__PURE__ */ jsx(RequiredAsteristic, {})
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "dropdown", children: [
              /* @__PURE__ */ jsx(
                Select,
                {
                  options: countryOptions,
                  required: true,
                  onChange: (e) => {
                    setData("country_id", e.value);
                    const selectedCountry = countries.find((country) => country.id === e.value);
                    setAdressCountry(selectedCountry || null);
                  }
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.country_id })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("Address"),
                " ",
                /* @__PURE__ */ jsx(RequiredAsteristic, {})
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  required: true,
                  type: "text",
                  name: "address",
                  placeholder: __("Address"),
                  defaultValue: data.address || "",
                  onChange: (e) => setData("address", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.address })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("City"),
                " "
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "city",
                  placeholder: __("City"),
                  defaultValue: data.city || "",
                  onChange: (e) => setData("city", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.city })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("State/Province"),
                " "
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "state",
                  placeholder: __("State/Province"),
                  defaultValue: data.state || "",
                  onChange: (e) => setData("state", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.state })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "col-md-6", children: [
              /* @__PURE__ */ jsxs("label", { className: "form-label fs-5", children: [
                __("Postal Code"),
                " "
              ] }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  type: "text",
                  name: "zip_code",
                  placeholder: __("Postal Code"),
                  defaultValue: data.zip_code || "",
                  onChange: (e) => setData("zip_code", e.target.value)
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.zip_code })
            ] })
          ] }) }),
          isDesktop ? /* @__PURE__ */ jsx("button", { onClick: submit, type: "button", className: "btn w-100 py-3 text-white", style: { backgroundColor: "#6366f1", borderRadius: "8px" }, children: __("Continue") }) : null
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-xl-5 col-md-12 col-sm-12", children: /* @__PURE__ */ jsx("div", { className: "card border-0 rounded-4 bg-white shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
          /* @__PURE__ */ jsx("h5", { className: "mb-4 fw-bold", children: __("Order Summary") }),
          /* @__PURE__ */ jsx("h6", { className: "mb-4 fw-semibold fs-4 text-dark", children: subscription.name }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "fw-semibold fs-3", children: period === "month" ? __("Monthly Recurring") : __("Yearly Recurring") }),
            /* @__PURE__ */ jsxs("div", { className: "text-end", children: [
              /* @__PURE__ */ jsx("span", { className: "text-decoration-line-through text-danger me-2 fw-bold fs-4", children: price == null ? void 0 : price.comparative_value_formatted }),
              /* @__PURE__ */ jsx("span", { className: "fw-semibold fs-4", children: price == null ? void 0 : price.value_formatted })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-1", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "fw-semibold fs-3", children: __("Support Full 1 Month") }) }),
            /* @__PURE__ */ jsx("div", { className: "text-end", children: /* @__PURE__ */ jsx("span", { className: "fw-semibold text-success fs-4", children: __("Included") }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-1", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "fw-semibold fs-3", children: __("Acars") }) }),
            /* @__PURE__ */ jsx("div", { className: "text-end", children: /* @__PURE__ */ jsx("span", { className: "fw-semibold text-success fs-4", children: __("Included") }) })
          ] }),
          /* @__PURE__ */ jsx("hr", { className: "my-4" }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-3", children: [
            /* @__PURE__ */ jsx("h6", { className: "fw-semibold fs-6", children: __("Subtotal") }),
            /* @__PURE__ */ jsxs("div", { className: "text-end", children: [
              /* @__PURE__ */ jsx("span", { className: "text-decoration-line-through text-danger me-2 fw-bold fs-4", children: price == null ? void 0 : price.comparative_value_formatted }),
              /* @__PURE__ */ jsx("span", { className: "fw-semibold fs-4", children: price == null ? void 0 : price.value_formatted })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-success fs-3", children: __("Discount - {{percentage}}%", { percentage: price == null ? void 0 : price.estimated_discount_percentage }) }),
            /* @__PURE__ */ jsx("span", { className: "text-success fs-4 fw-semibold", children: price == null ? void 0 : price.estimated_discount_value_formatted })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-success fs-3", children: __("Taxes") }),
            /* @__PURE__ */ jsx("span", { className: "text-success fs-4", children: "-" })
          ] }),
          /* @__PURE__ */ jsx("hr", { className: "my-4" }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between mb-3", children: [
            /* @__PURE__ */ jsx("h5", { className: "fw-semibold", children: __("Estimated Total") }),
            /* @__PURE__ */ jsx("h5", { className: "fw-bold", children: price == null ? void 0 : price.value_formatted })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsxs("div", { className: "accordion", id: "accordionExample", children: [
            /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-link text-decoration-none", "data-bs-toggle": "collapse", "data-bs-target": "#collapseOne", "aria-expanded": "true", "aria-controls": "collapseOne", style: { color: "#6366f1" }, children: __("Have a coupon?") }),
            /* @__PURE__ */ jsx("div", { id: "collapseOne", className: "accordion-collapse collapse", "aria-labelledby": "headingOne", "data-bs-parent": "#accordionExample", children: /* @__PURE__ */ jsx("div", { className: "mb-1 py-1 px-3", children: /* @__PURE__ */ jsxs("div", { className: "input-group", children: [
              /* @__PURE__ */ jsx("input", { type: "text", className: "form-control", placeholder: __("Coupon Code"), required: true }),
              /* @__PURE__ */ jsx("button", { type: "button", onClick: (e) => applyCouponCode(e.currentTarget.value), className: "btn btn-primary", children: __("Apply") })
            ] }) }) })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsx("br", {}),
            isMobileOrTablet ? /* @__PURE__ */ jsx("button", { onClick: submit, className: "btn w-100 py-3 text-white", style: { backgroundColor: "#6366f1", borderRadius: "8px" }, children: __("Continue") }) : null
          ] })
        ] }) }) })
      ] }),
      createBilling === false && (data.billing_address_id === "" || data.billing_address_id === null) ? /* @__PURE__ */ jsx("div", { className: "col-xl-12 col-md-12 col-sm-12 d-flex justify-content-center mb-4", children: /* @__PURE__ */ jsx("button", { className: "btn btn-md btn-secondary", onClick: () => {
        setCreateBilling(true);
        setData({ ...data, billing_address_id: "" });
      }, children: __("Create new address") }) }) : null
    ] })
  ] }) });
}
export {
  LandingSubscribe as default
};
