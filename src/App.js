import React, { Fragment } from "react";
import styles from "./App.module.css"
import Header from "./components/UI/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <Fragment>
      <Header text="Feedback UI"/>
      <div className={styles.container}>
        <FeedbackItem/>
      </div>
    </Fragment>
  );
}

export default App;
