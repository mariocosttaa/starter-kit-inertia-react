import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { q, $ as $e, Y as Ye } from "../ssr.js";
import LandingPageLayout from "./LandingPageLayout-Cs_JPAnZ.js";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useCurrency } from "./useCurrency-CWqNCApD.js";
import { g as getSubscriptionPeriodCookie, s as setSubscriptionPeriodCookie } from "./subscriptionPeriod-qGpfr_U7.js";
import { r as route } from "./route-YhFkYWrg.js";
import useDeviceDetect from "./useDeviceDetect-BMZuEs7G.js";
import { ToastManager } from "./ToastManager-BSVcj1SV.js";
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
import "./LandingFooter-D-xnuXAk.js";
import "./LandingTittleSection-B-EtpfVD.js";
import "./LoadingOverlay-DZnlEpZi.js";
import "./useDarkMode-DW9zJM-O.js";
import "react-toastify";
function textLimit(text, limit) {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
}
function LandingPricing({ subscriptions }) {
  const { auth, currencies, default_currency } = q().props;
  const { t: __ } = useTranslation(["static-text", "menu"]);
  const { isMobile, isTablet, isDesktop, isDesktopOrTablet, isMobileOrTablet } = useDeviceDetect();
  const [subscriptionPrices, setSubscriptionPrices] = useState({});
  const [subscriptionPeriod, setSubscriptionPeriod] = useState(getSubscriptionPeriodCookie() || "month");
  const { currentCurrencyCode } = useCurrency();
  useEffect(() => {
    if (!getSubscriptionPeriodCookie()) {
      setSubscriptionPeriodCookie("month");
      setSubscriptionPeriod("month");
    }
  }, []);
  const handleSubscriptionPeriodChange = (period) => {
    setSubscriptionPeriodCookie(period);
    setSubscriptionPeriod(period);
  };
  useEffect(() => {
    const updatePrices = () => {
      const effectiveCurrencyCode = currentCurrencyCode || default_currency;
      const prices = {};
      subscriptions.forEach((subscription) => {
        var _a, _b;
        let price = (_a = subscription.prices) == null ? void 0 : _a.find(
          (price2) => price2.currency_code === effectiveCurrencyCode && price2.period === subscriptionPeriod
        );
        if (!price && effectiveCurrencyCode !== default_currency) {
          price = (_b = subscription.prices) == null ? void 0 : _b.find(
            (price2) => price2.currency_code === effectiveCurrencyCode && price2.period === subscriptionPeriod
          );
        }
        prices[subscription.id] = price;
      });
      setSubscriptionPrices(prices);
    };
    updatePrices();
  }, [currentCurrencyCode, subscriptions, subscriptionPeriod]);
  const subscriptionFeaturesIconsAndNames = ({ features, subscriptionId }) => {
    return /* @__PURE__ */ jsx(Fragment, { children: features == null ? void 0 : features.map((feature, featureIndex) => {
      if (!feature.status) return null;
      const isAvailable = feature.type === "have";
      const iconSrc = isAvailable ? "/assets/images/icon-circle-check.svg" : "/assets/images/icon-circle-x.svg";
      const textClass = isAvailable ? "text-dark" : "text-muted";
      const altText = isAvailable ? "Feature available" : "Feature unavailable";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "d-flex align-items-center",
          children: [
            /* @__PURE__ */ jsx("img", { src: iconSrc, alt: altText, className: "me-2" }),
            /* @__PURE__ */ jsx("p", { className: `fs-3 fw-bold mb-0 ${textClass}`, children: textLimit(feature.name, 5) })
          ]
        },
        `feature-${subscriptionId}-${featureIndex}`
      );
    }) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ToastManager, {}),
    /* @__PURE__ */ jsxs(LandingPageLayout, { bodyHeaderSubtittle: __("Choose Your Plan"), bodyHeaderTittle: __("Pricing"), children: [
      /* @__PURE__ */ jsx($e, { title: "Pricing" }),
      /* @__PURE__ */ jsx("section", { className: "py-5 py-md-14 py-lg-12", children: /* @__PURE__ */ jsx("div", { className: isDesktop ? "custom-container p-12" : "custom-container p-4", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "fw-bolder fs-10 text-center", children: [
          __("Trusted by +100 virtual airlines"),
          /* @__PURE__ */ jsx("br", {}),
          __("Power your virtual airline with our scalable solution")
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "row my-sm-5 my-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-center mb-5", children: [
            /* @__PURE__ */ jsx("span", { className: "text-dark fw-bold fs-7 text-capitalize me-3", children: __("Monthly") }),
            /* @__PURE__ */ jsx("span", { className: "fs-7", children: "     " }),
            /* @__PURE__ */ jsxs("div", { className: "form-check form-switch mb-0", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  style: { cursor: "pointer" },
                  className: "form-check-input fs-7",
                  type: "checkbox",
                  checked: subscriptionPeriod === "year",
                  onChange: () => handleSubscriptionPeriodChange(subscriptionPeriod === "year" ? "month" : "year")
                }
              ),
              /* @__PURE__ */ jsx("label", { className: "form-check-label fs-7", htmlFor: "billing-period" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-dark fw-bold fs-7 text-capitalize ms-2", children: [
              " ",
              __("Yearly")
            ] })
          ] }),
          subscriptions.map((subscription, index) => {
            var _a, _b, _c, _d, _e;
            if (subscription.level == 5) {
              return /* @__PURE__ */ jsx("div", { className: "col-xl-3 col-sm-6 mb-4 h-100", children: /* @__PURE__ */ jsxs("div", { className: "card p-7 mb-0 rounded-3 border", children: [
                /* @__PURE__ */ jsx("h3", { className: "fs-6 fw-bolder mb-0", children: subscription.name }),
                /* @__PURE__ */ jsx("p", { className: "fs-2 mt-3 pb-sm-7 pb-3 mb-0 fw-bold border-bottom", children: subscription.description }),
                subscriptionPrices[subscription.id] && /* @__PURE__ */ jsxs("h3", { className: "fs-3 fw-normal mt-sm-7 mt-3 text-muted ", children: [
                  /* @__PURE__ */ jsx("span", { className: "fs-9 fw-bolder text-dark", children: (_a = subscriptionPrices[subscription.id]) == null ? void 0 : _a.value_formatted }),
                  " /",
                  ((_b = subscriptionPrices[subscription.id]) == null ? void 0 : _b.period) === "month" ? __("Month") : __("Year")
                ] }),
                /* @__PURE__ */ jsx("div", { className: "my-sm-7 my-3 d-flex flex-column gap-3", children: subscriptionFeaturesIconsAndNames({ features: subscription.features, subscriptionId: subscription.id }) }),
                /* @__PURE__ */ jsx(Ye, { href: route("landing-contact"), className: "btn btn-primary", children: __("Contact Us") })
              ] }) }, index);
            } else {
              return /* @__PURE__ */ jsx("div", { className: "col-xl-3 col-sm-6 mb-4 h-100", children: /* @__PURE__ */ jsxs("div", { className: "card p-7 mb-0 rounded-3 border", children: [
                /* @__PURE__ */ jsxs("h3", { className: "fs-6 fw-bolder mb-0", children: [
                  subscription.name,
                  subscription.level === 4 && /* @__PURE__ */ jsx("span", { className: "text-success fs-2 fw-bolder bg-success-subtle py-1 px-2 rounded ms-2", children: "Popular" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "fs-2 mt-3 pb-sm-7 pb-3 mb-0 fw-bold border-bottom", children: subscription.description }),
                subscriptionPrices[subscription.id] && /* @__PURE__ */ jsxs("h3", { className: "fs-3 fw-normal mt-sm-7 mt-3 text-muted ", children: [
                  /* @__PURE__ */ jsx("small", { className: "fs-2 fw-bolder text-danger d-block", style: { textDecoration: "line-through" }, children: (_c = subscriptionPrices[subscription.id]) == null ? void 0 : _c.comparative_value_formatted }),
                  /* @__PURE__ */ jsx("span", { className: `${subscription.level === 4 ? "fs-8 fw-bolder text-success" : "fs-8 fw-bolder text-dark"} `, children: (_d = subscriptionPrices[subscription.id]) == null ? void 0 : _d.value_formatted }),
                  " /",
                  ((_e = subscriptionPrices[subscription.id]) == null ? void 0 : _e.period) === "month" ? __("Month") : __("Year")
                ] }),
                /* @__PURE__ */ jsx("div", { className: "my-sm-7 my-3 d-flex flex-column gap-3", children: subscriptionFeaturesIconsAndNames({ features: subscription.features, subscriptionId: subscription.id }) }),
                /* @__PURE__ */ jsx(
                  Ye,
                  {
                    href: auth.user ? route("landing-subscribe", { plan: subscription.slug, period: subscriptionPeriod }) : route("landing-authenticate-login", { plan: subscription.slug, period: subscriptionPeriod }),
                    className: `btn ${subscription.level === 4 ? "btn-success" : "btn-primary"}`,
                    children: __("Purchase Now")
                  }
                )
              ] }) }, index);
            }
          })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "fs-4 fw-bold text-center mb-7", children: [
            __("Secured payment with"),
            " Stripe"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-10", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsx("img", { src: "/assets/images/visa.png", alt: "visa", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/mastercard.png", alt: "mastercard", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/americanexpress.png", alt: "americanexpress", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/paypal.png", alt: "paypal", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/maestro.png", alt: "maestro", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/jcb.png", alt: "jcb", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/dinersclub.png", alt: "dinersclub", className: "cursor-pointer" }),
            /* @__PURE__ */ jsx("img", { src: "/assets/images/discover.png", alt: "discover", className: "cursor-pointer" })
          ] }) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "mb-5 mb-md-14 mb-lg-12", children: /* @__PURE__ */ jsx("div", { className: "custom-container", children: /* @__PURE__ */ jsx("div", { className: "bg-primary-subtle rounded-3 position-relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
        /* @__PURE__ */ jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxs("div", { className: "py-lg-12 ps-lg-12 py-5 px-lg-0 px-9", children: [
          /* @__PURE__ */ jsx("h2", { className: "fs-10 fw-bolder text-lg-start text-center", children: __("Create Now your Virtual Airline with us") }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-lg-start justify-content-center gap-3 my-4 flex-sm-nowrap flex-wrap", children: [
            /* @__PURE__ */ jsx(Ye, { href: route("public-login"), className: "btn btn-primary py-6 px-9", children: __("Pilot Login") }),
            /* @__PURE__ */ jsx(Ye, { href: "/as", className: "btn btn-outline-primary py-6 px-9", children: __("Create Company") })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "fs-3 text-lg-start text-center mb-0", children: [
            /* @__PURE__ */ jsx("span", { className: "fw-bolder", children: __("Start your virtual airline today") }),
            " - ",
            __("no hidden fees"),
            "."
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-lg-6 d-lg-block d-none", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/design-collection.png", alt: "banner", className: "position-absolute develop-feature-rich" }) })
      ] }) }) }) })
    ] })
  ] });
}
export {
  LandingPricing as default
};
