import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "react-reveal/Slide";
import { Container, CssBaseline, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Test from "../assets/undraw_scrum_board_cesn.svg";
import ResourcesImg from "../assets/resources.svg";
import Loader from "./Loader";
import axios from "axios";
import Footer from "../components/Footer";

axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";

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
  },
  rootCard: {
    maxWidth: 350,
    height: 300
  },
  rootCardMobile: {
    width: "auto",
    height: 300
  },
  media: {
    height: 230
  },
  grid: {
    height: 550
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
  }
}));

const Resources = () => {
  const classes = useStyles();
  const [resources, setResources] = useState([]);
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/resources/");
      setResources(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={2} className={classes.grid}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ paddingTop: "100px" }}
            >
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                Resources
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "grey", paddingTop: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                xs={false}
                sm={false}
                md={6}
                lg={6}
                xl={6}
                style={{ paddingTop: "100px" }}
              >
                <img
                  src={ResourcesImg}
                  alt="resources_img"
                  height="60%"
                  width="100%"
                />
              </Grid>
            </Hidden>
          </Grid>
          <Grid container spacing={2}>
            {resources.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                style={{}}
                key={item.id}
              >
                <Hidden smDown>
                  <Slide bottom>
                    <Card
                      className={classes.rootCard}
                      onClick={() => {
                        window.open(item.link);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={Test}
                          title={item.name}
                        />
                        <CardContent style={{ height: "125px" }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            style={{ textAlign: "center" }}
                          >
                            {item.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Slide>
                </Hidden>
                <Hidden mdUp>
                  <Slide bottom>
                    <Card
                      className={classes.rootCardMobile}
                      onClick={() => {
                        window.open(item.link);
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={Test}
                          title={item.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Slide>
                </Hidden>
              </Grid>
            ))}
          </Grid>
        </Container>
        <br />
        <br />
        <Footer />
      </Fragment>
    );
  }
};

export default Resources;
