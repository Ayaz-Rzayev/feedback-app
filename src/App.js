import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbackStats";
import Header from "./components/UI/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const feedbackDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  const feedbackAddHandler = (newFeedback) => {
    newFeedback.id = uuidv4()
    let newFeedbackList = [newFeedback, ...feedbacks];
    setFeedback(newFeedbackList);
  };

  return (
    <Fragment>
      <Header text="Feedback UI" />
      <div className={styles.container}>
        <FeedbackForm onAdd={feedbackAddHandler} />
        <FeedbakStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} onDelete={feedbackDeleteHandler} />
      </div>
    </Fragment>
  );
}

export default App;
