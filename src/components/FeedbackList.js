import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = (props) => {

  return props.feedbacks.map((item) => {
    return (
      <FeedbackItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        text={item.text}
        onDelete={props.onDelete}
      />
    );
  });
};

export default FeedbackList;
