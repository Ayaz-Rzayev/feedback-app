import React, {useContext} from "react";
import styles from "./FeedbackItem.module.css";
import Card from "./UI/Card";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackItem = ({ id, rating, text }) => {
  const {feedbackDeleteHandler} = useContext(FeedbackContext)

  return (
    <Card>
      <div className={styles["card__num"]}>{rating}</div>
      <button className={styles['close-btn']} onClick={() => feedbackDeleteHandler(id)}>
        <FaTimes color="purple" />
      </button>
      <p className={styles["card__text"]}>{text}</p>
    </Card>
  );
};

export default FeedbackItem;
