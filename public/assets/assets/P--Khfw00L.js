import { jsx } from "react/jsx-runtime";
function P({ children, className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: `text-gray-700 dark:text-gray-300 ${className}`,
      ...props,
      children
    }
  );
}
export {
  P as default
};
