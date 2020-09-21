import styled from "styled-components";
import style from "styled-theming";

const headingcolor = style("mode", {
  light: "#3C4858",
  dark: "#EEE",
});

export const Styledheading = styled.h5`
  color: ${headingcolor};
`;
