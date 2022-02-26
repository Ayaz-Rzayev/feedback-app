import React, { createContext, useState } from "react";
import FeedbackData from "../../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({ item: {}, edit: false });

  const feedbackAddHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    let newFeedbackList = [newFeedback, ...feedbacks];
    setFeedback(newFeedbackList);
  };
  const feedbackDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const feedbackEditHandler = (id, updItem) => {
    setFeedback(
      feedbacks.map((item) =>
        item.id === id ? (item = { id, ...updItem }) : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editFeedback,
        feedbackAddHandler,
        feedbackDeleteHandler,
        feedbackEdit,
        feedbackEditHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
