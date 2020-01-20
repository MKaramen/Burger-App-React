import React from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <React.Fragment>
    <Toolbar />

    <main className={styles.Main}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
