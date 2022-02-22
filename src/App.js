import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbackStats";
import Header from "./components/UI/Header";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackContextProvider } from "./components/context/FeedbackContext";

function App() {
  return (
    <Router>
      <Header text="Feedback UI" />
      <div className={styles.container}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <FeedbackContextProvider>
                <FeedbackForm />
                <FeedbakStats />
                <FeedbackList />
              </FeedbackContextProvider>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <AboutIconLink />
    </Router>
  );
}

export default App;
