import { Paper } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#f9f9f9",
  dark: "#202020",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#f9f9f9",
});

export const StyledPaperFooter = styled(Paper)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
