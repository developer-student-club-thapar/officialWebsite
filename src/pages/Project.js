import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
import ProjectImg from "../assets/undraw_code_typing_7jnv.svg";
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

const ProjectsAlt = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [projects, setProjects] = useState([]);
  const [key, setKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/projects/");
      setProjects(result.data);
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
                Projects
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "grey", paddingTop: "20px" }}
              >
                We at DSC TIET believe in doing it and learning via projects.
                That's why, we have amazing projects that we are working on. Go
                ahead and look for their details. Feel free to contribute on
                GitHub!
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
                  src={ProjectImg}
                  alt="event_img"
                  height="60%"
                  width="100%"
                />
              </Grid>
            </Hidden>
          </Grid>
          <Grid container spacing={2}>
            {projects.map((item, index) => (
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
                          title="Project"
                        />
                        <CardContent style={{ height: "125px" }}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Project Lead: {item.project_lead.name} <br />
                            Github Link :<a href={item.github_link}>Link</a>
                            <br />
                            <br />
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
                          title="Project"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Project Lead: {item.project_lead.name} <br />
                            Github Link :<a href={item.github_link}>Link</a>
                            <br />
                            <br />
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
                  <h5>Project Description:</h5>
                  {key != null ? projects[key].description : ""}
                  <br />
                  <h5>Members:</h5>
                  {key != null
                    ? projects[key].members.map(item => (
                        <li>
                          <span> {item.name}</span>
                        </li>
                      ))
                    : ""}
                </p>
              </div>
            </Fade>
          </Modal>
        </Container>
        <br />
        <br />
        <Footer />
      </Fragment>
    );
  }
};

export default ProjectsAlt;
