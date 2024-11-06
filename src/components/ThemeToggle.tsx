import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 
                hover:scale-105 focus-ring"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 animate-pulse-soft" />
      ) : (
        <Sun className="w-5 h-5 animate-pulse-soft" />
      )}
    </button>
  );
}