import React, { Fragment } from "react";
import loader from "../assets/google-voice-assist.json";
import Lottie from "react-lottie";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={150}
        width={150}
        style={{ marginTop: "200px", display: "block" }}
      />
    </Fragment>
  );
};

export default Loader;
