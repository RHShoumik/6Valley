import React from "react";

import useDarkMode from "@/hooks/useDarkMode";

const BottomNavigation = () => {
  const [setTheme, colorTheme] = useDarkMode();

    const handleDarkMode = () => {
        setTheme(colorTheme);
    };

  return (
    <div>
            <button onClick={handleDarkMode}>Theme Change</button>
            <h1 className="text-fontColor dark:text-white">hello gays</h1>
        </div>
  )
}

export default BottomNavigation