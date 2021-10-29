import React, { Fragment, useState } from "react";
import styles from "../styles/Header.module.css";
import Dropdown from "./Dropdown";
import BurgerMenu from "./BurgerMenu";
import Link from "next/link";

const Header = () => {

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <input placeholder="Search..."></input>
        <ul className={styles["nav-links"]}>
          <li>Add game</li>
        </ul>
        {/* <BurgerMenu openMenu={toggleMenu} /> */}
      </nav>
    </Fragment>
  );
};

export default Header;
