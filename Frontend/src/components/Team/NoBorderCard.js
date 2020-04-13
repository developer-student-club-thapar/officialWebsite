/** @format */

import React, { Component } from "react";
import linkedin from "./../../assets/linkedin.png";
import github from "./../../assets/github.png";
import "./styles/NoBorderCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faLinkedin,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faLinkedinIn,
  faMedium,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
export default class CardHead extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.circle}>
          <img
            src={this.props.image}
            width="100px"
            height="100px"
            className="imageProfile"
          ></img>
        </div>
        <div style={styles.textContainer}>
          <p className="titleNoBorder">{this.props.title}</p>

          <p className="nameNoBorder">{this.props.name}</p>
          <div className="iconContainer">
            <a className="icons" href={this.props.linkedin}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.github}>
              <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.medium}>
              <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.twitter}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    fontFamily: "Poppins",
    flexDirection: "row",
    width: "400px",
    alignItems: "center",
    height: "200px"
  },
  circle: {
    display: "flex",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#000000",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginRight: "10%"
  },
  textContainer: {
    // paddingVertical: "50%"
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f3f3f3"
  },
  image: {
    display: "flex",
    height: 25,
    width: 25,
    margin: 10
  }
};
