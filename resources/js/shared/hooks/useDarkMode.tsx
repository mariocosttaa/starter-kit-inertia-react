import { useState, useEffect } from 'react';
import { getTheme, setThemeDark, setThemeLight } from '@/js/shared/cookies/theme';

export default function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = getTheme();
    return savedTheme === 'dark' || (!savedTheme && !window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {

        document.documentElement.classList.add('dark');
        setThemeDark();

    } else {
         document.documentElement.classList.remove('dark');
         setThemeLight();
    }


  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev); // Explicitly typed function
  return [isDarkMode, toggleTheme];
}

