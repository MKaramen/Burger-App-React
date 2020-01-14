import React from "react";
import styles from "./Layout.module.css";

const Layout = props => (
  <React.Fragment>
    <div>ToolBar,SideDrawer,Backdrop</div>

    <main className={styles.Main}>{props.children}</main>
  </React.Fragment>
);

export default Layout;
