import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-theming";

const color = style("mode", {
  light: "black",
  dark: "#EEE",
});

export const StyledLink = styled(Link)`
  color: ${color};
`;
