import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import useDarkMode from '../../../shared/hooks/useDarkMode';

export default function ChangeTheme() {
  const [isDarkMode, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-transparent dark:bg-glass-dark text-gray-600 dark:text-gray-300 hover:bg-primary dark:hover:bg-accent-dark hover:text-white dark:hover:text-white transition-all duration-200"
    >
      {isDarkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </button>
  );
}

