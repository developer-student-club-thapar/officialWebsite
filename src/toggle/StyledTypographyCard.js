import { Typography } from "@material-ui/core";
import styled from "styled-components";
import style from "styled-theming";

const color = style("mode", {
  light: "textSecondary",
  dark: "#EEE",
});

export const StyledTypographyCard = styled(Typography)`
  color: ${color};
`;
