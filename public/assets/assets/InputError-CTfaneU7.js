import { jsx } from "react/jsx-runtime";
function InputError({ message, className = "text-danger d-block", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className, children: message }) : null;
}
export {
  InputError as default
};
