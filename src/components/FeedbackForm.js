import React, { useState } from "react";
import RatingBar from "./RatingBar";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = (props) => {
  const [text, setReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback ={
      text,
      rating,
    }
    props.onAdd(newFeedback)
    setBtnDisabled(true)
    setReview('')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className={styles["add-review-form"]}>
        <h2>
          How would you rate <br />
          your expirience with us?
        </h2>
        <RatingBar select={(rating) => {setRating(rating)}}/>
        <div className={styles["input-group"]}>
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Write a review"
            value={text}
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
