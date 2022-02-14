import React from "react";
import styles from "./FeedbackItem.module.css";
import Card from "./UI/Card";

const FeedbackItem = ({rating, text }) => {
  return (
    <Card>
      <div className={styles["card__num"]}>{rating}</div>
      <p className={styles["card__text"]}>{text}</p>
    </Card>
  );
};

export default FeedbackItem;
