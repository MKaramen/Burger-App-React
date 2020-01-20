import React from "react";
import styles from "./Logo.module.css";
import imageSrc from "../../assets/img/burger-logo.png";

const Logo = props => (
  <div className={styles.Logo}>
    <img src={imageSrc} alt="Burger Logo" />
  </div>
);

export default Logo;
