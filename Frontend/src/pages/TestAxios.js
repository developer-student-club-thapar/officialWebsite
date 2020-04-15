import React, { Component } from 'react';
import axios from 'axios';

import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class TestAxios extends Component {
  componentDidMount() {
    // axios
    //     .get("http://192.168.137.1:8000/members/")
    //     .then(res => {
    //         console.log(res.data[0]);
    //     })
    //     .catch(err => {
    //         console.log("Error", err);
    //     });
  }
  render() {
    return (
      <div>
        {/* <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ width: "20px", height: "20px" }}
                /> */}
      </div>
    );
  }
}
