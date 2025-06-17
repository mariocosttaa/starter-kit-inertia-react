import { useState, useEffect } from "react";
import Cookies from "js-cookie";
const setThemeDark = () => {
  Cookies.set("theme", "dark", { expires: 365 });
};
const setThemeLight = () => {
  Cookies.set("theme", "light", { expires: 365 });
};
const getTheme = () => {
  return Cookies.get("theme") || null;
};
function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = getTheme();
    return savedTheme === "dark" || !savedTheme && !window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setThemeDark();
    } else {
      document.documentElement.classList.remove("dark");
      setThemeLight();
    }
  }, [isDarkMode]);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return [isDarkMode, toggleTheme];
}
export {
  useDarkMode as default
};
