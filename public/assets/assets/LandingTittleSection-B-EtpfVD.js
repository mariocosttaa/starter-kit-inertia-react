import { jsx, Fragment, jsxs } from "react/jsx-runtime";
function LandingTittleSection({ bodyHeaderSubtittle = "", bodyHeaderTittle = "" }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "bg-primary-subtle py-14", children: /* @__PURE__ */ jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("p", { className: "text-primary fs-4 fw-bolder", children: bodyHeaderSubtittle }),
    /* @__PURE__ */ jsx("h1", { className: "fw-bolder fs-12", children: bodyHeaderTittle })
  ] }) }) }) });
}
export {
  LandingTittleSection as default
};
