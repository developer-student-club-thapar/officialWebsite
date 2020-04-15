import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  render() {
    return (
      <Container>
        <Image bg={this.props.bg}></Image>
        <SubContainer>
          <Heading bg={this.props.bg}>
            <p style={{ margin: "0" }}>{this.props.heading}</p>
          </Heading>
          <SubHeading bg={this.props.bg}>{this.props.sub_heading}</SubHeading>
          <About>{this.props.content}</About>
        </SubContainer>
      </Container>
    );
  }
}
const Container = styled.div`
  background-color: white;
  display: flex;
  height: fit-content;
  border-radius: 2em;
  width: 45%;
  box-shadow: 16px 16px 16px -16px rgba(0, 0, 0, 0.59);
  margin: 1em;
  overflow: hidden;
`;
const SubContainer = styled.div`
  flex: 2;
  height: 50vh; //change this
`;
const Image = styled.div`
  /* background-color: #ea4335; */
  background-color: ${props => props.bg};
  flex: 1;
`;
const About = styled.div`
  margin-top: 10%;
  margin-left: 5%;
  padding: 0.8em;
  padding-left: 0;
  font-weight: 500;
`;
const Heading = styled.div`
  font-weight: 700;
  font-size: 2em;
  --bg-color: ${props => props.bg};
  /* text-align: center; */
  margin: 5%;
  margin-bottom: 0.2em;
  width: fit-content;
  color: black 0.8;
  text-shadow: 2px 2px #f3f3f3;
  /* background: linear-gradient(to top, var(--bg-color), transparent 40%); */
`;

const SubHeading = styled.div`
  --bg-color: ${props => props.bg};
  /* color: var(--bg-color); */
  font-weight: 600;
  font-size: 1em;
  margin-left: 5%;
  width: fit-content;
  /* background: linear-gradient(to top, var(--bg-color), transparent 30%); */

  /* text-align: center; */
  &:hover {
    background: linear-gradient(to top, var(--bg-color), transparent 30%);
    /* color: white; */
    cursor: pointer;
  }
`;
