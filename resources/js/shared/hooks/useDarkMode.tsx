import { useState, useEffect } from 'react';
import { getTheme, setThemeDark, setThemeLight } from '@/js/shared/cookies/theme';

const isBrowser = typeof window !== 'undefined';

export default function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!isBrowser) return;

    const savedTheme = getTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && !prefersDark);
    setIsDarkMode(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setThemeDark();
    } else {
      document.documentElement.classList.remove('dark');
      setThemeLight();
    }
  }, []);

  useEffect(() => {
    if (!isBrowser) return;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      setThemeDark();
    } else {
      document.documentElement.classList.remove('dark');
      setThemeLight();
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  return [isDarkMode, toggleTheme];
}

