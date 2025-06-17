import { jsx } from "react/jsx-runtime";
function Input({ className = "form-control", type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className,
      ...props
    }
  );
}
export {
  Input
};
