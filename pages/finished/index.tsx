import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getEntries } from "../../utils/entries";
import { Entry, Game } from "@prisma/client";

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

function Finished({
  entries,
}: {
  entries: (Entry & {
    game: Game;
  })[];
}) {
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
}



export default Finished;
