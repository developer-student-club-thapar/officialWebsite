import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  headingContainer: {
    marginTop: "80px",
    [theme.breakpoints.down("md")]: {
      marginTop: "100px"
    }
  },
  headingItem: {
    textAlign: "center"
  },
  heading: {
    fontWeight: "bold",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.6rem"
    }
  },
  leadContainer: {
    marginTop: "5%",
    justifyContent: "space-around"
  },
  coreImage: {
    height: "375px",
    objectFit: "contain",
    [theme.breakpoints.only("xs")]: {
      width: "100%"
    }
  }
}));
