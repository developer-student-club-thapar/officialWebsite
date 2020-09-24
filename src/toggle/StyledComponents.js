import { Paper, Typography, AppBar, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#202020",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledPaper = styled(Paper)`
  background-color: ${getBackground};
  color: ${getForeground};
`;

const getFooterBackground = style("mode", {
  light: "#f9f9f9",
  dark: "#202020",
});
const getFooterForeground = style("mode", {
  light: "#000",
  dark: "#f9f9f9",
});
export const StyledPaperFooter = styled(Paper)`
  background-color: ${getFooterBackground};
  color: ${getFooterForeground};
`;

const getLinkForeground = style("mode", {
  light: "black",
  dark: "#EEE",
});
export const StyledLink = styled(Link)`
  color: ${getLinkForeground};
`;

const getTeamBackground = style("mode", {
  light: "#fafafa",
  dark: "#111",
});
const getTeamForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledPaperTeam = styled(Paper)`
  background-color: ${getTeamBackground};
  color: ${getTeamForeground};
`;

const getTypographyForeground = style("mode", {
  light: "grey",
  dark: "#EEE",
});
export const StyledTypography = styled(Typography)`
  color: ${getTypographyForeground};
`;

const getTypographyCardForeground = style("mode", {
  light: "textSecondary",
  dark: "#EEE",
});
export const StyledTypographyCard = styled(Typography)`
  color: ${getTypographyCardForeground};
`;

const getTypographyNavForeground = style("mode", {
  light: "#3C4858",
  dark: "#EEE",
});
export const StyledTypographyNav = styled(Typography)`
  color: ${getTypographyNavForeground};
`;

const getAppBarBackground = style("mode", {
  light: "#fafafa",
  dark: "#202020",
});
const getAppBarForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledAppBar = styled(AppBar)`
  background-color: ${getAppBarBackground};
  color: ${getAppBarForeground};
`;

const getCardBackground = style("mode", {
  light: "white",
  dark: "#111",
});
const getCardForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const StyledCard = styled(Card)`
  background-color: ${getCardBackground};
  color: ${getCardForeground};
`;

const h5color = style("mode", {
  light: "#363535",
  dark: "#EEE",
});
export const Styledh5 = styled.h5`
  color: ${h5color};
`;

const h6color = style("mode", {
  light: "#565656",
  dark: "#EEE",
});
export const Styledh6 = styled.h6`
  color: ${h6color};
`;

const headingcolor = style("mode", {
  light: "#3C4858",
  dark: "#EEE",
});
export const Styledheading = styled.h5`
  color: ${headingcolor};
`;
