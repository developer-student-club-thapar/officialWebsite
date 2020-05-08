import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { themeCreator } from "./themes/base";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProvider: React.FC = props => {
  // Read current theme from localStorage or maybe from an api
  const curThemeName = localStorage.getItem("appTheme") || "lightTheme";

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName);

  // Get the theme object by theme name
  const theme = themeCreator(themeName);

  const setThemeName = (themeName: string): void => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
