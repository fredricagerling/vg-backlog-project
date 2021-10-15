import React, { Fragment, useState } from "react";
import styles from "./Navbar.module.css";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <Link to="/" className={styles["navbar-logo"]}>
          Beat the backlog!
        </Link>
        <ul className={styles["nav-links"]}>
          {MenuItems.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
        <BurgerMenu openMenu={toggleMenu} />
      </nav>
      <Dropdown onShow={showMenu} />
    </Fragment>
  );
};

export default Navbar;
