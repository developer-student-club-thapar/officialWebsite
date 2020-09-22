import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, CssBaseline, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import dsclogo from "../assets/dsc_logo.png";
import header from "../assets/header.png";
import Paper from "@material-ui/core/Paper";
import GestureIcon from "@material-ui/icons/Gesture";
import Team from "../assets/team.webp";
import Projects from "../assets/projects.jpg";
import EventCardImg from "../assets/events.svg";
import Sponsorships from "../assets/Sponsership.svg";
import ProjectImg from "../assets/Projects.svg";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Slack from "../assets/slack.png";
import Discord from "../assets/discord.png";
import ThaparImg from "../assets/ThaparUniversity_1.jpg";
import Footer from "../components/Footer";
import styles from "./styles/home.module.css";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 380,
    height: 450,
    marginLeft: "-25px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      marginLeft: "0px"
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  button: {
    backgroundColor: "#746B6B",
    color: "white"
  },
  rootCard: {
    maxWidth: 350,
    height: 400
  },
  rootCardMobile: {
    width: "auto",
    height: 400
  },
  media: {
    height: 270
  },
  grid: {
    height: 350,
    overflowY: "hidden",
    overflowX: "hidden",
    marginTop: "20px"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    margin: "auto"
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  item: {
    width: 200
  },
  map: {
    width: 400
  },
  gridImg: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      marginTop: "40px"
    }
  },
  TeamImg: {
    height: "80%",
    width: "90%",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      height: "80%",
      width: "100%",
      borderRadius: "4px"
    }
  },
  TeamImg2: {
    height: "80%",
    width: "90%",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      height: "80%",
      width: "90%",
      borderRadius: "4px"
    },
    [theme.breakpoints.only("md")]: {
      height: "80%",
      width: "100%",
      borderRadius: "4px"
    }
  },
  gridImg2: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  TeamGrid: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px"
    }
  },
  main: {
    // overflowX: "hidden",
  },
  CardGrid: {
    [theme.breakpoints.down("md")]: {
      marginTop: "40px",
      justifyContent: "center"
    }
  },
  ThaparImgGrid: {
    height: "100%",
    width: "90%",
    borderRadius: "4px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.only("md")]: {
      width: "140%"
    }
  }
}));

