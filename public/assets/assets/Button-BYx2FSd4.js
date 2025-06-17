import { jsx } from "react/jsx-runtime";
const getButtonClasses = (type, size) => {
  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };
  const types = {
    default: "bg-white text-gray-700 hover:bg-gray-100 dark:bg-dark-foreground dark:text-gray-300 dark:hover:bg-dark-foreground-hover",
    primary: "bg-primary text-white hover:bg-primary-dark dark:bg-dark-button dark:text-white dark:hover:bg-dark-button-hover",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-dark-secondary dark:text-gray-300 dark:hover:bg-dark-secondary-hover",
    success: "bg-green-500 text-white hover:bg-green-600 dark:bg-dark-success dark:text-white dark:hover:bg-dark-success-hover",
    danger: "bg-red-500 text-white hover:bg-red-600 dark:bg-dark-danger dark:text-white dark:hover:bg-dark-danger-hover",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-dark-warning dark:text-white dark:hover:bg-dark-warning-hover",
    info: "bg-blue-500 text-white hover:bg-blue-600 dark:bg-dark-info dark:text-white dark:hover:bg-dark-info-hover",
    light: "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-light dark:text-gray-300 dark:hover:bg-dark-light-hover",
    dark: "bg-gray-800 text-white hover:bg-gray-900 dark:bg-dark-dark dark:text-white dark:hover:bg-dark-dark-hover"
  };
  return `${sizes[size]} ${types[type]}`;
};
function Button({ children, className = "", classNameAdd = "", type = "default", size = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${getButtonClasses(type, size)} rounded-lg hover:shadow-sm transition duration-200 ${className} ${classNameAdd}`,
      ...props,
      children
    }
  );
}
export {
  Button as default
};
