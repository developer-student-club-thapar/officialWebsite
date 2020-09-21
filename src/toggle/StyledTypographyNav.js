import { Typography } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const color = style("mode", {
  light: "#3C4858",
  dark: "#EEE",
});

export const StyledTypographyNav = styled(Typography)`
  color: ${color};
`;
