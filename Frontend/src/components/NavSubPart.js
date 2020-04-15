import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
export default class NavSubPart extends Component {
  state = {
    active: this.props.active
  };
  render() {
    return (
      <Container>
        <div>
          {this.state.active === "home" ? (
            <Link
              to="/"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              Home
            </Link>
          ) : (
            <Link to="/" style={styles.noDec}>
              Home
            </Link>
          )}
        </div>
        <div>
          {this.state.active === "about" ? (
            <Link
              to="/about"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              About
            </Link>
          ) : (
            <Link to="/about" style={styles.noDec}>
              About
            </Link>
          )}
        </div>
        <div>
          {this.state.active === "team" ? (
            <Link
              to="/team"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              Team
            </Link>
          ) : (
            <Link to="/team" style={styles.noDec}>
              Team
            </Link>
          )}
        </div>
        <div>
          {this.state.active === "events" ? (
            <Link
              to="/events"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              Events
            </Link>
          ) : (
            <Link to="/events" style={styles.noDec}>
              Events
            </Link>
          )}
        </div>
        <div>
          {this.state.active === "contact" ? (
            <Link
              to="/contact"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              Contact
            </Link>
          ) : (
            <Link to="/contact" style={styles.noDec}>
              Contact
            </Link>
          )}
        </div>
        <div>
          {this.state.active === "achievments" ? (
            <Link
              to="/achievments"
              style={(styles.noDec, { textDecoration: "underline" })}
            >
              Achievements
            </Link>
          ) : (
            <Link to="/achievments" style={styles.noDec}>
              Achievements
            </Link>
          )}
        </div>
      </Container>
    );
  }
}

const styles = {
  noDec: {
    textDecoration: "none",
    color: "black"
  }
};

const Container = styled.nav`
  justify-content: space-around;
  align-items: center;
  display: flex;
  margin: auto;
  width: 70%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 1.3em;
  font-weight: 300;
`;
