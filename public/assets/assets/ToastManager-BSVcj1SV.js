import { q } from "../ssr.js";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react/jsx-runtime";
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
import "react-i18next";
import "i18next-http-backend";
import "i18next-browser-languagedetector";
import "js-cookie";
const defaultOptions = {
  position: "top-right",
  autoClose: 3e3,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};
const useToast = () => {
  const showToast = (message, type = "info") => {
    toast[type](message, defaultOptions);
  };
  return {
    success: (message) => showToast(message, "success"),
    error: (message) => showToast(message, "error"),
    warning: (message) => showToast(message, "warning"),
    info: (message) => showToast(message, "info")
  };
};
const ToastManager = () => {
  const toast2 = useToast();
  const { toast: pageToast } = q().props;
  useEffect(() => {
    if ((pageToast == null ? void 0 : pageToast.type) && (pageToast == null ? void 0 : pageToast.message)) {
      toast2[pageToast.type](pageToast.message);
    }
  }, []);
  return null;
};
export {
  ToastManager
};
