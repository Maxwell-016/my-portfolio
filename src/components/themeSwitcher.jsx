import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleTheme = () => {
    setIsLightMode((prevState) => !prevState);
    document.body.classList.toggle("light", !isLightMode);
  };

  return (
    <button className="theme-button" onClick={toggleTheme}>
      {isLightMode ? (
        <FaMoon className="moon"></FaMoon>
      ) : (
        <FaSun className="sun"></FaSun>
      )}{" "}
    </button>
  );
};

export default ThemeSwitcher;
