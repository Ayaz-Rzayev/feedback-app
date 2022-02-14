import React, { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackData from "../data/FeedbackData";

const FeedbackList = () => {
  //const [feedback, setFeedback] = useState(FeedbackData)
  return FeedbackData.map((item) => {
    return <FeedbackItem key={item.id} rating={item.rating} text={item.text} />;
  });
};

export default FeedbackList;
