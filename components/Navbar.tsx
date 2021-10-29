import React, { Fragment, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import YearDropDown from "./YearDropDown";

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
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className={styles.navbar}>
        <ul className={styles["nav-links"]}>
          <li>
            <Link href="/backlog">
              <a className={router.pathname == "/backlog" ? `${styles.active}` : ""}>
                Backlog
              </a>
            </Link>
          </li>
          <li className={styles.finished}>
            <Link href="/finished">
              <a className={router.pathname.includes("/finished") ? `${styles.active}` : ""}>
                Finished
              </a>
            </Link>
            <ArrowDropDownIcon onClick={toggleMenuHandler} />
          </li>
          {showMenu && <YearDropDown />}
          <li>
            <Link href="/wishlist">
              <a className={router.pathname == "/wishlist" ? `${styles.active}` : ""}>
                Wishlist
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

{
  /* <nav className={styles.sidebar}>
        <ul className={styles["nav-links"]}>
          <div className={styles.yearNav}>
            {years.map((item, index) => {
              return (
                <Link key={index} href={`/finished/${item}`}>
                  {item}
                </Link>
              );
            })}
          </div>
        </ul>
      </nav> */
}
