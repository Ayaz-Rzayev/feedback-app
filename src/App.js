import React, { Fragment } from "react";
import styles from "./App.module.css"
import Header from "../src/components/Header";

function App() {
  return (
    <Fragment>
      <Header text="Feedback UI"/>
      <div className={styles.container}>

      </div>
    </Fragment>
  );
}

export default App;
