import React, { createContext, useState, useEffect } from "react";

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
    console.log(data);
    setFeedback([data, ...feedbacks]);
  };

  const feedbackDeleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  const feedbackEditHandler = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()

    setFeedback(
      feedbacks.map((item) =>
        item.id === id ? (item = data) : item
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
