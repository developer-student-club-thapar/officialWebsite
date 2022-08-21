import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import song from "./gj.mp3";
import jannat from "./jannat.mp3";
import { emojisplosions } from "emojisplosion";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const audio = new Audio(song);
const Jannat = new Audio(jannat);

let test = 0;
let test2 = 0;

function redirect(e) {
  if (e.key.toLowerCase() === "g") {
    test = test + 1;
    if (test === 2) {
      // alert("Ganja Ganja");
      console.log("ganja");
      audio.play();

      const { cancel } = emojisplosions({
        emojis: ["☘️", "🌿"],
        // emojiCount: 60,
        // position:
        //   x: 0,
        //   y: 0,
        // },
        physics: {
          fontSize: {
            min: 50,
            max: 50,
          },
          gravity: -0.1,
        },
      });
      setTimeout(cancel, 7000);

      test = 0;
    }
  } else if (e.key.toLowerCase() === "j") {
    test2 = test2 + 1;
    if (test2 === 2) {
      // alert("jannat");
      Jannat.play();

      var a = "-webkit-",
        b = "transform:rotate(1turn);",
        c = "transition:9s;";
      document.head.innerHTML += "<style>body{" + a + b + a + c + b + c;
      test2 = 0;
    }
  }
}

document.addEventListener("keydown", redirect);
