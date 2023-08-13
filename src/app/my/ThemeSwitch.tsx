"use client";

import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const darkKiller2 = theme === "dark";

  console.log("dark : ", darkKiller2);

  const toggleTheme = () => setTheme(darkKiller2 ? "light" : "dark");

  return (
    <button
      onClick={() => toggleTheme()}
      className="dark:bg-green-900 dark:bg-opacity-20 dark:text-gray-50 bg-green-100 text-gray-500 pl-2 pr-2 rounded-md text-xs p-1"
    >
      toggle button
    </button>
  );
};
