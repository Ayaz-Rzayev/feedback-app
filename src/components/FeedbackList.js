import React, {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackList = () => {
  const {feedbacks} = useContext(FeedbackContext)
  return feedbacks.map((item) => {
    return (
      <FeedbackItem
        key={item.id}
        id={item.id}
        rating={item.rating}
        text={item.text}
      />
    );
  });
};

export default FeedbackList;
