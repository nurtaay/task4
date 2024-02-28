import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const theme = darkTheme ? "dark" : "light";

  return (
    <ThemeContext.Provider value={[theme, darkTheme, setDarkTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
