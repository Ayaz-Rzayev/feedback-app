import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let btnVersion;
  switch (props.version) {
    case "btn-secondary":
      btnVersion = styles["btn-secondary"];
      break;
    default:
      btnVersion = styles["btn-primary"];
  }

  return (
    <button
      type={props.type}
      className={[styles.btn, btnVersion].join(" ")}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
