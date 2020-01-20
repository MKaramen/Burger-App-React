import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.open} backDropClicked={props.closed} />

      <div
        className={`${styles.SideDrawer} ${
          !props.open ? styles.Close : styles.Open
        }`}
      >
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
