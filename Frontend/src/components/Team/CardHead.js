/** @format */

import React, { Component } from 'react';
import linkedin from './../../assets/linkedin.jpg';
import github from './../../assets/github.png';
import './styles/CardHead.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faLinkedin,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faLinkedinIn,
  faTwitter,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
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
          <h1 style={{ fontWeight: '500' }} className="title">
            {this.props.title}
          </h1>
          <h2 style={{ fontWeight: '300' }} className="name">
            {this.props.name}
          </h2>
          <div className="iconContainer">
            <a className="icons" href={this.props.hrefL}>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.hrefG}>
              <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.href}>
              <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
            </a>
            <a className="icons" href={this.props.href}>
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
    fontFamily: 'Poppins',
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#524e4e',
    flexDirection: 'row',
    width: '400px',
    alignItems: 'center',
    height: '200px',
    margin: 60,
    backgroundColor: 'white',
  },
  circle: {
    display: 'flex',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#000000',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '10%',
  },
  textContainer: {
    // paddingVertical: "50%"
  },
};
