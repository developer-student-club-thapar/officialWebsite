import React, { useState, useEffect } from "react";
import { ThemeConsumer } from "styled-components";
import "./Toggle.css";
import useTheme from "../useTheme";

const ToggleMode = () => {
  const [checked, setChecked] = useState(false);

  // const toggleChecked = () => {
  //   setChecked((prev) => !prev);
  // };

  const toggleChecked = (theme) => {
    if (theme.mode === "dark") {
      setChecked(true);
    } else if (theme.mode === "light") {
      setChecked(false);
    }
  };

  const themeMode = useTheme();

  useEffect(() => {
    if (themeMode.mode === "dark") {
      setChecked(true);
    } else if (themeMode.mode === "light") {
      setChecked(false);
    }
  }, []);
  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            checked={checked}
            onChange={() => {
              toggleChecked(theme);
            }}
            onClick={(e) =>
              theme.setTheme(
                theme.mode === "dark"
                  ? { ...theme, mode: "light", paper: "light" }
                  : { ...theme, mode: "dark", paper: "dark" }
              )
            }
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
        </>
      )}
    </ThemeConsumer>
  );
};

export default ToggleMode;
