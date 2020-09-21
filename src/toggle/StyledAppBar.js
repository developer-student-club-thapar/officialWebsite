import { AppBar } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#202020",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledAppBar = styled(AppBar)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
