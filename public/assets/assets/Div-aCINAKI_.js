import { jsx } from "react/jsx-runtime";
function Div({ children, ...props }) {
  return /* @__PURE__ */ jsx("div", { ...props, children });
}
export {
  Div as default
};
