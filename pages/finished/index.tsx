import type { NextPage } from "next";
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

const Finished: NextPage = () => {
  return (
    <>
      <h1>Finished</h1>
      <ul>
        {years.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`/finished/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Finished;
