import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: "16px",
    height: "130px",
    width: "340px",
    [theme.breakpoints.only("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.only("xs")]: {
      height: "120px",
      width: "100%"
    },
    "&:hover": {
      transition: "all .25s linear",
      boxShadow: "-1px 8px 8px 0px rgba(0,0,0,0.4)"
    }
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    [theme.breakpoints.only("sm")]: {
      width: theme.spacing(12),
      height: theme.spacing(12)
    }
  },
  name: {
    marginBottom: "-24px",
    marginTop: "0px",
    marginLeft: "110px",
    width: "200px",
    fontWeight: "bold",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",

    [theme.breakpoints.only("xs")]: {
      fontSize: "1.4rem",
      width: "130px"
    }
  },
  role: {
    marginBottom: "-60px",
    marginTop: "30px",
    marginLeft: "110px",
    width: "200px"
  },
  linkContainer: {
    marginBottom: "-85px",
    marginTop: "70px",
    marginLeft: "110px",
    width: "200px"
  }
}));
