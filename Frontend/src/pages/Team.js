/** @format */

import React, { Component } from "react";
import CardHead from "../components/Team/CardHead";
import NoBorderCard from "../components/Team/NoBorderCard";
import image from "../assets/undraw_positive_attitude_xaae.svg";
import image2 from "../assets/undraw_progressive_app_m9ms.svg";
import iotImage from "../assets/undraw_Firmware_jw6u.svg";
import softwareImage from "../assets/undraw_programming_2svr.svg";
import mlImage from "../assets/undraw_Growing_qwt2.svg";
import publicityImage from "../assets/undraw_social_girl_562b.svg";
import prototypingImage from "../assets/undraw_3d_modeling_h60h.svg";
import "./styles/Team.css";
import Nav from "../components/Nav";
import axios from "axios";
// import Nav from "../components/Nav";

axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";

export default class Team extends Component {
  state = {
    teamWiseDetails: [
      {
        members: [],
        heads: []
      }
    ],
    isLoading: true
  };

  fetchTeamData = () => {
    axios.get("/team/").then(res => {
      let data = res.data;
      this.setState({ teamWiseDetails: data, isLoading: false }, () => {
        console.log(this.state.teamWiseDetails);
      });
    });
  };

  componentWillMount() {
    this.setState({ isLoading: true });
    this.fetchTeamData();
  }

  /* 	sampleRendering = () => {
			if (!this.state.isLoading) {
				this.state.teamWiseDetails[0].members.map((item, index) => {
					return (
						<NoBorderCard
							title={item.role}
							name={item.name}
							image={item.image}
						/>
					);
				})
			}
		} */

  render() {
    const webMembers = [];
    const webHeads = [];
    const mlMembers = [];
    const mlHeads = [];

    if (!this.state.isLoading) {
      for (const item of this.state.teamWiseDetails[0].members) {
        if (!this.state.isLoading) {
          webMembers.push(
            <NoBorderCard
              title={item.role}
              name={item.name}
              image={item.image}
              linkedin={item.linkedin_url}
              github={item.github_url}
              twitter={item.twitter_url}
              medium={item.medium_url}
            />
          );
        }
      }

      for (const item of this.state.teamWiseDetails[3].members) {
        if (!this.state.isLoading) {
          mlMembers.push(
            <NoBorderCard
              title={item.role}
              name={item.name}
              image={item.image}
              linkedin={item.linkedin_url}
              github={item.github_url}
              twitter={item.twitter_url}
              medium={item.medium_url}
            />
          );
        }
      }

      for (const item of this.state.teamWiseDetails[0].heads) {
        if (!this.state.isLoading) {
          webHeads.push(
            <NoBorderCard
              title={item.role}
              name={item.name}
              image={item.image}
              linkedin={item.linkedin_url}
              github={item.github_url}
              twitter={item.twitter_url}
              medium={item.medium_url}
            />
          );
        }
      }

      for (const item of this.state.teamWiseDetails[3].heads) {
        if (!this.state.isLoading) {
          mlHeads.push(
            <NoBorderCard
              title={item.role}
              name={item.name}
              image={item.image}
              linkedin={item.linkedin_url}
              github={item.github_url}
              twitter={item.twitter_url}
              medium={item.medium_url}
            />
          );
        }
      }
    }
    return (
      <div>
        <Nav active="team" />
        <div style={styles.container}>
          <div style={{ ...styles.pageContainer, height: "100vh" }}>
            <h1
              style={{
                fontSize: "4em",
                fontWeight: "700",
                margin: 0,
                marginTop: "1.2em"
              }}
            >
              <mark className="redMark">Meet the team</mark>
            </h1>
            <div style={styles.cardContainer}>
              <CardHead
                hrefL="https://www.google.com/"
                hrefG="https://www.google.com/"
                title={"Lead"}
                name={"Shubhank Saxena"}
                image={"https://source.unsplash.com/random"}
              />
              <CardHead
                hrefL="https://www.google.com/"
                hrefG="https://www.google.com/"
                title={"Co Lead"}
                name={"Aman Arora"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <img src={image} style={{ height: "375px", width: "800px" }}></img>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="yellowMark"> Web and App Team</mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>{webHeads}</div>
            <img src={image2} style={{ height: "300px", width: "700px" }}></img>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-around",
                justifyContent: "center"
              }}
            >
              {webMembers}
            </div>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="blueMark">IOT Team</mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <img
              src={iotImage}
              style={{ height: "300px", width: "700px" }}
            ></img>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="greenMark">Software Team</mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <img
              src={softwareImage}
              style={{ height: "275px", width: "700px" }}
            ></img>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/user/erondu"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="redMark">Machine Learning Team</mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>{mlHeads}</div>
            <img
              src={mlImage}
              style={{ height: "275px", width: "700px" }}
            ></img>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignContent: "space-around",
                justifyContent: "center"
              }}
            >
              {mlMembers}
            </div>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="yellowMark">
                  Social Media & Creativity Team
                </mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <img
              src={publicityImage}
              style={{ height: "275px", width: "700px" }}
            ></img>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
          </div>
          <div style={styles.pageContainer}>
            <div style={{ marginTop: "5em" }}>
              <h1>
                <mark className="blueMark">Hardware prototyping Team</mark>
              </h1>
            </div>
            <div style={styles.cardContainer}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <img
              src={prototypingImage}
              style={{ height: "275px", width: "700px" }}
            ></img>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
              <NoBorderCard
                title={"Head"}
                name={"Jaskeerat Singh Randhawa"}
                image={"https://source.unsplash.com/random"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f3f3f3"
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    margin: 10
  },
  pageContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
    // marginTop: "10em",
  }
};
