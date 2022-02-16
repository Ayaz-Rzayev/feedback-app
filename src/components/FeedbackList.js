import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackData from "../data/FeedbackData";

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
