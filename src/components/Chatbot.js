import React, { Component } from "react";
import icon from "../assets/googlefinal.ico";

class Chatbot extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="Smallchat">
            <div
              className="Layout Layout-open Layout-expand Layout-right"
              style={{
                backgroundColor: "#3F51B5",
                color: "rgb(255, 255, 255)",
                opacity: 5,
                borderRadius: "10px"
              }}
            >
              <div className="Messenger_messenger">
                <div
                  className="Messenger_header"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "#4285F4"
                  }}
                >
                  <h4 className="Messenger_prompt">How can we help you?</h4>
                  <span
                    className="chat_close_icon"
                    style={{
                      color: "white",
                      marginRight: "5px",
                      float: "right",
                      marginTop: "5px"
                    }}
                  >
                    <i className="material-icons" aria-hidden="true">
                      close
                    </i>
                  </span>
                </div>
                <div className="Messenger_content">
                  <div className="Messages chats" id="chats">
                    <div className="clearfix" />
                  </div>
                  <div className="Input Input-blank">
                    <form>
                      <input
                        type="text"
                        id="mymessage"
                        className="Input_field"
                        placeholder="Send a message..."
                        style={{ height: "20px" }}
                      />
                      <button
                        id="sendbutton"
                        className="Input_button Input_button-send"
                        type="submit"
                      >
                        <div
                          className="Icon"
                          style={{ width: "18px", height: "18px" }}
                        >
                          <svg
                            width="57px"
                            height="54px"
                            viewBox="1496 193 57 54"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{ width: "18px", height: "18px" }}
                          >
                            <g
                              id="Group-9-Copy-3"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                              transform="translate(1523.000000, 220.000000) rotate(-270.000000) translate(-1523.000000, -220.000000) translate(1499.000000, 193.000000)"
                            >
                              <path
                                d="M5.42994667,44.5306122 L16.5955554,44.5306122 L21.049938,20.423658 C21.6518463,17.1661523 26.3121212,17.1441362 26.9447801,20.3958097 L31.6405465,44.5306122 L42.5313185,44.5306122 L23.9806326,7.0871633 L5.42994667,44.5306122 Z M22.0420732,48.0757124 C21.779222,49.4982538 20.5386331,50.5306122 19.0920112,50.5306122 L1.59009899,50.5306122 C-1.20169244,50.5306122 -2.87079654,47.7697069 -1.64625638,45.2980459 L20.8461928,-0.101616237 C22.1967178,-2.8275701 25.7710778,-2.81438868 27.1150723,-0.101616237 L49.6075215,45.2980459 C50.8414042,47.7885641 49.1422456,50.5306122 46.3613062,50.5306122 L29.1679835,50.5306122 C27.7320366,50.5306122 26.4974445,49.5130766 26.2232033,48.1035608 L24.0760553,37.0678766 L22.0420732,48.0757124 Z"
                                id="sendicon"
                                fill="#96AAB4"
                                fillRule="nonzero"
                              />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </form>
//                     <hr style={{ width: "100%" }} />
                    <p className="love" style={{ lineHeight: "0px" }}>
                      Created with ❤ by{" "}
                      <a href="https://analyticware.in/">AnalyticWare</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*===============CHAT ON BUTTON STRART===============*/}
            <div className="chat_on">
              {/*  <span class="material-icons">
        face
      </span>  */}
              <img className="iconic" alt="DSC" src={icon} />
            </div>
            {/*===============CHAT ON BUTTON END===============*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Chatbot;
