import React from "react";
import styles from "./FeedbackItem.module.css";
import Card from "./UI/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ id, rating, text, onDelete }) => {
  return (
    <Card>
      <div className={styles["card__num"]}>{rating}</div>
      <button className={styles['close-btn']} onClick={() => onDelete(id)}>
        <FaTimes color="purple" />
      </button>
      <p className={styles["card__text"]}>{text}</p>
    </Card>
  );
};

export default FeedbackItem;
