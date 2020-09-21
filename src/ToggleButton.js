import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./Button";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          variant="primary"
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light", paper: "light" }
                : { ...theme, mode: "dark", paper: "dark" }
            )
          }
        >
          Toggle Mode
        </Button>
      )}
    </ThemeConsumer>
  );
}
