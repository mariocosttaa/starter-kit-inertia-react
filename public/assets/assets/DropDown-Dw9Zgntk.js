import { jsxs, jsx } from "react/jsx-runtime";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { q, Y as Ye } from "../ssr.js";
import ge, { useRef, useEffect } from "react";
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
function DropDown({ activeValue, options, onChange, classNameAdd }) {
  q();
  const [isDropdownOpen, setIsDropdownOpen] = ge.useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      var _a;
      if (!((_a = dropdownRef.current) == null ? void 0 : _a.contains(event.target))) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return /* @__PURE__ */ jsxs("div", { ref: dropdownRef, className: "relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: toggleDropdown,
        className: `cursor-pointer rounded-lg border-none bg-transparent px-1 py-1 text-sm text-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-dark dark:bg-glass-dark dark:text-gray-300 ${classNameAdd}`,
        children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
          activeValue,
          " ",
          isDropdownOpen ? /* @__PURE__ */ jsx(ChevronUpIcon, { className: "ml-1 h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronDownIcon, { className: "ml-1 h-4 w-4" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `absolute left-0 top-full mt-2 cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 dark:bg-glass-dark ${isDropdownOpen ? "scale-y-100" : "scale-y-0"}`,
        style: { transformOrigin: "top", width: "170px" },
        children: options.map((option) => {
          if (option.link) {
            const Component = option.link.spa ? Ye : "a";
            return /* @__PURE__ */ jsxs(
              Component,
              {
                href: option.link.url,
                method: option.link.method || "get",
                className: "flex w-full items-center px-1 py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-primary dark:text-gray-300 dark:hover:text-accent-dark",
                onClick: () => {
                  setIsDropdownOpen(false);
                  onChange == null ? void 0 : onChange(option.value);
                },
                children: [
                  option.icon && (typeof option.icon === "string" ? /* @__PURE__ */ jsx("img", { src: option.icon, alt: option.label, className: "mr-2 inline-block", width: 20 }) : /* @__PURE__ */ jsx("span", { className: "mr-2 inline-block", children: option.icon })),
                  /* @__PURE__ */ jsx("span", { children: option.label }),
                  " "
                ]
              },
              option.value
            );
          } else {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex w-full items-center px-1 py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-primary dark:text-gray-300 dark:hover:text-accent-dark",
                onClick: () => {
                  setIsDropdownOpen(false);
                  onChange == null ? void 0 : onChange(option.value);
                },
                children: [
                  option.icon && (typeof option.icon === "string" ? /* @__PURE__ */ jsx("img", { src: option.icon, alt: option.label, className: "mr-2 inline-block", width: 20 }) : /* @__PURE__ */ jsx("span", { className: "mr-2 inline-block", children: option.icon })),
                  /* @__PURE__ */ jsx("span", { children: option.label }),
                  " "
                ]
              },
              option.value
            );
          }
        })
      }
    )
  ] });
}
export {
  DropDown as default
};
