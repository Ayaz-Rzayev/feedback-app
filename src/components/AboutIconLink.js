import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./AboutIconLink.module.css";

const AboutIconLink = () => {
  return (
    <Link className={styles["about-link"]} to="/about">
      <FaQuestion></FaQuestion>
    </Link>
  );
};

export default AboutIconLink;
