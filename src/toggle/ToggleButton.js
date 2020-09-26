import React, { useState, useEffect } from "react";
import { ThemeConsumer, withTheme } from "styled-components";
import "./Toggle.css";

const ToggleMode = (props) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = (theme) => {
    theme.setTheme(
      theme.mode === "dark"
        ? { ...theme, mode: "light", paper: "light" }
        : { ...theme, mode: "dark", paper: "dark" }
    );
  };

  useEffect(() => {
    if (props.theme.mode === "dark") {
      setChecked(true);
    } else if (props.theme.mode === "light") {
      setChecked(false);
    }
  }, [props.theme]);

  return (
    <ThemeConsumer>
      {(theme) => (
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            checked={checked}
            onClick={(e) => toggleChecked(theme)}
          />
          <label className="react-switch-label" htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`} />
          </label>
        </>
      )}
    </ThemeConsumer>
  );
};

export default withTheme(ToggleMode);
