import React, { ReactNode, useState } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Navbar />
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
