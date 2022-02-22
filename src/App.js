import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbackStats";
import Header from "./components/UI/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./components/pages/AboutPage";

function App() {
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
    <Router>
      <Header text="Feedback UI" />
      <div className={styles.container}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <FeedbackForm onAdd={feedbackAddHandler} />
                <FeedbakStats feedbacks={feedbacks} />
                <FeedbackList
                  feedbacks={feedbacks}
                  onDelete={feedbackDeleteHandler}
                />
              </Fragment>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
