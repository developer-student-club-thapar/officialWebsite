import React, { Fragment } from "react";
import "./styles/About.css";
import styled from "styled-components";
import AboutImage from "../assets/undraw_about_us_page_ee1k.svg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  button: {
    backgroundColor: "#746B6B",
    color: "white"
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={6}
            xl={6}
            style={{ paddingTop: "90px" }}
          >
            {/* <Paper className={classes.paper}> */}
            <img src={AboutImage} height="100%" width="100%" alt="image"></img>
            {/* </Paper> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={6}
            xl={6}
            style={{ paddingTop: "90px", paddingLeft: "90px" }}
          >
            {/* <Paper className={classes.paper}> */}
            <Typography variant="h2" style={{ textAlign: "left" }}>
              About Us
            </Typography>
            <Typography variant="h5" style={{ textAlign: "left" }}>
              Google DSC is a Developer Student Club which is a technical
              community that combines all the university students, and all the
              other students who learn, share ideas and come up with viable
              projects that are likely to solve day to day universe problems.
              Additionally, it aims for university students to help them build
              their mobile, web, machine learning, cloud skills. The clubs are
              intended as a space for students to try out new ideas and
              collaborate to solve mobile and web development problems.
            </Typography>
            <div style={{ paddingLeft: "360px", paddingTop: "15px" }}>
              <Button
                variant="contained"
                className={classes.button}
                size="large"
              >
                {" "}
                View the Team{" "}
              </Button>
            </div>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default About;
