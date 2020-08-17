import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Recruitments = props => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeA8_-Uy2tDzRWOdqWH8WTFDJ_ny0ju5RiyyXxVOEHRETOkWw/viewform?embedded=true"
        width="640"
        height="1836"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
    </iframe>
    </div>
  );
};

export default Recruitments;