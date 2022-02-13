import React from "react";
import styles from "./FeedbackItem.module.css";

const FeedbackItem = ({ id, rating, text }) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles["card__num"]}>{rating}</div>
      <p className={styles["card__text"]}>{text}</p>
    </div>
  );
};

export default FeedbackItem;
