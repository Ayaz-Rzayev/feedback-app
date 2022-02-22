import React, { createContext, useState } from "react";
import FeedbackData from "../../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const feedbackDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  const feedbackAddHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    let newFeedbackList = [newFeedback, ...feedbacks];
    setFeedback(newFeedbackList);
  };

  return (
    <FeedbackContext.Provider
      value={{ feedbacks, feedbackAddHandler, feedbackDeleteHandler }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext