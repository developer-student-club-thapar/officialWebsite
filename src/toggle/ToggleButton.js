import React, { useState, useEffect } from "react";
import { ThemeConsumer, withTheme } from "styled-components";
import { makeStyles } from "@material-ui/core";
import daymode from "../assets/day-mode.svg";
import nightmode from "../assets/night-mode.svg";
import "./Toggle.css";

const useStyles = makeStyles({
  themeToggleWrapper: {
    background: props => (props?.theme.mode === "dark" ? "#e7e7e7" : "#202020"),
    cursor: "pointer"
  },
  themeTextLabel: {
    color: props => (props?.theme.mode === "dark" ? "#202020" : "#e7e7e7"),
    marginLeft: props => props?.theme.mode === "light" && "auto",
    marginRight: props => props?.theme.mode === "dark" && "auto",
    padding: "0 .5rem",
    fontSize: ".9rem",
    fontWeight: 800,
    cursor: "inherit"
  },
  themeToggleIcon: {
    width: "100%"
  }
});

const ToggleMode = props => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles(props);
  const toggleChecked = theme => {
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
      {theme => (
        <>
          <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            checked={checked}
          />
          <label
            onClick={e => toggleChecked(theme)}
            className={`react-switch-label ${classes.themeToggleWrapper}`}
            htmlFor={`react-switch-new`}
          >
            <label className={classes.themeTextLabel}>
              {checked ? "Light" : "Dark"}
            </label>
            <span className="react-switch-button">
              <img
                src={checked ? daymode : nightmode}
                alt="theme mode logo"
                className={classes.themeToggleIcon}
              />
            </span>
          </label>
        </>
      )}
    </ThemeConsumer>
  );
};

export default withTheme(ToggleMode);
