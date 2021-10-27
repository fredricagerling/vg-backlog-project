import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getEntries } from "../../utils/entries";
import { Entry, Game, Console } from "@prisma/client";
import GameCard from "../../components/Gamecard";
import { EntryProp } from "../../components/Gamecard";

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

function Finished({ entries }: { entries: EntryProp[] }) {
  return (
    <>
      <h1>Finished</h1>
      <ul>
        {entries.map((item, index) => {
          return <GameCard key={index} entry={item} />;
        })}
      </ul>
    </>
  );
}

export default Finished;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const year = parseInt(context.query.year as string);

  const entries = await getEntries(2014);

  return {
    props: {
      entries,
    },
  };
};
