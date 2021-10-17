import React, { ReactNode, useState } from "react";
import styles from '../styles/Layout.module.css';
import Navbar from './Navbar'

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {

  return (
    <>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default Layout;
