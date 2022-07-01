import React, { Fragment } from "react";
import Animation from "../assets/wokshop-icon.json";
import Lottie from "react-lottie";

const EventAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ display: "block" }}
      />
    </Fragment>
  );
};

export default EventAnimation;
