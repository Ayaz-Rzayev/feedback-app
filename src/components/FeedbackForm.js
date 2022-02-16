import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./FeedbackForm.module.css";


const FeedbackForm = () => {
  const [review, setReview] = useState("");

  const inputChangeHandler = (e) => {
    setReview(e.target.value);
  };

  return (
    <Card>
      <form className={styles["add-review-form"]}>
        <h2>
          How would you rate <br />
          your expirience with us?
        </h2>
        <div className={styles['input-group']}>
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Write a review"
            value={review}
          />
          <Button type="submit" >Add</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
