import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackContextProvider = ({ children }) => {
  const [feedbacks, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editFeedback, setEditFeedback] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const feedbackAddHandler = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    console.log(data)
    setFeedback([data, ...feedbacks]);
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
        isLoading,
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
