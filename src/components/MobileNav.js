import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import EventIcon from "@material-ui/icons/Event";
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
        {["Home", "Events", "Projects", "Team", "Blog", "Podcast"].map(
          (text, index) => (
            <ListItem
              button
              key={text}
              onClick={e => {
                if (text === "Podcast") {
                  e.preventDefault();
                  window.location.href = "https://raw-talent.webflow.io/";
                  return null;
                } else if (text === "Blog") {
                  e.preventDefault();
                  window.location.href =
                    "https://medium.com/developer-student-clubs-tiet";
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
                {index === 2 && <CodeIcon />}
                {index === 3 && <GroupIcon />}
                {index === 4 && <BookIcon />}
                {index === 5 && <ChatIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
        <MobileDiv>
          <AppBar position="fixed" color="white" className>
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
const MobileDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default withRouter(Nav);
