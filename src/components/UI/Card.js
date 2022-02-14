import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  // let className = styles.card;
  // if (props.reverse) {
  //   className = className.concat(" ", styles.reverse);
  // }
  return (
    <div
      className={[styles.card, props.reverse ? styles.reverse : ""].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default Card;
