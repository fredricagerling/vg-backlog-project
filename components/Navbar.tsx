import React, { Fragment, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";
import BurgerMenu from "./BurgerMenu";
import { MenuItems } from "./MenuItems";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles["navbar-logo"]}>Beat the backlog!</a>
        </Link>
        <ul className={styles["nav-links"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <BurgerMenu openMenu={toggleMenu} />
      </nav>
      <Dropdown onShow={showMenu} />
    </Fragment>
  );
};

export default Navbar;
