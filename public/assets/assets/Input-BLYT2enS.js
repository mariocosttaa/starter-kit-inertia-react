import { jsx } from "react/jsx-runtime";
function Input({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      className: `shadow appearance-none border rounded w-full py-2 px-3
        text-gray-700 dark:text-gray-200
        bg-white dark:bg-gray-900
        border-gray-300 dark:border-gray-800
        placeholder-gray-400 dark:placeholder-gray-500
        leading-tight focus:outline-none focus:shadow-outline
        focus:border-blue-500 dark:focus:border-blue-400
        ${className}`,
      ...props
    }
  );
}
export {
  Input as default
};
