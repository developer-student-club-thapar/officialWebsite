import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slide from "react-reveal/Slide";
import { Container, CssBaseline, Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Test from "../assets/undraw_scrum_board_cesn.svg";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Loader from "./Loader";
import axios from "axios";
import Footer from "../components/Footer";
import EventAnimation from "../components/EventAnimation";

axios.defaults.baseURL = "https://api.dsctiet.tech/api";

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
    height: 350
  },
  rootCardMobile: {
    width: "auto",
    height: 350
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
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const EventsAlt = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [events, setEvents] = useState([]);
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/events/");
      setEvents(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
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
              Events
            </Typography>
            <Typography
              variant="h6"
              style={{ color: "grey", paddingTop: "20px" }}
            >
              Events are a great way to share knowledge and indulge in great
              discussions with your peers. DSC TIET has hosted a variety of
              events to teach important skills and improve the coding culture of
              our college. Check out our previous events here and stay tuned for
              future events!
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
              style={{ paddingTop: "80px", paddingLeft: "150px" }}
            >
              <EventAnimation />
            </Grid>
          </Hidden>
        </Grid>
        <Grid container spacing={2}>
          {events.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              style={{}}
              key={item.id}
              onClick={() => {
                setKey(index);
                setOpen(true);
              }}
            >
              <Hidden smDown>
                <Slide bottom>
                  <Card className={classes.rootCard}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image === null ? Test : item.image}
                        title="Event"
                      />
                      <CardContent style={{ height: "125px" }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Venue: {item.venue} <br />
                          Time: {item.time} <br />
                          Link : <a href={item.link}>Link</a>
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
                      setKey(index);
                      setOpen(true);
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={item.image === null ? Test : item.image}
                        title="Event"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Venue: {item.venue} <br />
                          Time: {item.time} <br />
                          Link : <a href={item.link}>Link</a>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Slide>
              </Hidden>
            </Grid>
          ))}
        </Grid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paperModal}>
              <p id="transition-modal-description">
                <h5>Topics Covered:</h5>
                {key != null
                  ? events[key].topics.map(item => (
                      <li>
                        <span>&nbsp;{item.name}</span>
                      </li>
                    ))
                  : ""}
                <br />
                <h5>Description:</h5>
                {key != null ? events[key].info : ""}
              </p>
              <Button variant="contained" color="primary">
                Resources
              </Button>
            </div>
          </Fade>
        </Modal>
      </Container>
      <br />
      <br />
      <Footer />
    </Fragment>
  );
};

export default EventsAlt;
