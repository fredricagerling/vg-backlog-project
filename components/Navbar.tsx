import React, { Fragment, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Dropdown from "./Dropdown";
import BurgerMenu from "./BurgerMenu";
import { MenuItems } from "./MenuItems";
import Link from "next/link";

const years = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        {/* <Link href="/">
          <a className={styles["navbar-logo"]}>Beat the backlog!</a>
        </Link> */}
        <div className={styles.yearNav}>
          {years.map((item, index) => {
            return (
              <Link key={index} href={`/finished/${item}`}>
                {item}
              </Link>
            );
          })}
        </div>
        {/* <ul className={styles["nav-links"]}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul> */}
        {/* <BurgerMenu openMenu={toggleMenu} /> */}
      </nav>
      <Dropdown onShow={showMenu} />
    </Fragment>
  );
};

export default Navbar;
