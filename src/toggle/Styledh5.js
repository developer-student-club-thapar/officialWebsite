import styled from "styled-components";
import style from "styled-theming";

const h5color = style("mode", {
  light: "#363535",
  dark: "#EEE",
});

export const Styledh5 = styled.h5`
  color: ${h5color};
`;
