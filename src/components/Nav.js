import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Container } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import dsclogo from "../assets/dsc_logo.png";
import styled from "styled-components";
import "../components/styles/NavBar.css";
import {
  StyledAppBar,
  StyledLink,
  StyledTypographyNav
} from "../toggle/StyledComponents";
import ToggleMode from "../toggle/ToggleButton";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  button: {
    justifyContent: "space-between",
    fontSize: "1.2em",
    fontWeight: "300",
    textDecoration: "none"
  },
  logo: {
    height: "30px",
    objectFit: "contain"
  }
}));

const NavAlt = props => {
  window.onscroll = function () {
    if (props.location.pathname === "/") {
      scrollFunction();
    }
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 0.08 ||
      document.documentElement.scrollTop > 0.08
    ) {
      document.getElementById("logo").style.display = "block";
      document.getElementById("text").style.display = "block";
    } else {
      document.getElementById("logo").style.display = "none";
      document.getElementById("text").style.display = "none";
    }
  }
  function noscrollfunction() {
    document.getElementById("logo").style.display = "block";
    document.getElementById("text").style.display = "block";
  }
  const classes = useStyles();
  useEffect(() => {
    if (props.location.pathname === "/") {
      scrollFunction();
    } else {
      noscrollfunction();
    }
  }, [props]);

  return (
    <div className={classes.grow}>
      <ResponsiveDiv>
        <StyledAppBar position="fixed" id="appbar" className="fill">
          <Container fixed>
            <Toolbar>
              <img
                src={dsclogo}
                alt="logo"
                className={classes.logo}
                id="logo"
              />
              <StyledTypographyNav
                className={classes.title}
                variant="h6"
                noWrap
                id="text"
              >
                &nbsp; DSC TIET
              </StyledTypographyNav>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <div >
                  <StyledLink to="/" className={classes.button}>
                    Home
                  </StyledLink>
                </div>
                <div >
                  <StyledLink to="/events" className={classes.button}>
                    Events
                  </StyledLink>
                </div>
                <div >
                  <StyledLink to="/projects" className={classes.button}>
                    Projects
                  </StyledLink>
                </div>
                <div >
                  <StyledLink to="/team" className={classes.button}>
                    Team
                  </StyledLink>
                </div>
                <div>
                  <StyledLink
                    onClick={e => {
                      e.preventDefault();
                      window.location.href =
                        "https://medium.com/developer-student-clubs-tiet";
                    }}
                    target="_blank"
                    className={classes.button}
                  >
                    Blog
                  </StyledLink>
                </div>
                <div style={{ marginRight: "10px" }}>
                  <StyledLink
                    onClick={e => {
                      e.preventDefault();
                      window.location.href = "https://raw-talent.webflow.io/";
                    }}
                    target="_blank"
                    className={classes.button}
                  >
                    Podcast
                  </StyledLink>
                </div>
                <ToggleMode />
              </div>
            </Toolbar>
          </Container>
        </StyledAppBar>
      </ResponsiveDiv>
    </div>
  );
};

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export default withRouter(NavAlt);
