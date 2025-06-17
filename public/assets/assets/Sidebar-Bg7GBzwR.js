import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function Sidebar() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("aside", { className: "left-sidebar with-vertical", children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "brand-logo d-flex align-items-center justify-content-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "../main/index.html", className: "text-nowrap logo-img", children: [
        /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", className: "dark-logo", width: 170, alt: "img-fluid" }),
        /* @__PURE__ */ jsx("img", { src: "/assets/images/logo-light.png", className: "light-logo", width: 170, alt: "img-fluid" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "javascript:void(0)", className: "sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none", children: /* @__PURE__ */ jsx("i", { className: "ti ti-x" }) })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "sidebar-nav scroll-sidebar", "data-simplebar": true, children: /* @__PURE__ */ jsxs("ul", { id: "sidebarnav", children: [
      /* @__PURE__ */ jsxs("li", { className: "nav-small-cap", children: [
        /* @__PURE__ */ jsx("i", { className: "ti ti-dots nav-small-cap-icon fs-4" }),
        /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Home" })
      ] }),
      /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { className: "sidebar-link", id: "get-url", "aria-expanded": "false", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-aperture" }) }),
        /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Analytical" })
      ] }) }),
      /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { className: "sidebar-link", href: "../main/index2.html", "aria-expanded": "false", children: [
        /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("i", { className: "ti ti-shopping-cart" }) }),
        /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "eCommerce" })
      ] }) }),
      /* @__PURE__ */ jsxs("li", { className: "sidebar-item", children: [
        /* @__PURE__ */ jsxs("a", { className: "sidebar-link has-arrow", href: "javascript:void(0)", "aria-expanded": "false", children: [
          /* @__PURE__ */ jsx("span", { className: "d-flex", children: /* @__PURE__ */ jsx("i", { className: "ti ti-layout-grid" }) }),
          /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Front Pages" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { "aria-expanded": "false", className: "collapse first-level", children: [
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-landingpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Homepage" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-aboutpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "About Us" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-blogpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Blog" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-blogdetailpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Blog Details" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-contactpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Contact Us" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-portfoliopage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Portfolio" })
          ] }) }),
          /* @__PURE__ */ jsx("li", { className: "sidebar-item", children: /* @__PURE__ */ jsxs("a", { href: "../main/frontend-pricingpage.html", className: "sidebar-link", children: [
            /* @__PURE__ */ jsx("div", { className: "round-16 d-flex align-items-center justify-content-center", children: /* @__PURE__ */ jsx("i", { className: "ti ti-circle" }) }),
            /* @__PURE__ */ jsx("span", { className: "hide-menu", children: "Pricing" })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "fixed-profile px-4 py-9 mx-4 mb-2 bg-primary-subtle rounded mt-7 position-relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "sidebar-footer-text position-relative z-1", children: [
        /* @__PURE__ */ jsx("h4", { className: "fw-bolder fs-5", children: "Upgrade to" }),
        /* @__PURE__ */ jsx("h4", { className: "fw-bolder fs-5", children: "Premium" }),
        /* @__PURE__ */ jsx("a", { href: "javascript:void(0)", className: "btn btn-primary mt-2", children: "Upgrade" })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "/assets/images/sidebar-buynow.png", className: "buynow-img img-fluid position-absolute end-0 bottom-0" })
    ] })
  ] }) }) });
}
export {
  Sidebar as default
};
