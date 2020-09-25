import React, { useState } from "react";
import { ThemeConsumer } from "styled-components";
import './Toggle.css';

const ToggleMode = () => {
   const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
     <ThemeConsumer>
     {(theme) => (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
         checked={checked}
          onChange={toggleChecked}
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light", paper: "light" }
                : { ...theme, mode: "dark", paper: "dark" }
            )
          }
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
       )}
   </ThemeConsumer>
  );
};

export default ToggleMode;


