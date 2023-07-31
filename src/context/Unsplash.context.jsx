import { useState, createContext, useContext, useEffect } from "react";

const UnsplashContext = createContext();

export const UnsplashContextProvider = ({ children }) => {
  const getInitialDarkTheme = () => {
    const getIsDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storedDarkTheme = JSON.parse(window.localStorage.getItem("theme"));
    return storedDarkTheme || getIsDarkTheme;
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkTheme());
  const [searchTerm, setSearchTerm] = useState("hello");

  const toggleTheme = () => {
    const changeTheme = !isDarkTheme;
    setIsDarkTheme(changeTheme);
    window.localStorage.setItem("theme", JSON.stringify(changeTheme));
  };

  const value = { isDarkTheme, toggleTheme, searchTerm, setSearchTerm };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <UnsplashContext.Provider value={value}>
      {children}
    </UnsplashContext.Provider>
  );
};

export const useUnsplashContext = () => {
  return useContext(UnsplashContext);
};
