import React, { Component } from "react";
import "./styles/About.css";
import styled from "styled-components";
import AboutImage from "../assets/undraw_about_us_page_ee1k.svg";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div>
        <Nav active="about" />
        <AboutContainer>
          <ImageContainer>
            <img src={AboutImage} height="100%" width="100%" alt="image"></img>
          </ImageContainer>
          <BodyContainer>
            <HeadingAbout>About Us</HeadingAbout>
            <PAbout>
              Google DSC is a Developer Student Club which is a technical
              community that combines all the university students, and all the
              other students who learn, share ideas and come up with viable
              projects that are likely to solve day to day universe problems.
              Additionally, it aims for university students to help them build
              their mobile, web, machine learning, cloud skills. The clubs are
              intended as a space for students to try out new ideas and
              collaborate to solve mobile and web development problems.
            </PAbout>
            <ButtonContainer>
              <ButtonAbout>
                <Link
                  style={{
                    width: "fit-content",
                    textDecoration: "none",
                    color: "#f3f3f3"
                  }}
                  to="/team"
                >
                  View the team!
                </Link>
              </ButtonAbout>
            </ButtonContainer>
          </BodyContainer>
        </AboutContainer>
      </div>
    );
  }
}

const AboutContainer = styled.div`
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
`;
const ImageContainer = styled.div`
  /* background: pink; */
  height: 100%;
  flex: 2;
  margin: 2em;
  margin-top: 12%;
`;
const BodyContainer = styled.div`
  /* background: green; */
  height: 100%;
  flex: 3;
  margin-top: 7.5%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;
const HeadingAbout = styled.h1`
  font-size: 3rem;
  color: black;
  /* width: fit-content; */
  text-align: center;
  /* margin: auto; */
  width: fit-content;
  padding: 0;

  font-weight: 700;
  margin-bottom: 0;
  background: linear-gradient(to top, #fbbc05, transparent 60%);
  /* background: linear-gradient(
        -100deg,
        hsla(5, 69%, 54%, 0.5),
        hsla(5, 69%, 54%, 0.5) 95%,
        hsla(5, 69%, 54%, 0.1)
    );
    border-radius: 1em 0;*/
  /* padding: 1rem 2rem 1rem 2rem; */
`;
const PAbout = styled.p`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 0;
  /* color: black; */
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2em;
`;
const ButtonAbout = styled.button`
  border: none;
  padding: 1rem 2rem 1rem 2rem;
  color: #f3f3f3;
  font-size: 1rem;
  background-color: #676c72;
  border-radius: 1rem;
  margin-top: 2rem;
  width: fit-content;
`;
