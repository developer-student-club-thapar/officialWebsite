import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CssBaseline, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles/TeamStyles";
import Loader from "./Loader";
import TeamMemberCard from "../components/TeamMemberCard";
import image from "../assets/undraw_positive_attitude_xaae.svg";

axios.defaults.baseURL = "https://api.dsctiet.tech/api";

const Team = () => {
  const classes = useStyles();
  const [leads, setLeads] = useState(null);
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await axios.get("/team/");
    const response = await axios.get("/leads/");
    setTeam(res.data);
    setLeads(response.data);
    setLoading(false);
    // console.log(team);
    console.log(leads);
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Container fixed>
        <CssBaseline />
        <Grid container spacing={2} className={classes.headingContainer}>
          <Grid item xs={12} className={classes.headingItem}>
            <Typography variant="h2" className={classes.heading}>
              Meet the Team
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {leads &&
            leads.map((item, index) => (
              <Grid item xs={12} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={12} lg={6}>
            <img src={image} alt="core-img" className={classes.coreImage} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingItem}>
            <Typography variant="h3" className={classes.heading}>
              Core Team
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {team &&
            team[0].members.map((item, index) => (
              <Grid item xs={12} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Team;
