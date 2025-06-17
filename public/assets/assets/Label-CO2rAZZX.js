import { jsx } from "react/jsx-runtime";
function Label({ children, htmlFor, className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "label",
    {
      htmlFor,
      className: `block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 ${className}`,
      ...props,
      children
    }
  );
}
export {
  Label as default
};
