import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import { useStyles } from "./styles/TeamStyles";
import Loader from "./Loader";
import TeamMemberCard from "../components/TeamMemberCard";
import image from "../assets/undraw_positive_attitude_xaae.svg";
import FooterAlt from "../components/Footer";
import style from "styled-theming";
import { createGlobalStyle } from "styled-components";
import { StyledTypographyheading } from "../toggle/StyledComponents";

axios.defaults.baseURL = "https://api.dsctiet.tech/api";

const getBackground = style("mode", {
  light: "#fafafa",
  dark: "#202020"
});
const getForeground = style("mode", {
  light: "#5A5A5A",
  dark: "#EEE"
});

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeground};
  }
  `;

const Team = () => {
  const classes = useStyles();
  const [leads, setLeads] = useState(null);
  const [team, setTeam] = useState(null);
  const [coleads, setColeads] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const memberRes = await axios.get("/members/");
    const leadResponse = await axios.get("/leads/");
    const coleadResponse = await axios.get("/co-leads/");
    setTeam(memberRes.data);
    setLeads(leadResponse.data);
    setColeads(coleadResponse.data);
    setLoading(false);
    // console.log(team);
    console.log(memberRes.data);
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
        <GlobalStyle />
        <CssBaseline />
        <Grid container spacing={2} className={classes.headingContainer}>
          <Grid item xs={12} className={classes.headingItem}>
            <StyledTypographyheading variant="h2" className={classes.heading}>
              Meet the Team
            </StyledTypographyheading>
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
        <Grid container spacing={2} className={classes.leadContainer}>
          {coleads &&
            coleads.map((item, index) => (
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
            <StyledTypographyheading variant="h3" className={classes.heading}>
              Core Team
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {team &&
            team.map((item, index) => (
              <Grid item xs={12} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
      <div style={{ marginTop: "10rem" }}>
        <FooterAlt />
      </div>
    </>
  );
};

export default Team;
