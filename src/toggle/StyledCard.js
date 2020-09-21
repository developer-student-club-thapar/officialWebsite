import { Card } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "white",
  dark: "#111",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});

export const StyledCard = styled(Card)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
