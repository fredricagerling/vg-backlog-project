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
      <div className={styles.main}>{props.children}</div>
    </>
  );
};

export default Layout;
