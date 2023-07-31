import React from "react";
import { useUnsplashContext } from "../context/Unsplash.context";
import { FiSun } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";

const ToggleThemeColor = () => {
  const { isDarkTheme, toggleTheme } = useUnsplashContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <FiSun className=" toggle-icon light-icon" />
        ) : (
          <MdNightlight className="toggle-icon dark-icon" />
        )}
      </button>
    </section>
  );
};

export default ToggleThemeColor;
