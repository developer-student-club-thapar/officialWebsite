import React, { Fragment, useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import image from "../assets/undraw_positive_attitude_xaae.svg";
import image2 from "../assets/undraw_progressive_app_m9ms.svg";
import iotImage from "../assets/undraw_Firmware_jw6u.svg";
import softwareImage from "../assets/undraw_programming_2svr.svg";
import mlImage from "../assets/undraw_Growing_qwt2.svg";
import blockchainImage from '../assets/undraw_digital_currency_qpak.svg';
import axios from 'axios';

axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
    //   textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: '16px'
    },
  
    button: {
      backgroundColor: "#746B6B",
      color: "white",
    },
    rootCard: {
      maxWidth: 400,
      height: 400,
    },
    media: {
      height: 230,
    },
    grid: {
      height: 550
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 400,
      margin: "auto",
    },
    paperModal: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    large: {
        width: theme.spacing(11),
        height: theme.spacing(11),
      },
      gridMobile:{
          height:'auto'
      },
      
  }));
  
const Team = () => {
    const classes = useStyles();
    const[team,setTeam] = useState([{
			members: [],
			heads: []
    }]);
    const[loading,setLoading] = useState(true); 
    useEffect(() => {
     const fetchData = async () =>{
      const res= await axios.get('/team/');
      setTeam(res.data);
      setLoading(false);
      console.log(team);
     }
     fetchData();
    
    },[])
    const webMembers = [];
		const webHeads = [];
		const mlMembers = [];
    const mlHeads = [];
    const blockchainMembers = [];
    const blockchainHeads = [];
    const iotMembers = [];
    const iotHeads = [];
    const softwareMembers = [];
    const softwareHeads = [];
    const webMembersMobile = [];
		const webHeadsMobile = [];
		const mlMembersMobile = [];
    const mlHeadsMobile = [];
    const blockchainMembersMobile = [];
    const blockchainHeadsMobile = [];
    const iotMembersMobile = [];
    const iotHeadsMobile = [];
    const softwareMembersMobile = [];
    const softwareHeadsMobile = [];


    if (!loading) {

      // Web and App team
			for (const item of team[0].members) {

				if (!loading) {

					webMembers.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}

            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : 'Developer'}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Machine Learning Team
      for (const item of team[3].members) {

				if (!loading) {

					mlMembers.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Blockchain Team
      for (const item of team[5].members) {

				if (!loading) {

					blockchainMembers.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // IOT Team
      for (const item of team[1].members) {

				if (!loading) {

					iotMembers.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      //Software Team
      for (const item of team[2].members) {

				if (!loading) {

					softwareMembers.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Web and App Team Mobile
      for (const item of team[0].members) {

				if (!loading) {

					webMembersMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Machine Learning Team Mobile
      for (const item of team[3].members) {

				if (!loading) {

					mlMembersMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Blockchain Team Mobile
      for (const item of team[5].members) {

				if (!loading) {

					blockchainMembersMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // IOT Team Mobile
      for (const item of team[1].members) {

				if (!loading) {

					iotMembersMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Software Team Mobile
      for (const item of team[2].members) {

				if (!loading) {

					softwareMembersMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Web and App Heads
      for (const item of team[0].heads) {

				if (!loading) {

					webHeads.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // IOT heads
      for (const item of team[1].heads) {

				if (!loading) {

					iotHeads.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Machine Learning Heads
      for (const item of team[3].heads) {

				if (!loading) {

					mlHeads.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Software Team Heads
      for (const item of team[2].heads) {

				if (!loading) {

					softwareHeads.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Blockchain Heads
      for (const item of team[5].heads) {

				if (!loading) {

					blockchainHeads.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Web and App Heads Mobile
      for (const item of team[0].heads) {

				if (!loading) {

					webHeadsMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // IOT heads Mobile
      for (const item of team[1].heads) {

				if (!loading) {

					iotHeadsMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      //Software Heads Mobile
      for (const item of team[2].heads) {

				if (!loading) {

					softwareHeadsMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Machine Learning Heads Mobile
      for (const item of team[3].heads) {

				if (!loading) {

					mlHeadsMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
      // Blockchain Heads Mobile
      for (const item of team[5].heads) {

				if (!loading) {

					blockchainHeadsMobile.push(
						<Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>{item.name.length>16 ? item.name.slice(0,16) : item.name}</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>{item.role ? item.role : "Developer"}</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href={item.linkedin_url} style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href={item.github_url} style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href={item.medium_url} style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href={item.twitter_url} style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt={item.name} src={item.image} className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
					)
				}
      }
    }
    return (
        <Fragment>
          <CssBaseline />
          <Container fixed>
          <Grid container spacing={2} className={classes.grid} style={{height:'230px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "100px" }}
            >
            <Typography variant="h2" style={{ fontWeight: "bold", textAlign:'center' }}>
              Meet the Team
                        </Typography>
                 </Grid>
          </Grid>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', justifyContent:'space-around'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Shubhank Saxena</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Shubhank Saxena" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                style={{}}
            >
            <Paper className={classes.paper} style={{width:'340px', height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h5 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Aman Arora</h5>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Co-Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Aman Arora" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Shubhank Saxena</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Shubhank Saxena" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
            >
            <Paper className={classes.paper} style={{height:'130px'}} elevation={4}>
            <div style={{ paddingBottom:'100px'}}><h6 style={{marginBottom:'-24px',marginTop:'0px',marginLeft:'110px', width:'200px',fontWeight:'bold' }}>Aman Arora</h6>
            <h6 style={{marginBottom:'-60px',marginTop:'30px',marginLeft:'110px', width:'200px' }}>Co-Lead</h6>
            <div style={{marginBottom:'-85px',marginTop:'70px',marginLeft:'110px', width:'200px' }}><span><a href='#' style={{paddingRight:'8px'}}><i class="fab fa-linkedin fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-github-square fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-medium fa-2x" style={{color:'grey'}} /></a>
            <a href='#' style={{paddingRight:'8px'}}><i class="fab fa-twitter-square fa-2x" style={{color:'grey'}} /></a>
            </span>
            </div>
           <div style={{paddingBottom:'100px'}}><Avatar alt="Aman Arora" src="https://picsum.photos/seed/picsum/200/300" className={classes.large} style={{paddingBottom:'0px'}} /></div></div>
            </Paper>
            </Grid>  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'500px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingTop: "0px", paddingLeft:'250px' }}
            >
                <img src={image} style={{ height: "375px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'100px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "0px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
              Web and App Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px', paddingTop:'10px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Web and App Team
                        </Typography>
                 </Grid>
          </Grid>  
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', justifyContent:'space-around' }}>
            {webHeads}
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile}>
            {webHeadsMobile}  
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingTop: "0px", paddingLeft:'250px' }}
            >
                <img src={image2} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height: 'auto',paddingTop:'0px', justifyContent:'space-around'}}>
            {webMembers}
            </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'auto'}}>
            {webMembersMobile}
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{height:'150px',paddingTop:'50px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ paddingTop: "0px", }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             IOT Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px', paddingTop:'10px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             IOT Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px', justifyContent:'space-around'}}>
            {iotHeads}
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'00px'}}>
            {iotHeadsMobile}
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingLeft:'250px' }}
            >
                <img src={iotImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px', justifyContent:'space-around'}}>
            {iotMembers}
            </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'auto', paddingTop:'10px'}}>
              {iotMembersMobile}
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{height:'180px', paddingTop:'50px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{}}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Software Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px', paddingTop:'0px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Software Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px', justifyContent:'space-around'}}>
            {softwareHeads}
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'10px'}}>
            {softwareHeadsMobile}
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{  paddingLeft:'250px' }}
            >
                <img src={softwareImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px', justifyContent:'space-around'}}>
            {softwareMembers}
            </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'auto', paddingTop:'10px'}}>
            {softwareMembersMobile}
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{paddingTop: "50px",height:'180px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Machine Learning Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'120px', paddingTop:'10px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Machine Learning Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'10px', justifyContent:'space-around'}}>
            {mlHeads}
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{}}>
            {mlHeadsMobile}
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{ paddingLeft:'250px' }}
            >
                <img src={mlImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto',paddingTop:'0px', justifyContent:'space-around'}}>
            {mlMembers}
            </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'auto', paddingTop:'10px'}}>
            {mlMembersMobile}
            </Grid>
            </Hidden>
            <Hidden mdDown>
            <Grid container spacing={2} className={classes.grid} style={{paddingTop:'50px',height:'180px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{  }}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Blockchain Team
                        </Typography>
                 </Grid>
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'10px',height:'120px'}}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{}}
            >
            <Typography variant="h3" style={{ fontWeight: "bold", textAlign:'center' }}>
             Blockchain Team
                        </Typography>
                 </Grid>
          </Grid> 
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px', justifyContent:'space-around'}}>
            {blockchainHeads}  
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{paddingTop:'0px'}}>
            {blockchainHeadsMobile}
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'420px', paddingTop:'50px'}}>
          <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={6}
                style={{  paddingLeft:'250px' }}
            >
                <img src={blockchainImage} style={{ height: "300px", width: "800px" }}/>
            </Grid>
          </Grid>
          </Hidden>
          <Hidden mdDown>
          <Grid container spacing={2} className={classes.grid} style={{height:'auto', paddingTop:'0px',justifyContent:'space-around'}}>
            {blockchainMembers}
          </Grid>
          </Hidden>
          <Hidden lgUp>
          <Grid container spacing={2} className={classes.gridMobile} style={{height:'auto', paddingTop:'00px'}}>
            {blockchainMembersMobile}
            </Grid>
            </Hidden>
          </Container>  
        </Fragment>
    )
}

export default Team
