import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const [review, setReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const inputChangeHandler = (e) => {
    if (e.target.value.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage(null)
    }else{
      setBtnDisabled(true)
      setMessage(`Review must be at least 10 characters`)
    }
    setReview(e.target.value)
  };

  return (
    <Card>
      <form className={styles["add-review-form"]}>
        <h2>
          How would you rate <br />
          your expirience with us?
        </h2>
        <div className={styles["input-group"]}>
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Write a review"
            value={review}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Add
          </Button>
        </div>
        {message && <div>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
