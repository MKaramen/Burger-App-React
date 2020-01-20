import React from "react";
import styles from "./Backdrop.module.css";
// Makes the background darker

const Backdrop = props =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.backDropClicked}></div>
  ) : null;

export default Backdrop;
