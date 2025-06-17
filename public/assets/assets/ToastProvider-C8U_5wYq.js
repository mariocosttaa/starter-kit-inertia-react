import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ToastContainer } from "react-toastify";
const ToastProvider = ({ children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    children,
    /* @__PURE__ */ jsx(ToastContainer, { position: "top-right", autoClose: 3e3, hideProgressBar: false, closeOnClick: true, pauseOnHover: true })
  ] });
};
export {
  ToastProvider
};
