/** @format */

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faMedium,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

import Nav from "../components/Nav";
import GoogleAssBg from "../assets/1200px-Google_Assistant_logo.svg.png";
import Logo from "../assets/unnamed.png";
import undrawAbout from "../assets/undraw_dev_productivity_umsq.svg";
import TeamPic from "../assets/undraw_team_spirit_hrr4.svg";
import ContactPic from "../assets/undraw_contact_us_15o2.svg";
import Gallery from "../components/Gallery";
import styled from "styled-components";
import Lazy from "../assets/tom-morel-hkbQnC7FAqU-unsplash.jpg";
import Footer from "../components/Footer";
import "./styles/Home.css";


axios.defaults.baseURL = "https://dsctiet.pythonanywhere.com/api";

const URL =
  "https://drive.google.com/file/d/1WtxlBDqnZUh7Os1pSwjvv0WDiaYljB-e/view?usp=sharing";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      loading: false,
      btnText: "Submit",
      isTop: true
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ loading: true, btnText: "Sending...." });
    // get our form data out of state
    const { name, email, message } = this.state;

    axios
      .post("/contactus/", { name, email, message })

      .then(res => {
        this.setState({
          loading: false,
          name: "",
          email: "",
          message: "",
          btnText: "Submit"
        });
      })

      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          name: "",
          email: "",
          message: "",
          btnText: "Error"
        });
      });
  };
  HoverText = styled.button`
	:hover{
    box-shadow: 7px 7px #ff9999;
    transition: .3s;
  }
  
`
HoverText1 = styled.button`
:hover{
  box-shadow: 7px 7px #cfd968;
  transition: .3s;
}

`
HoverText2 = styled.button`
:hover{
  box-shadow: 5px 5px #39c44e;
  transition: .3s;
}

`
HoverText3 = styled.button`
:hover{
  ${'' /* box-shadow: 6px 6px #ff9999; */}
  transition: .3s;
  background: #ea4335;
  color: #ffffff;
}


`



  render() {
    const url =
      "https://docs.google.com/document/d/1bbpf78aMSH2ntSZEWR09Q05OVDHFp6IoFlVHtcvC0eQ/edit?usp=sharing";
    return (
      <MainContainer>
        {/* <ResponsiveDiv>
          <img
            src={Lazy}
            height="30%"
            width="50%"
            style={{ alignSelf: "center", marginTop: "2em" }}
          ></img>
          <h1>
            Our Designers and Developers were quite lazy while making the mobile
            site! Please prefer to use our app(coming soon) or open it up on
            desktop!
            <br />
            -Lazy Developer
            <br />
            <br />
            P.S. We feel like Brad 1 here, and if you can help us get out of the
            burden, make us the responsive version..
            <br />
            <a
              style={{
                cursor: "pointer",
                textDecoration: "none"
              }}
              href="https://github.com/developer-student-club-thapar/officialWebsite"
            >
              Github
            </a>
          </h1>
        </ResponsiveDiv> */}
        {/* <Nav active="home" /> */}
        <SubMainContainer>
          <div
            className="div1"
            style={{
              height: "100vh",
              overflow: "hidden"
            }}
          >
            <div>
              <img src={GoogleAssBg} className="imgBg1"></img>
              <img src={Logo} className="Logo"></img>
            </div>
            <div>
              <p className="HomeText">
                Thapar Institute of Engineering and Technology
              </p>
            </div>
          </div>
          <div
            style={{
              height: "100vh",
              overflow: "hidden",
              position: "relative"
            }}
          >
            <div className="AboutTextContainer">
              <h2 className="AboutText">
                At DSC TIET, our aim is to spread awareness and teach.
                Developers, come together under one roof to create a community
                which inspires thousands. Join Us!
              </h2>
            </div>
            <img src={GoogleAssBg} className="imgBg2"></img>
            <img src={undrawAbout} className="imgAboutUndraw"></img>
            <this.HoverText
              onClick={() => {
                window.open(URL, "_blank");
              }}
              className="AboutButton1"
            >
              Code of Conduct
            </this.HoverText>
            <Link to="/communityJoin" target="_blank" onClick={event => {
              event.preventDefault()
              window.open('https://join.slack.com/t/dscthapar-gspatiala/shared_invite/enQtNzU2MzA2MjcxNzkyLTkwNDRiNWMzYjUzYjNjYjM0M2JhMDgwOTI3MGQwYWU1NzNlNGMxZGVhNzk0MGZiYTI5YzgwZDhiMTk1MjE4M2M');
            }}>
              <this.HoverText3 className="AboutButton2">Join our Slack!</this.HoverText3>
            </Link>
          </div>

          <div
            style={{
              height: "100vh",
              width: "100%",
              overflow: "hidden",
              position: "relative"
              // background: "red",
              // display: "flex",
            }}
          >
            <div className="TeamTextContainer">
              <h2 className="AboutText">
                We have a strong <span style={{ fontWeight: "600" }}>team</span>{" "}
                filled with{" "}
                <span style={{ fontWeight: "600" }}>innovators</span> and people
                who want to make this{" "}
                <span style={{ fontWeight: "600" }}>world a better place</span>
              </h2>
            </div>
            <img src={TeamPic} className="TeamImage"></img>
            <Link to='/team'><this.HoverText1 className="TeamButton">Meet the Team</this.HoverText1></Link>
          </div>

          <div
            style={{
              height: "100vh",
              width: "auto",
              // display: "flex",
              // alignItems: "center",
              overflow: "hidden"
            }}
          >
            <Gallery />
          </div>
          <div
            style={{
              height: "100vh",
              alignItems: "center",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h1
              style={{
                fontSize: "4.5em",
                fontWeight: "400",
                color: "#676C72"
              }}
            >
              Connect With Us!
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%"
              }}
            >
              <div class="Form">
                <form
                  style={{ height: "100%", width: "100%" }}
                  onSubmit={this.onSubmit}
                >
                  <ul>
                    <li>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </li>
                    <li>
                      <input
                        type="email"
                        id="mail"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                    </li>
                    <li className="li">
                      <textarea
                        className="textArea"
                        id="msg"
                        placeholder="Message"
                        name="message"
                        value={this.state.message}
                        onChange={this.onChange}
                      ></textarea>
                    </li>
                  </ul>
                  <this.HoverText2 className="FormButton">
                    {this.state.loading ? "Sending...." : this.state.btnText}
                  </this.HoverText2>
                </form>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%"
                }}
              >
                <img
                  src={ContactPic}
                  style={{
                    height: "65%",
                    marginTop: "5%",
                    height: "60%"
                  }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    width: "70%",
                    margin: "auto",
                    justifyContent: "space-around",
                    fontSize: "2em"
                  }}
                >
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/dscthapar/",
                        "_blank"
                      )
                    }
                    icon={faFacebook}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/hacktiet/",
                        "_blank"
                      )
                    }
                    icon={faInstagram}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open(
                        "https://www.twitter.com/dsctiet?s=09",
                        "_blank"
                      )
                    }
                    icon={faTwitter}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/channel/UCl235NVnbWqqCT7NQAIUzVQ",
                        "_blank"
                      )
                    }
                    icon={faYoutube}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open("https://medium.com/@dsc.tiet", "_blank")
                    }
                    icon={faMedium}
                    style={{ cursor: "pointer" }}
                  />
                  <FontAwesomeIcon
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/developer-student-club-thapar/?viewAsMember=true",
                        "_blank"
                      )
                    }
                    icon={faLinkedin}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <br></br>
            <hr style={{ width: "100%" }}></hr>
            <Footer />
          </div>
        </SubMainContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div``;
const SubMainContainer = styled.div`
  ${'' /* @media only screen and (max-width: 1000px) {
    display: none;
  } */}
`;

const ResponsiveDiv = styled.div`
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 0.5em;
  justify-content: center;
  @media only screen and (max-width: 1000px) {
    background-color: #f3f3f3;
    height: 100vh;
    width: 100vw;
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;
