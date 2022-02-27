import React from "react";
import spinnerGif from "./assets/spinner.gif";

const Spiner = () => {
  return (
    <img
      src={spinnerGif}
      alt="Loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
};

export default Spiner;
