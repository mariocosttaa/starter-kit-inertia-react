import { jsx, Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import PortalLayout from "./PortalLayout-BQ8BOgTm.js";
import "react";
import "./PortalNavbar-DOgq6HvS.js";
import "./useDarkMode-DW9zJM-O.js";
import "js-cookie";
import "../ssr.js";
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
import "./route-YhFkYWrg.js";
import "./ChangeTheme-Bn5DuTPc.js";
import "@heroicons/react/24/outline";
import "./DropDown-Dw9Zgntk.js";
import "@heroicons/react/24/solid";
import "./LanguageSwitcher-BmM1ZeYM.js";
import "./PortalFooter-DBhnE7VI.js";
import "./TittleAndBreadcrumb-B04ioebb.js";
import "./useCssManager-D1xujsTe.js";
import "./LoadingOverlay-DZnlEpZi.js";
function PortalInvoices() {
  const { t: __ } = useTranslation(["static-text"]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    PortalLayout,
    {
      pageTittle: "Invoices",
      activePage: "invoices",
      tittle: "Invoices",
      subtitle: __("List of your invoices"),
      breadcrumbs: [
        { label: "Website", href: "/" }
      ],
      children: "Invoices Page"
    }
  ) });
}
export {
  PortalInvoices as default
};
