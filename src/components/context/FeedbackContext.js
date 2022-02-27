import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({ item: {}, edit: false });

  useEffect(() => {fetchFeedback()}, []);

  const fetchFeedback = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();
    setFeedback(data)
  };

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
