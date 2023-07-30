import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(typeof window !== 'undefined' && localStorage.theme ? localStorage.theme : "dark");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    console.log(localStorage.getItem('theme'));
    const root = window.document.documentElement;
    localStorage.setItem("theme", theme);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [setTheme, colorTheme];
};

export default useDarkMode;