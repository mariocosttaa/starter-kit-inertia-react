import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { q, Y as Ye } from "../ssr.js";
import { useTemplateSettings } from "./useTemplateSettings-B6Ycpyl0.js";
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
import "./TemplateSettings-B4lfXDH4.js";
function ChangeDarkAndLightMode() {
  const { settings, setTemplateSettings } = useTemplateSettings();
  const toggleTheme = () => {
    setTemplateSettings({
      ...settings,
      Theme: settings.Theme === "light" ? "dark" : "light"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("button", { style: { border: "none", background: "transparent" }, onClick: toggleTheme, children: settings.Theme === "dark" ? /* @__PURE__ */ jsx("a", { className: "nav-link moon dark-layout", children: /* @__PURE__ */ jsx("i", { className: "ti ti-moon moon" }) }) : /* @__PURE__ */ jsx("a", { className: "nav-link sun light-layout", children: /* @__PURE__ */ jsx("i", { className: "ti ti-sun sun" }) }) }) });
}
function Navbar() {
  const { settings, setTemplateSettings } = useTemplateSettings();
  const { auth } = q().props;
  const toggleSidebar = () => {
    setTemplateSettings({
      ...settings,
      SidebarType: settings.SidebarType === "full" ? "mini-sidebar" : "full"
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("header", { className: "topbar", children: [
    /* @__PURE__ */ jsxs("div", { className: "with-vertical", children: [
      /* @__PURE__ */ jsxs("nav", { className: "navbar navbar-expand-lg p-0", children: [
        /* @__PURE__ */ jsx("ul", { className: "navbar-nav", children: /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded-circle ms-n2", children: /* @__PURE__ */ jsx("a", { className: "nav-link sidebartoggler", style: { cursor: "pointer" }, id: "headerCollapse", onClick: toggleSidebar, children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2" }) }) }) }),
        /* @__PURE__ */ jsx("div", { className: "d-block d-lg-none py-4", children: /* @__PURE__ */ jsxs("a", { href: "../main/index.html", className: "text-nowrap logo-img", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", className: "light-logo", width: 170, alt: "img-fluid" }),
          /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-dark.png", className: "dark-logo", width: 170, alt: "img-fluid" })
        ] }) }),
        /* @__PURE__ */ jsx("a", { className: "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dots fs-7" }) }),
        /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse justify-content-end", id: "navbarNav", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between", children: [
          /* @__PURE__ */ jsx("a", { className: "nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#mobilenavbar", "aria-controls": "offcanvasWithBothOptions", children: /* @__PURE__ */ jsx("i", { className: "ti ti-align-justified fs-7" }) }),
          /* @__PURE__ */ jsxs("ul", { className: "navbar-nav flex-row ms-auto align-items-center justify-content-center", children: [
            /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded-circle", children: /* @__PURE__ */ jsx(ChangeDarkAndLightMode, {}) }),
            /* @__PURE__ */ jsxs("li", { className: "nav-item nav-icon-hover-bg rounded-circle dropdown", children: [
              /* @__PURE__ */ jsx("a", { className: "nav-link", id: "drop2", "aria-expanded": "false", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-en.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
              /* @__PURE__ */ jsx("div", { className: "dropdown-menu dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop2", children: /* @__PURE__ */ jsxs("div", { className: "message-body", children: [
                /* @__PURE__ */ jsxs("a", { className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-en.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                  /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "English (UK)" })
                ] }),
                /* @__PURE__ */ jsxs("a", { className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-cn.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                  /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "中国人 (Chinese)" })
                ] }),
                /* @__PURE__ */ jsxs("a", { className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-fr.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                  /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "français (French)" })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                  /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-sa.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                  /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "عربي (Arabic)" })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "nav-item nav-icon-hover-bg rounded-circle dropdown", children: [
              /* @__PURE__ */ jsxs("a", { className: "nav-link position-relative", href: "javascript:void(0)", id: "drop2", "aria-expanded": "false", children: [
                /* @__PURE__ */ jsx("i", { className: "ti ti-bell-ringing" }),
                /* @__PURE__ */ jsx("div", { className: "notification bg-primary rounded-circle" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop2", children: [
                /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between py-3 px-7", children: [
                  /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-5 fw-semibold", children: "Notifications" }),
                  /* @__PURE__ */ jsx("span", { className: "badge text-bg-primary rounded-2 px-3 py-1 lh-sm", children: "5 new" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "message-body", "data-simplebar": true, children: [
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-2.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Roman Joined the Team!" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Congratulate him" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-3.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "New message" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Salma sent you new message" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-4.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Bianca sent payment" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Check your earnings" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-5.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Jolly completed tasks" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Assign her new tasks" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-6.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "John received payment" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "$230 deducted from account" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                    /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-7.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Roman Joined the Team!" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Congratulate him" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "py-6 px-7 mb-1", children: /* @__PURE__ */ jsx("button", { className: "btn btn-outline-primary w-100", children: "See All Notifications" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
              /* @__PURE__ */ jsx("a", { className: "nav-link pe-0", href: "javascript:void(0)", id: "drop1", "aria-expanded": "false", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2 border-start ps-3", children: [
                /* @__PURE__ */ jsx("div", { className: "user-profile-img", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-1.jpg", className: "rounded-circle", width: 35, height: 35, alt: "flexy-img" }) }),
                /* @__PURE__ */ jsxs("div", { className: "d-none d-md-flex align-items-center", children: [
                  /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-4", children: "Hi," }),
                  /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-4 fw-semibold ms-1", children: auth.user.name }),
                  /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop1", children: /* @__PURE__ */ jsxs("div", { className: "profile-dropdown position-relative", "data-simplebar": true, children: [
                /* @__PURE__ */ jsx("div", { className: "py-3 px-7 pb-0", children: /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-5 fw-semibold", children: "User Profile" }) }),
                /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center py-9 mx-7 border-bottom", children: [
                  /* @__PURE__ */ jsx("img", { src: "/assets/images/user-1.jpg", className: "rounded-circle", width: 80, height: 80, alt: "flexy-img" }),
                  /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
                    /* @__PURE__ */ jsx("h5", { className: "mb-1 fs-4", children: auth.user.name }),
                    /* @__PURE__ */ jsx("span", { className: "mb-1 d-block", children: auth.user.email }),
                    /* @__PURE__ */ jsxs("p", { className: "mb-0 d-flex align-items-center gap-2", children: [
                      /* @__PURE__ */ jsx("i", { className: "ti ti-mail fs-4" }),
                      " info@flexy.com"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "message-body", children: [
                  /* @__PURE__ */ jsxs("a", { href: "../main/page-user-profile.html", className: "py-8 px-7 mt-8 d-flex align-items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-primary-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-currency-dollar fs-6 text-primary" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Profile" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Account Settings" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-email.html", className: "py-8 px-7 d-flex align-items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-success-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-shield fs-6 text-success" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Inbox" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Messages & Emails" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-notes.html", className: "py-8 px-7 d-flex align-items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-danger-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-credit-card fs-6 text-danger" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Task" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "To-do and Daily Tasks" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "d-grid py-4 px-7 pt-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
                    /* @__PURE__ */ jsxs("div", { className: "col-6", children: [
                      /* @__PURE__ */ jsx("h5", { className: "fs-4 mb-3 fw-semibold", children: "Unlimited Access" }),
                      /* @__PURE__ */ jsx("button", { className: "btn btn-primary", children: "Upgrade" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("div", { className: "m-n4 unlimited-img", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/unlimited-bg.png", alt: "flexy-img", className: "w-100" }) }) })
                  ] }) }),
                  /* @__PURE__ */ jsx(Ye, { href: route("logout"), method: "post", as: "button", type: "button", className: "btn btn-outline-danger", children: "Log Out" })
                ] })
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "offcanvas offcanvas-start", "data-bs-scroll": "true", tabIndex: -1, id: "mobilenavbar", "aria-labelledby": "offcanvasWithBothOptionsLabel", children: /* @__PURE__ */ jsxs("nav", { className: "sidebar-nav scroll-sidebar", children: [
        /* @__PURE__ */ jsxs("div", { className: "offcanvas-header justify-content-between", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/favicon.png", alt: "flexy-img", className: "img-fluid" }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close ms-auto", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "offcanvas-body h-n80", "data-simplebar": true, children: /* @__PURE__ */ jsxs("ul", { id: "sidebarnav", children: [
          /* @__PURE__ */ jsxs("li", { className: "sidebar-item", children: [
            /* @__PURE__ */ jsxs("a", { className: "sidebar-link has-arrow", href: "javascript:void(0)", "aria-expanded": "false", children: [
              /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-apps" }) }),
              /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Apps" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { "aria-expanded": "false", className: "collapse first-level my-3", children: [
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-chat.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-chat.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Chat Application" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "New messages arrived" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-invoice.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-invoice.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Invoice App" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "Get latest invoice" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-cotact.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-mobile.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Contact Application" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "2 Unsaved Contacts" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-email.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-message-box.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Email App" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "Get new emails" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/page-user-profile.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-cart.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "User Profile" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "learn more information" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-calendar.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-date.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Calendar App" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "Get dates" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-contact2.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-lifebuoy.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Contact List Table" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "Add new contact" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsxs("a", { href: "../main/app-notes.html", className: "d-flex align-items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-application.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h6", { className: "mb-1 bg-hover-primary", children: "Notes Application" }),
                  /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-muted", children: "To-do and Daily tasks" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("ul", { className: "px-8 mt-7 mb-4", children: [
                /* @__PURE__ */ jsx("li", { className: "sidebar-item mb-3", children: /* @__PURE__ */ jsx("h5", { className: "fs-5 fw-semibold", children: "Quick Links" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/page-pricing.html", children: "Pricing Page" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/authentication-login.html", children: "Authentication Design" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/authentication-register.html", children: "Register Now" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/authentication-error.html", children: "404 Error Page" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/app-notes.html", children: "Notes App" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/page-user-profile.html", children: "User Application" }) }),
                /* @__PURE__ */ jsx("li", { className: "sidebar-item py-2", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold text-dark", href: "../main/page-account-settings.html", children: "Account Settings" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { className: "sidebar-link", href: "../main/app-chat.html", "aria-expanded": "false", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-message-dots" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Chat" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { className: "sidebar-link", href: "../main/app-calendar.html", "aria-expanded": "false", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-calendar" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Calendar" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { className: "sidebar-link", href: "../main/app-email.html", "aria-expanded": "false", children: [
            /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-mail" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Email" })
          ] }) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "app-header with-horizontal", children: /* @__PURE__ */ jsxs("nav", { className: "navbar navbar-expand-xl container-fluid p-0", children: [
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav align-items-center", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2", children: /* @__PURE__ */ jsx("a", { className: "nav-link sidebartoggler", id: "sidebarCollapse", href: "javascript:void(0)", children: /* @__PURE__ */ jsx("i", { className: "ti ti-menu-2" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item d-none d-xl-block", children: /* @__PURE__ */ jsxs("a", { href: "../main/index.html", className: "text-nowrap nav-link", children: [
          /* @__PURE__ */ jsx("img", { src: "/assets/images/dark-logo.svg", className: "dark-logo", alt: "flexy-img" }),
          /* @__PURE__ */ jsx("img", { src: "/assets/images/light-logo.svg", className: "light-logo", alt: "flexy-img" })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "javascript:void(0)", "data-bs-toggle": "modal", "data-bs-target": "#exampleModal", children: /* @__PURE__ */ jsx("i", { className: "ti ti-search" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: "navbar-nav quick-links d-none d-xl-flex align-items-center", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex", children: /* @__PURE__ */ jsxs("div", { className: "hover-dd", children: [
          /* @__PURE__ */ jsxs("a", { className: "nav-link", href: "javascript:void(0)", children: [
            "Apps",
            /* @__PURE__ */ jsx("span", { className: "mt-1", children: /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down fs-3" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
            /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("div", { className: "ps-7 pt-7", children: [
              /* @__PURE__ */ jsx("div", { className: "border-bottom", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
                /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "position-relative", children: [
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-chat.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-chat.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Chat Application" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "New messages arrived" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-invoice.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-invoice.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Invoice App" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "Get latest invoice" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-contact2.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-mobile.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Contact Application" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "2 Unsaved Contacts" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-email.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-message-box.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Email App" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "Get new emails" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsxs("div", { className: "position-relative", children: [
                  /* @__PURE__ */ jsxs("a", { href: "../main/page-user-profile.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-cart.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "User Profile" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "learn more information" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-calendar.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-date.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Calendar App" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "Get dates" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-contact.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-lifebuoy.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Contact List Table" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "Add new contact" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: "../main/app-notes.html", className: "d-flex align-items-center pb-9 position-relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-dd-application.svg", alt: "flexy-img", className: "img-fluid", width: 24, height: 24 }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "mb-1 fw-semibold fs-3", children: "Notes Application" }),
                      /* @__PURE__ */ jsx("span", { className: "fs-2 d-block text-body-secondary", children: "To-do and Daily tasks" })
                    ] })
                  ] })
                ] }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "row align-items-center py-3", children: [
                /* @__PURE__ */ jsx("div", { className: "col-8", children: /* @__PURE__ */ jsxs("a", { className: "fw-semibold d-flex align-items-center lh-1", href: "javascript:void(0)", children: [
                  /* @__PURE__ */ jsx("i", { className: "ti ti-help fs-6 me-2" }),
                  "Frequently Asked Questions"
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-4", children: /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-end pe-4", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary", children: "Check" }) }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-4 ms-n4", children: /* @__PURE__ */ jsxs("div", { className: "position-relative p-7 border-start h-100", children: [
              /* @__PURE__ */ jsx("h5", { className: "fs-5 mb-9 fw-semibold", children: "Quick Links" }),
              /* @__PURE__ */ jsxs("ul", { className: "", children: [
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/page-pricing.html", children: "Pricing Page" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/authentication-login.html", children: "Authentication Design" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/authentication-register.html", children: "Register Now" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/authentication-error.html", children: "404 Error Page" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/app-notes.html", children: "Notes App" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/page-user-profile.html", children: "User Application" }) }),
                /* @__PURE__ */ jsx("li", { className: "mb-3", children: /* @__PURE__ */ jsx("a", { className: "fw-semibold bg-hover-primary", href: "../main/page-account-settings.html", children: "Account Settings" }) })
              ] })
            ] }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown-hover d-none d-lg-block nav-icon-hover-bg rounded w-auto mx-0", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "../main/app-chat.html", children: "Chat" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown-hover d-none d-lg-block nav-icon-hover-bg rounded w-auto mx-0", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "../main/app-calendar.html", children: "Calendar" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item dropdown-hover d-none d-lg-block nav-icon-hover-bg rounded w-auto mx-0", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "../main/app-email.html", children: "Email" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "d-block d-xl-none", children: /* @__PURE__ */ jsx("a", { href: "../main/index.html", className: "text-nowrap nav-link", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/dark-logo.svg", width: 180, alt: "flexy-img" }) }) }),
      /* @__PURE__ */ jsx("a", { className: "navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0", href: "javascript:void(0)", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "p-2", children: /* @__PURE__ */ jsx("i", { className: "ti ti-dots fs-7" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse justify-content-end", id: "navbarNav", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between px-0 px-xl-8", children: [
        /* @__PURE__ */ jsx("a", { href: "javascript:void(0)", className: "nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#mobilenavbar", "aria-controls": "offcanvasWithBothOptions", children: /* @__PURE__ */ jsx("i", { className: "ti ti-align-justified fs-7" }) }),
        /* @__PURE__ */ jsxs("ul", { className: "navbar-nav flex-row ms-auto align-items-center justify-content-center", children: [
          /* @__PURE__ */ jsxs("li", { className: "nav-item nav-icon-hover-bg rounded-circle", children: [
            /* @__PURE__ */ jsx("a", { className: "nav-link moon dark-layout", href: "javascript:void(0)", children: /* @__PURE__ */ jsx("i", { className: "ti ti-moon moon" }) }),
            /* @__PURE__ */ jsx("a", { className: "nav-link sun light-layout", href: "javascript:void(0)", children: /* @__PURE__ */ jsx("i", { className: "ti ti-sun sun" }) })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item nav-icon-hover-bg rounded-circle dropdown", children: [
            /* @__PURE__ */ jsx("a", { className: "nav-link", href: "javascript:void(0)", id: "drop2", "aria-expanded": "false", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-en.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
            /* @__PURE__ */ jsx("div", { className: "dropdown-menu dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop2", children: /* @__PURE__ */ jsxs("div", { className: "message-body", children: [
              /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-en.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "English (UK)" })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-cn.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "中国人 (Chinese)" })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-fr.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "français (French)" })
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "d-flex align-items-center gap-2 py-3 px-4 dropdown-item", children: [
                /* @__PURE__ */ jsx("div", { className: "position-relative", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/icon-flag-sa.svg", alt: "flexy-img", width: "20px", height: "20px", className: "rounded-circle object-fit-cover round-20" }) }),
                /* @__PURE__ */ jsx("p", { className: "mb-0 fs-3", children: "عربي (Arabic)" })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("li", { className: "nav-item nav-icon-hover-bg rounded-circle", children: /* @__PURE__ */ jsxs("a", { className: "nav-link position-relative", href: "javascript:void(0)", "data-bs-toggle": "offcanvas", "data-bs-target": "#offcanvasRight", "aria-controls": "offcanvasRight", children: [
            /* @__PURE__ */ jsx("i", { className: "ti ti-basket" }),
            /* @__PURE__ */ jsx("span", { className: "popup-badge rounded-pill bg-danger text-white fs-2", children: "2" })
          ] }) }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item nav-icon-hover-bg rounded-circle dropdown", children: [
            /* @__PURE__ */ jsxs("a", { className: "nav-link position-relative", href: "javascript:void(0)", id: "drop2", "aria-expanded": "false", children: [
              /* @__PURE__ */ jsx("i", { className: "ti ti-bell-ringing" }),
              /* @__PURE__ */ jsx("div", { className: "notification bg-primary rounded-circle" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop2", children: [
              /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between py-3 px-7", children: [
                /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-5 fw-semibold", children: "Notifications" }),
                /* @__PURE__ */ jsx("span", { className: "badge text-bg-primary rounded-2 px-3 py-1 lh-sm", children: "5 new" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "message-body", "data-simplebar": true, children: [
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-2.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Roman Joined the Team!" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Congratulate him" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-3.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "New message" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Salma sent you new message" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-4.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Bianca sent payment" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Check your earnings" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-5.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Jolly completed tasks" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Assign her new tasks" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-6.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "John received payment" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "$230 deducted from account" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "javascript:void(0)", className: "py-6 px-7 d-flex align-items-center dropdown-item", children: [
                  /* @__PURE__ */ jsx("span", { className: "me-3", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-7.jpg", alt: "user", className: "rounded-circle", width: 48, height: 48 }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "Roman Joined the Team!" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Congratulate him" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "py-6 px-7 mb-1", children: /* @__PURE__ */ jsx("button", { className: "btn btn-outline-primary w-100", children: "See All Notifications" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "nav-item dropdown", children: [
            /* @__PURE__ */ jsx("a", { className: "nav-link pe-0", href: "javascript:void(0)", id: "drop1", "aria-expanded": "false", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2 border-start ps-3", children: [
              /* @__PURE__ */ jsx("div", { className: "user-profile-img", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/user-1.jpg", className: "rounded-circle", width: 35, height: 35, alt: "flexy-img" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-none d-md-flex align-items-center", children: [
                /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-4", children: "Hi," }),
                /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-4 fw-semibold ms-1", children: auth.user.name }),
                /* @__PURE__ */ jsx("i", { className: "ti ti-chevron-down" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up", "aria-labelledby": "drop1", children: /* @__PURE__ */ jsxs("div", { className: "profile-dropdown position-relative", "data-simplebar": true, children: [
              /* @__PURE__ */ jsx("div", { className: "py-3 px-7 pb-0", children: /* @__PURE__ */ jsx("h5", { className: "mb-0 fs-5 fw-semibold", children: "User Profile" }) }),
              /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center py-9 mx-7 border-bottom", children: [
                /* @__PURE__ */ jsx("img", { src: "/assets/images/user-1.jpg", className: "rounded-circle", width: 80, height: 80, alt: "flexy-img" }),
                /* @__PURE__ */ jsxs("div", { className: "ms-3", children: [
                  /* @__PURE__ */ jsx("h5", { className: "mb-1 fs-4", children: auth.user.name }),
                  /* @__PURE__ */ jsx("span", { className: "mb-1 d-block", children: auth.user.email }),
                  /* @__PURE__ */ jsxs("p", { className: "mb-0 d-flex align-items-center gap-2", children: [
                    /* @__PURE__ */ jsx("i", { className: "ti ti-mail fs-4" }),
                    " info@flexy.com"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "message-body", children: [
                /* @__PURE__ */ jsxs("a", { href: "../main/page-user-profile.html", className: "py-8 px-7 mt-8 d-flex align-items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-primary-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-currency-dollar fs-6 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Profile" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Account Settings" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "../main/app-email.html", className: "py-8 px-7 d-flex align-items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-success-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-shield fs-6 text-success" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Inbox" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "Messages & Emails" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: "../main/app-notes.html", className: "py-8 px-7 d-flex align-items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "d-flex align-items-center justify-content-center bg-danger-subtle rounded-1 p-6", children: /* @__PURE__ */ jsx("i", { className: "ti ti-credit-card fs-6 text-danger" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "w-100 ps-3", children: [
                    /* @__PURE__ */ jsx("h6", { className: "mb-0 fs-4 lh-base", children: "My Task" }),
                    /* @__PURE__ */ jsx("span", { className: "fs-3 d-block text-body-secondary", children: "To-do and Daily Tasks" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "d-grid py-4 px-7 pt-8", children: [
                /* @__PURE__ */ jsx("div", { className: "upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-2 p-4 mb-9", children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { className: "col-6", children: [
                    /* @__PURE__ */ jsx("h5", { className: "fs-4 mb-3 fw-semibold", children: "Unlimited Access" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-primary", children: "Upgrade" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "col-6", children: /* @__PURE__ */ jsx("div", { className: "m-n4 unlimited-img", children: /* @__PURE__ */ jsx("img", { src: "/assets/images/unlimited-bg.png", alt: "flexy-img", className: "w-100" }) }) })
                ] }) }),
                /* @__PURE__ */ jsx("a", { href: "../main/authentication-login.html", className: "btn btn-outline-primary", children: "Log Out" })
              ] })
            ] }) })
          ] })
        ] })
      ] }) })
    ] }) })
  ] }) });
}
export {
  Navbar as default
};
