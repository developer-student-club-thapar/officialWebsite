import { Paper } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#000",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledPaper = styled(Paper)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
