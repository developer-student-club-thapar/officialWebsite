import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Logo from "../assets/unnamed.png";
import { Container, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  img: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));

const FooterAlt = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper
        elevation={0}
        style={{
          borderStyle: "solid",
          borderWidth: "1px 0px 0px 0px",
          borderColor: "grey",
          backgroundColor: "#f9f9f9"
        }}
      >
        <Container fixed>
          <Grid container spacing={2} style={{ paddingTop: "5px" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className={classes.img}
            >
              <img src={Logo} height="90%" width="60%" alt="Logo"></img>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ textAlign: "center" }}
            >
              <Hidden only="xs">
                <h6>
                  © Copyright 2020{" "}
                  <span style={{ fontWeight: "500" }}>
                    DSC TIET | Developed with
                  </span>{" "}
                  ❤️
                </h6>
              </Hidden>
              <Hidden smUp>
                <p>
                  © Copyright 2020{" "}
                  <span style={{ fontWeight: "500" }}>
                    DSC TIET | Developed with
                  </span>{" "}
                  ❤️
                </p>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default FooterAlt;
