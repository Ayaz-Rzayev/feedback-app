import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>
        Simple feedback app build with React to practice (based on Brad
        Traversy's course on React)
      </p>
      <Link to="/">Back to Home Page</Link>
    </Card>
  );
};

export default AboutPage;
