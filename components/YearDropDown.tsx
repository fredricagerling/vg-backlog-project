import React, { Fragment, useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

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

const YearDropDown = () => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Fragment>
      <ul className={styles.yearDropDown}>
        {years.map((item, index) => {
          return (
            <li>
              <Link key={index} href={`/finished/${item}`}>
                <a
                  className={
                    router.asPath == `/finished/${item}`
                      ? `${styles.active}`
                      : ""
                  }
                >
                  {item}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default YearDropDown;
