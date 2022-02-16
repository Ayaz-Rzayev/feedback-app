import React, { Fragment, useState } from "react";
import styles from "./App.module.css";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbackStats";
import Header from "./components/UI/Header";
import FeedbackData from "./data/FeedbackData";


function App() {
  const [feedbacks, setFeedback] = useState(FeedbackData);

  const feedbackDeleteHandler = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      let newFeedback = feedbacks.filter((item) => item.id !== id);
      setFeedback(newFeedback);
    }
  };

  return (
    <Fragment>
      <Header text="Feedback UI" />
      <div className={styles.container}>
        <FeedbakStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks ={feedbacks} onDelete={feedbackDeleteHandler}/>
      </div>
    </Fragment>
  );
}

export default App;
