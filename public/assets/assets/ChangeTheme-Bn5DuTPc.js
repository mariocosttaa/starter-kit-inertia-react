import { jsx } from "react/jsx-runtime";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import useDarkMode from "./useDarkMode-DW9zJM-O.js";
import "react";
import "js-cookie";
function ChangeTheme() {
  const [isDarkMode, toggleTheme] = useDarkMode();
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "flex items-center justify-center p-2 rounded-full bg-transparent dark:bg-glass-dark text-gray-600 dark:text-gray-300 hover:bg-primary dark:hover:bg-accent-dark hover:text-white dark:hover:text-white transition-all duration-200",
      children: isDarkMode ? /* @__PURE__ */ jsx(SunIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(MoonIcon, { className: "w-4 h-4" })
    }
  );
}
export {
  ChangeTheme as default
};
