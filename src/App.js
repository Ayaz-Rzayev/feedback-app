import React, { Fragment } from "react";
import styles from "./App.module.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/UI/Header";

function App() {
  return (
    <Fragment>
      <Header text="Feedback UI" />
      <div className={styles.container}>
        <FeedbackList />
      </div>
    </Fragment>
  );
}

export default App;
