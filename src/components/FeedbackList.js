import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackData from "../data/FeedbackData";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const feedbackDeleteHandler = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      let newFeedback = feedback.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  return feedback.map((item) => {
    return (
      <FeedbackItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        text={item.text}
        onDelete={feedbackDeleteHandler}
      />
    );
  });
};

export default FeedbackList;
