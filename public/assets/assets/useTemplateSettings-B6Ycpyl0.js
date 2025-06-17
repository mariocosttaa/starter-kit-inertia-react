import { jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { defaultSettings } from "./TemplateSettings-B4lfXDH4.js";
const STORAGE_KEY = "template_settings";
const TemplateSettingsContext = createContext(void 0);
function TemplateSettingsProvider({ children }) {
  const [settings, setTemplateSettings] = useState(() => {
    const savedSettings = localStorage.getItem(STORAGE_KEY);
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);
  return /* @__PURE__ */ jsx(TemplateSettingsContext.Provider, { value: { settings, setTemplateSettings }, children });
}
function useTemplateSettings() {
  const context = useContext(TemplateSettingsContext);
  if (context === void 0) {
    throw new Error("useTemplateSettings must be used within a TemplateSettingsProvider");
  }
  return context;
}
export {
  TemplateSettingsProvider,
  useTemplateSettings
};
