import { jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import SelectReact from "react-select";
function Select({ options, defaultValue, className, placeholder, required, onChange, onFocus }) {
  const { t: __ } = useTranslation(["static-text"]);
  return /* @__PURE__ */ jsx(
    SelectReact,
    {
      options,
      defaultValue,
      className,
      placeholder: placeholder || __("Select"),
      isClearable: !required,
      onChange,
      onFocus
    }
  );
}
export {
  Select as default
};
