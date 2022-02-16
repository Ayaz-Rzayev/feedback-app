import React from "react";
import styles from "./FeedbackStats.module.css";

const FeedbakStats = ({ feedbacks }) => {
  console.log(feedbacks);
  const reviewsCount = feedbacks.length;
  const average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / reviewsCount;

  return (
    <div className={styles["feedback-stats"]}>
      <h4>{reviewsCount} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbakStats;
