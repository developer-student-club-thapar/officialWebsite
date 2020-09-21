import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "../useTheme";
import style from "styled-theming";

const Layout = (props) => {
  const theme = useTheme();
  const getBackground = style("mode", {
    light: "#fafafa",
    dark: "#202020",
  });
  const getForeground = style("mode", {
    light: "#5A5A5A",
    dark: "#EEE",
  });

  const GlobalStyle = createGlobalStyle`
      body{ 
        background-color: ${getBackground};
        color: ${getForeground};
      }
      `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default Layout;
