import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CodeIcon from "@material-ui/icons/Code";
import GroupIcon from "@material-ui/icons/Group";
import BookIcon from "@material-ui/icons/Book";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex"
  },
  button: {
    justifyContent: "space-around",
    display: "flex",
    margin: "auto",
    fontSize: "1.5em",
    fontWeight: "300",
    textDecoration: "none",
    color: "black"
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
}));

const Nav = props => {
  const classes = useStyles();

  const [sideDrawer, setSideDrawer] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSideDrawer(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Home",
          "Events",
          "Resources",
          "Projects",
          "Team",
          "Blog",
          "Podcast"
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={e => {
              if (text === "Podcast") {
                e.preventDefault();
                window.location.href = "https://raw-talent.webflow.io/";
                return null;
              }
              text !== "Home"
                ? props.history.push(`/${text.toLowerCase()}`)
                : props.history.push("/");
            }}
          >
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <EventIcon />}
              {index === 2 && <LibraryBooksIcon />}
              {index === 3 && <CodeIcon />}
              {index === 4 && <GroupIcon />}
              {index === 5 && <BookIcon />}
              {index === 6 && <ChatIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
        <ResponsiveDiv>
          <AppBar position="static" color="white" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <Link to="/" className={classes.button}>
                Home
              </Link>
              <Link to="/events" className={classes.button}>
                Events
              </Link>
              <Link to="#" className={classes.button}>
                Resources
              </Link>
              <Link to="/projects" className={classes.button}>
                Projects
              </Link>
              <Link to="/team" className={classes.button}>
                Team
              </Link>
              {/* <Link to='/achievements' className={classes.button}>Achievements</Link> */}
              <Link to="#" className={classes.button}>
                Blog
              </Link>
              <Link
                onClick={e => {
                  e.preventDefault();
                  window.location.href = "https://raw-talent.webflow.io/";
                }}
                target="_blank"
                className={classes.button}
              >
                Podcast
              </Link>
            </Toolbar>
          </AppBar>
        </ResponsiveDiv>
        <MobileDiv>
          <AppBar position="static" color="white">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                DSC TIET
              </Typography>
            </Toolbar>
          </AppBar>
          <SwipeableDrawer
            anchor={"left"}
            open={sideDrawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </SwipeableDrawer>
        </MobileDiv>
      </div>
    </Fragment>
  );
};

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const MobileDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default withRouter(Nav);
