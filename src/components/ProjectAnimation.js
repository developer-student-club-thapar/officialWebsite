import React, { Fragment } from "react";
import Animation from "../assets/code-debugging.json";
import Lottie from "react-lottie";

const ProjectAnimation = () => {
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
        height={350}
        width={350}
        style={{ display: "block" }}
      />
    </Fragment>
  );
};

export default ProjectAnimation;
