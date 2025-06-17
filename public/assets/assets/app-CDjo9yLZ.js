import { jsx } from "react/jsx-runtime";
import { c as ce, r as resolvePageComponent, C as CurrencyProvider } from "../ssr.js";
import { createRoot } from "react-dom/client";
import { ToastProvider } from "./ToastProvider-C8U_5wYq.js";
import * as Sentry from "@sentry/react";
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
import "react-toastify";
const appName = "Laravel";
Sentry.init({
  dsn: "https://6115ba7e9c61151383339db77fdf5e81@o4509370253639680.ingest.de.sentry.io/4509370331889744",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Tracing
  tracesSampleRate: 1,
  //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1
  // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
ce({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Test.tsx": () => import("./Test-DGKCmlvu.js"), "./frontend-landing-page/template-default/components/form/Button.tsx": () => import("./Button-D6TiQOvZ.js"), "./frontend-landing-page/template-default/components/form/Input.tsx": () => import("./Input-PD2J1uiJ.js"), "./frontend-landing-page/template-default/components/form/InputError.tsx": () => import("./InputError-CTfaneU7.js"), "./frontend-landing-page/template-default/layout/LandingPageLayout.tsx": () => import("./LandingPageLayout-Cs_JPAnZ.js"), "./frontend-landing-page/template-default/layout/parts/LandingFooter.tsx": () => import("./LandingFooter-D-xnuXAk.js"), "./frontend-landing-page/template-default/layout/parts/LandingNavbar.tsx": () => import("./LandingNavbar-AH_i4HqG.js"), "./frontend-landing-page/template-default/layout/parts/LandingTittleSection.tsx": () => import("./LandingTittleSection-B-EtpfVD.js"), "./frontend-landing-page/template-default/pages/About/LandingAbout.tsx": () => import("./LandingAbout-D66FShiI.js"), "./frontend-landing-page/template-default/pages/Authenticate/LandingAuthenticateLogin.tsx": () => import("./LandingAuthenticateLogin-_CvYKVEE.js"), "./frontend-landing-page/template-default/pages/Authenticate/LandingAuthenticateRegister.tsx": () => import("./LandingAuthenticateRegister-Dh-EF7Yg.js"), "./frontend-landing-page/template-default/pages/Contact/LandingContact.tsx": () => import("./LandingContact-zLraThVD.js"), "./frontend-landing-page/template-default/pages/Features/LandingFeatures.tsx": () => import("./LandingFeatures-BYJfXSDj.js"), "./frontend-landing-page/template-default/pages/Home/LandingHome.tsx": () => import("./LandingHome-BEf6cL67.js"), "./frontend-landing-page/template-default/pages/Integrations/LandingIntegrations.tsx": () => import("./LandingIntegrations-CqZhRBqK.js"), "./frontend-landing-page/template-default/pages/Pricing/LandingPricing.tsx": () => import("./LandingPricing--SowD8M8.js"), "./frontend-landing-page/template-default/pages/Subscribe/LandingSubscribe.tsx": () => import("./LandingSubscribe-CdpcUQwM.js"), "./frontend-landing-page/template-default/pages/Subscribe/LandingSubscribePay.tsx": () => import("./LandingSubscribePay-w7NrEQ_r.js"), "./frontend-portal/template-default/components/Button.tsx": () => import("./Button-BYx2FSd4.js"), "./frontend-portal/template-default/components/Card.tsx": () => import("./Card-DCFzm0x5.js"), "./frontend-portal/template-default/components/ChangeTheme.tsx": () => import("./ChangeTheme-Bn5DuTPc.js"), "./frontend-portal/template-default/components/Div.tsx": () => import("./Div-aCINAKI_.js"), "./frontend-portal/template-default/components/DropDown.tsx": () => import("./DropDown-Dw9Zgntk.js"), "./frontend-portal/template-default/components/LanguageSwitcher.tsx": () => import("./LanguageSwitcher-BmM1ZeYM.js"), "./frontend-portal/template-default/components/P.tsx": () => import("./P--Khfw00L.js"), "./frontend-portal/template-default/components/Row.tsx": () => import("./Row-CpYE0W9h.js"), "./frontend-portal/template-default/components/form/Input.tsx": () => import("./Input-BLYT2enS.js"), "./frontend-portal/template-default/components/form/Label.tsx": () => import("./Label-CO2rAZZX.js"), "./frontend-portal/template-default/layout/PortalLayout.tsx": () => import("./PortalLayout-BQ8BOgTm.js"), "./frontend-portal/template-default/layout/parts/PortalFooter.tsx": () => import("./PortalFooter-DBhnE7VI.js"), "./frontend-portal/template-default/layout/parts/PortalNavbar.tsx": () => import("./PortalNavbar-DOgq6HvS.js"), "./frontend-portal/template-default/layout/parts/TittleAndBreadcrumb.tsx": () => import("./TittleAndBreadcrumb-B04ioebb.js"), "./frontend-portal/template-default/pages/Invoices/PortalInvoices.tsx": () => import("./PortalInvoices-HfmsVJ0C.js"), "./frontend-portal/template-default/pages/Profile/Parts/PortalProfileSidebar.tsx": () => import("./PortalProfileSidebar-QYfD6VVc.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileConnectAccounts.tsx": () => import("./PortalProfileConnectAccounts-zzQK0SO3.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdateDetails.tsx": () => import("./PortalProfileUpdateDetails-C2_IiNB7.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdateNetworks.tsx": () => import("./PortalProfileUpdateNetworks-ODFmw1GB.js"), "./frontend-portal/template-default/pages/Profile/PortalProfileUpdatePassword.tsx": () => import("./PortalProfileUpdatePassword-mypRTi6g.js"), "./frontend-portal/template-default/pages/Settings/PortalSettings.tsx": () => import("./PortalSettings-BElgBdQq.js"), "./frontend-portal/template-default/pages/VirtualAirlines/PortalVirtualAirlines.tsx": () => import("./PortalVirtualAirlines-B5C7QBmF.js"), "./frontend-private/default-template/hooks/useTemplateSettings.tsx": () => import("./useTemplateSettings-B6Ycpyl0.js"), "./frontend-private/default-template/layout/DashbaordPrivateLayout.tsx": () => import("./DashbaordPrivateLayout-Rnmiwitv.js"), "./frontend-private/default-template/layout/DefaultLayout.tsx": () => import("./DefaultLayout-Dg5rNnne.js"), "./frontend-private/default-template/layout/parts/Footer.tsx": () => import("./Footer-5Le6GkAo.js"), "./frontend-private/default-template/layout/parts/Navbar.tsx": () => import("./Navbar-BON2O-IC.js"), "./frontend-private/default-template/layout/parts/Sidebar.tsx": () => import("./Sidebar-Bg7GBzwR.js"), "./frontend-private/default-template/layout/settings/TemplateSettings.tsx": () => import("./TemplateSettings-B4lfXDH4.js"), "./frontend-private/default-template/pages/Dashboard/PrivateDashboard.tsx": () => import("./PrivateDashboard-qR2MVC5T.js"), "./frontend-public/template-default/components/form/Button.tsx": () => import("./Button-DJ5lx1RR.js"), "./frontend-public/template-default/components/form/Input.tsx": () => import("./Input-BZxr3GwB.js"), "./frontend-public/template-default/components/form/InputError.tsx": () => import("./InputError-Db5CZtVp.js"), "./frontend-public/template-default/layout/DefaultLayout.tsx": () => import("./DefaultLayout-CskabVQs.js"), "./frontend-public/template-default/layout/PublicPageLayout.tsx": () => import("./PublicPageLayout-DEz7MXDA.js"), "./frontend-public/template-default/layout/parts/PublicFooter.tsx": () => import("./PublicFooter-Cs7C5yJb.js"), "./frontend-public/template-default/layout/parts/PublicNavbar.tsx": () => import("./PublicNavbar-8lfJSopR.js"), "./frontend-public/template-default/layout/settings/TemplateSettings.tsx": () => import("./TemplateSettings-egI0i6DB.js"), "./frontend-public/template-default/pages/Auth/Login.tsx": () => import("./Login-ueYBZGED.js"), "./frontend-public/template-default/pages/Blog/PublicBlog.tsx": () => import("./PublicBlog-CkciLupG.js"), "./frontend-public/template-default/pages/Home/PublicHome.tsx": () => import("./PublicHome-DhfYh-be.js"), "./shared/components/CurrencySwitcher.tsx": () => import("./CurrencySwitcher-Difcr0O7.js"), "./shared/components/LanguageSwitcher.tsx": () => import("./LanguageSwitcher-CVv6azVH.js"), "./shared/components/LoadingOverlay.tsx": () => import("./LoadingOverlay-DZnlEpZi.js"), "./shared/components/ToastManager.tsx": () => import("./ToastManager-BSVcj1SV.js"), "./shared/components/ToastProvider.tsx": () => import("./ToastProvider-C8U_5wYq.js"), "./shared/components/form/Button.tsx": () => import("./Button-BtO3Wh-T.js"), "./shared/components/form/Input.tsx": () => import("./Input-w5O8D7Jb.js"), "./shared/components/form/InputError.tsx": () => import("./InputError-DGdIO6wN.js"), "./shared/components/form/RequiredAsteristic.tsx": () => import("./RequiredAsteristic-Cm1U2gpX.js"), "./shared/components/form/Select.tsx": () => import("./Select-V4bBbPbC.js"), "./shared/components/paymentGateway/StripeForm.tsx": () => import("./StripeForm-DzE279Eg.js"), "./shared/context/CurrencyContext.tsx": () => import("../ssr.js").then((n) => n.d), "./shared/hooks/useCurrency.tsx": () => import("./useCurrency-CWqNCApD.js"), "./shared/hooks/useDarkMode.tsx": () => import("./useDarkMode-DW9zJM-O.js"), "./shared/hooks/useDeviceDetect.tsx": () => import("./useDeviceDetect-BMZuEs7G.js"), "./shared/hooks/useLocalTime.tsx": () => import("./useLocalTime-Dp6N5xXj.js"), "./shared/provider/CurrencyProvider.tsx": () => import("../ssr.js").then((n) => n.e), "./shared/provider/StripeProvicer.tsx": () => import("./StripeProvicer-BI7cO2rR.js"), "./ssr.tsx": () => import("../ssr.js").then((n) => n.s) })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    const app = /* @__PURE__ */ jsx(App, { ...props, children: ({ Component, key, props: props2 }) => /* @__PURE__ */ jsx(CurrencyProvider, { children: /* @__PURE__ */ jsx(ToastProvider, { children: /* @__PURE__ */ jsx(Component, { ...props2 }, key) }) }) });
    root.render(app);
  },
  progress: {
    color: "#4B5563"
  }
});
