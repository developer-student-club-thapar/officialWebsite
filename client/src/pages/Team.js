import React, { useRef,useEffect, useState } from "react";
import axios from "axios";
import styles from './styles/team.module.css';
import { Container, CssBaseline, FormControl, Grid, MenuItem, InputLabel } from "@material-ui/core";
import { useStyles } from "./styles/TeamStyles";
import Loader from "./Loader";
import TeamMemberCard from "../components/TeamMemberCard";
import image from "../assets/undraw_positive_attitude_xaae.svg";
import FooterAlt from "../components/Footer";
import style from "styled-theming";
import { createGlobalStyle } from "styled-components";
import { StyledTypographyheading } from "../toggle/StyledComponents";
import Select, { SelectChangeEvent } from '@mui/material/Select';


axios.defaults.baseURL = "https://api.dsctiet.com/api";

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
  const [mentors, setMentors] = useState(null);
  const [coleads, setColeads] = useState(null);
  const [core, setCore] = useState(null);
  const [loading, setLoading] = useState(true);
  const back = useRef();


  const [year, setYear] = useState(22)
  const [yearList, setYearList] = useState(null)

  const fetchData = async () => {
    axios.get(`/members/20${year+1}`)
    .then((res) => res.data)
    .then((data) => {
      data.lead.forEach((lead) => {
        lead.role = "Lead";
      })
      setLeads(data.lead);
      data["co-lead"].forEach((colead) => {
        colead.role = "Co-Lead";
      })
      setColeads(data["co-lead"])
      data.mentor.forEach((mentor) => {
        mentor.role = "Mentor";
      })
      setMentors(data.mentor);
      data.core.forEach((core) => {
        core.role = "Core";
      })
      setCore(data.core);
      setLoading(false);
    })
  };

  const handleChange = (event) => {
    setYear(event.target.value);
  }

  const yearListFetch = async ()=>{
    const tenure = await axios.get('years/')
    const tenureData = tenure.data
    const yearData = []

    tenureData.map((year)=>{
      yearData.push(year["tenure"].substring(2,4))
    })

    setYearList([...yearData])
  }

  useEffect(() => {
    yearListFetch()
  },[])

  useEffect(() => {
    if(yearList !== null){
      setYear(yearList[0])
    }
  },[yearList])

  useEffect(() => {
    // console.log("OK")
    fetchData();
    //eslint-disable-next-line
  }, [year]);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className={styles.bgConfetti}>
      <Container fixed>
        <GlobalStyle />
        <CssBaseline />
        <Grid container spacing={2} className={classes.headingContainer}>
          <Grid item xs={12} className={classes.headingItem}>
            <StyledTypographyheading variant="h2" className={classes.heading} ref={back}>
              Meet the Team of 20
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120}} classes={classes.heading} >
                  <Select
                    variant="standard"
                    sx={{marginTop: -1.4, marginLeft:0.5 ,fontSize:"3.6rem", fontWeight: 'bold', color: "#0086b3",  ['@media (max-width:600px)']: {fontSize:"2.5rem"}}}
                    value={year}
                    onChange={handleChange}
                  >
                    {yearList &&
                      yearList.map((year)=>{
                        return <MenuItem value={parseInt(year)}>{year}</MenuItem>
                      })
                    }
                  </Select>
              </FormControl>
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingItem} justify="center">
            <StyledTypographyheading variant="h3" className={[classes.heading, classes.subheading]}>
              {leads.length !== 0 ? "Lead" : ""}
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {
            leads &&
            leads.map((item, index) => (
              <Grid item xs={11} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))
          }
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingItem} justify="center">
            <StyledTypographyheading variant="h3" className={[classes.heading, classes.subheading]}>
              {coleads.length !== 0 && "Co-Lead" }
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {coleads &&
            coleads.map((item, index) => (
              <Grid item xs={11} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingItem} justify="center">
            <StyledTypographyheading variant="h3" className={[classes.heading, classes.subheading]}>
              {mentors.length !== 0 ? "Mentor" : "Data Not Available" }
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {mentors &&
            mentors.map((item, index) => {item["role"] = "Mentor";return (
              <Grid item xs={11} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            )})}
        </Grid>
        
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={12} lg={6}>
            <img src={image} alt="core-img" className={classes.coreImage} />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} className={classes.headingItem}>
            <StyledTypographyheading variant="h3" className={classes.heading}>
              {core.length !== 0 && "Core" }
            </StyledTypographyheading>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.leadContainer}>
          {core &&
            core.map((item, index) => (
              <Grid item xs={11} sm={9} lg={4} key={index}>
                <TeamMemberCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
      </div>
      <div style={{ marginTop: "10rem" }}>
        <FooterAlt />
      </div>
    </>
  );
};

export default Team;
