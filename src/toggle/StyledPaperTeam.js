import { Paper } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#111",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledPaperTeam = styled(Paper)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