const Home = props => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed className={classes.main}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <img
              src={dsclogo}
              alt="logo"
              style={{
                display: "inline-block",
                marginTop: "50px",
                objectFit: "contain",
                height: "20%",
                width: "40%"
              }}
            />
            <h4 style={{ display: "inline-block", color: "#5A5A5A" }}>
              Developer Students Club
            </h4>
            <h6 style={{ display: "inline-block", color: "#5A5A5A" }}>
              Thapar Institute of Engineering and Technology
            </h6>
          </Grid>
          <Hidden only="xs">
            <Grid item xs={false} sm={6} md={8} lg={8} xl={8}>
              <img src={header} alt="header" width="100%" height="95%" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      <Paper
        elevation={4}
        style={{ position: "relative", top: "-20px", padding: "0px 16px" }}
      >
        <Container fixed>
          <Grid container spacing={2} style={{ paddingTop: "40px" }}>
            <Grid item xs={12}>
              <h4 style={{ color: "#3C4858", fontWeight: "500" }}>
                About The Program
              </h4>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={0} style={{}}>
            <Grid item xs={12} lg={6} xl={6} style={{}}>
              <Paper
                elevation={0}
                style={{
                  backgroundColor: "#414346",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block"
                }}
              >
                <GestureIcon style={{ color: "white", marginTop: "14px" }} />
              </Paper>
              <h5
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  color: "#363535"
                }}
              >
                What we do?
              </h5>
              <br />
              <br />

              <h6 style={{ color: "#565656" }}>
                Google collaborates with university students who are passionate
                about growing developer communities.
              </h6>

              <h6 style={{ color: "#565656" }}>
                Developer Student Club powered by Google Developers is an
                initiative to grow their knowledge on developer technologies and
                more through peer to peer workshops and events, and gain
                relevant industry experience.
              </h6>

              <br />
              <br />
              {/* <Button variant="contained" color="primary">
                {" "}
                Sign up
              </Button> */}
              <br />
              <br />
              <h6
                style={{ color: "#0066FF", cursor: "pointer" }}
                onClick={() => {
                  window.open("https://developers.google.com/community/dsc");
                }}
              >
                Learn more about the program
              </h6>
            </Grid>
            <Grid item xs={12} lg={6} xl={6} className={classes.gridImg}>
              <img src={Team} alt="img" className={classes.TeamImg} />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <h5 style={{ color: "#3C4858", fontWeight: "500" }}>
                What DSC TIET does?
              </h5>
              <br />

              <h6 style={{ color: "#565656" }}>
                Developer Student Club TIET is inspired by the Google
                Developers' Family.
              </h6>

              <h6 style={{ color: "#565656" }}>
                The motive is to create a local ecosystem of Developers in and
                around the Campus. And having fun doing it.
              </h6>

              <br />
              <br />

              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open("https://www.facebook.com/dscthapar/");
                }}
              >
                <i
                  className="fab fa-facebook-f fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open("https://www.instagram.com/dsc.tiet/");
                }}
              >
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open("https://twitter.com/dsctiet?s=09");
                }}
              >
                <i
                  className="fab fa-twitter fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCl235NVnbWqqCT7NQAIUzVQ"
                  );
                }}
              >
                <i
                  className="fab fa-youtube fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open(
                    "https://medium.com/developer-student-clubs-tiet"
                  );
                }}
              >
                <i
                  className="fab fa-medium-m fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
              <Paper
                elevation={0}
                style={{
                  color: "white",
                  backgroundColor: "#3F51B5",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  textAlign: "center",
                  display: "inline-block",
                  marginRight: "10px",
                  cursor: "pointer"
                }}
                className={styles.link}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/developer-student-club-thapar/?viewAsMember=true"
                  );
                }}
              >
                <i
                  className="fab fa-linkedin-in fa-lg"
                  style={{ marginTop: "14px" }}
                ></i>
              </Paper>
            </Grid>
            <Grid item xs={6} style={{}}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className={classes.item}
                >
                  <Paper
                    elevation={0}
                    style={{
                      backgroundColor: "#FBFBC4",
                      color: "#E4B419",
                      width: "100px",
                      height: "40px",
                      borderRadius: "8px"
                    }}
                  >
                    <h6
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        paddingTop: "8px",
                        paddingLeft: "6px"
                      }}
                    >
                      Seminars
                    </h6>
                  </Paper>
                  <h6 style={{ width: "200px", color: "#565656" }}>
                    Get updated with the latest news and announcements.
                  </h6>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className={classes.item}
                >
                  <Paper
                    elevation={0}
                    style={{
                      backgroundColor: "#C4CEFB",
                      color: "#0c50b6",
                      width: "125px",
                      height: "40px",
                      borderRadius: "8px"
                    }}
                  >
                    <h6
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        paddingTop: "8px",
                        paddingLeft: "8px"
                      }}
                    >
                      Study Jams
                    </h6>
                  </Paper>
                  <h6 style={{ width: "200px", color: "#565656" }}>
                    Hands-on experience with the community members.
                  </h6>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className={classes.item}
                >
                  <Paper
                    elevation={0}
                    style={{
                      backgroundColor: "#FDD2D3",
                      color: "#DF4D13",
                      width: "90px",
                      height: "40px",
                      borderRadius: "8px"
                    }}
                  >
                    <h6
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        paddingTop: "8px",
                        paddingLeft: "6px"
                      }}
                    >
                      Projects
                    </h6>
                  </Paper>
                  <h6 style={{ width: "200px", color: "#565656" }}>
                    Projects with a social impact that help a lot of people.
                  </h6>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  className={classes.item}
                >
                  <Paper
                    elevation={0}
                    style={{
                      backgroundColor: "#D8FDD2",
                      color: "#0BB853",
                      width: "125px",
                      height: "40px",
                      borderRadius: "8px"
                    }}
                  >
                    <h6
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        paddingTop: "8px",
                        paddingLeft: "8px"
                      }}
                    >
                      Hackathons
                    </h6>
                  </Paper>
                  <h6 style={{ width: "200px", color: "#565656" }}>
                    Dream. Explore. Wonder. Build it Together.
                  </h6>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={3} style={{ marginTop: "50px" }}>
              <Grid item xs={12} lg={6} xl={6} className={classes.gridImg2}>
                <img src={Projects} alt="img" className={classes.TeamImg2} />
              </Grid>
              <Grid item xs={12} lg={6} xl={6} className={classes.TeamGrid}>
                <Paper
                  elevation={0}
                  style={{
                    backgroundColor: "#414346",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    textAlign: "center",
                    display: "inline-block"
                  }}
                >
                  <WhatshotIcon style={{ color: "white", marginTop: "14px" }} />
                </Paper>
                <h5
                  style={{
                    display: "inline-block",
                    marginLeft: "10px",
                    color: "#363535"
                  }}
                >
                  The Team
                </h5>
                <br />
                <br />

                <h6 style={{ color: "#565656" }}>
                  These are the amazing bunch of people who make the community
                  what it is. Who are the Backbone of Developer Student Club,
                  TIET and ensure that we can forge ahead
                  <span style={{ color: "#3F51B5" }}> #WhateverItTakes!</span>
                </h6>

                <h6 style={{ color: "#565656" }}>
                  They take the time out from their daily grind to give back to
                  the members and empower them to become bigger
                  (Metaphorically). And Better.
                </h6>

                <br />

                <h6
                  style={{ color: "#0066FF", cursor: "pointer" }}
                  onClick={() => {
                    props.history.push("/team");
                  }}
                >
                  Meet the Team
                </h6>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={3} className={classes.CardGrid}>
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={EventCardImg}
                    title="Events"
                  />
                  <CardContent style={{ height: "120px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Events
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Attend Study Jams/ Hackathons/ Developer Conferences to
                      learn more about the latest technologies.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      props.history.push("/events");
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Sponsorships}
                    title="Sponsorships"
                  />
                  <CardContent style={{ height: "120px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Sponsorships
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Get Brand exposure and elevate your business identity
                      within the Community.You can help us by funding our
                      projects too!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    Send Proposal
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={ProjectImg}
                    title="Projects"
                  />
                  <CardContent style={{ height: "120px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Projects
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Help us make some really cool projects by funding us.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      props.history.push("/projects");
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h5 style={{ color: "#3C4858", fontWeight: "500" }}>
                Join the conversation
              </h5>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item lg={6} xl={6}>
              <br />

              <h6 style={{ color: "#565656" }}>
                Join our Slack Channel to know more about the Activities,
                Sessions and other fun stuff.
              </h6>

              <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "#4A154B", color: "white" }}
                onClick={() => {
                  window.open(
                    "https://join.slack.com/t/dscthapar-gspatiala/shared_invite/enQtNzU2MzA2MjcxNzkyLTkwNDRiNWMzYjUzYjNjYjM0M2JhMDgwOTI3MGQwYWU1NzNlNGMxZGVhNzk0MGZiYTI5YzgwZDhiMTk1MjE4M2M"
                  );
                }}
              >
                Join us on <img src={Slack} height="30px" alt="slack" />
              </Button>
            </Grid>
            <Grid item lg={6} xl={6}>
              <br />

              <h6 style={{ color: "#565656" }}>
                Join our Discord Channel to know more about the Activities,
                Sessions and other fun stuff.
              </h6>

              <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "#2C2F23", color: "white" }}
                onClick={() => {
                  window.open("https://discord.gg/Ma9ZAGJ");
                }}
              >
                Join us on <img src={Discord} height="30px" alt="discord" />
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item lg={6} xl={6}>
              <img
                src={ThaparImg}
                alt="img"
                className={classes.ThaparImgGrid}
              />
            </Grid>
            <Grid item lg={6} xl={6}>
              <h5 style={{ color: "#3C4858", fontWeight: "500" }}>
                About TIET
              </h5>
              <br />

              <h6 style={{ color: "#565656" }}>
                Thapar Institute of Engineering and Technology, previously known
                as Thapar University, is a private institute deemed to be
                university, in Patiala. It was founded in 1956 by Karam Chand
                Thapar. The institute has been granted full autonomy and the
                status of deemed-to-be-university by the University Grants
                Commission.
              </h6>

              <br />
              <h6
                style={{ color: "#0066FF", cursor: "pointer" }}
                onClick={() => {
                  window.open("http://www.thapar.edu/");
                }}
              >
                Learn More
              </h6>
            </Grid>
          </Grid>
          <br />
          <br />
          <br />
          <br />
        </Container>
      </Paper>
      <Grid
        container
        spacing={0}
        style={{ marginTop: "-10px", height: "400px" }}
      >
        <Grid item xs={12}>
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: "0" }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJxbWHSlMvEDkRs4LjN9M-Hdo&key=AIzaSyB3JAqF0AMxgbfnGtt0R5Yk0MaBe9p1P5s"
            allowFullScreen
            title="Map"
          ></iframe>
        </Grid>
      </Grid>
      <Footer />
    </Fragment>
  );
};

export default Home;
