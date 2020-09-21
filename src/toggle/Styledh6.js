import styled from "styled-components";
import style from "styled-theming";

const h6color = style("mode", {
  light: "#565656",
  dark: "#EEE",
});

export const Styledh6 = styled.h6`
  color: ${h6color};
`;
