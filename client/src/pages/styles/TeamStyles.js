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
  subheading: {
    marginTop: "20px",
    paddingBottom: "0px",
  },
  leadContainer: {
    marginTop: "5%",
    justifyContent: "space-around",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "center"
    }
  },
  coreImage: {
    height: "375px",
    objectFit: "contain",
    [theme.breakpoints.only("xs")]: {
      width: "100%"
    }
  }
}));
