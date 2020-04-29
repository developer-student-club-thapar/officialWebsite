import React, { Component } from "react";

import Logo from "../assets/unnamed.png";

export default class Footer extends Component {
  render() {
    return (
        <div
          className="LogoFooterContainer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%"
          }}
        >
          <img src={Logo} className="LogoFooter"></img>
          <p>© Copyright 2020 DSC TIET | Developed with ❤️</p>
        </div>
    );
  }
}
