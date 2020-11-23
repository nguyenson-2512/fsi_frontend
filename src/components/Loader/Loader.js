import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <span>
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={30}
        width={30}
        style={{display: "inline"}}
      />
    </span>
  )
}

export default LoaderComponent;