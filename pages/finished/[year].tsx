import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getEntries } from "../../utils/entries";
import { Entry, Game, Console } from "@prisma/client";
import styles from "../../styles/GameList.module.css";
import GameCard, { EntryProp } from "../../components/Gamecard";

function Year({ entries, year }: { entries: EntryProp[]; year: string }) {
  const router = useRouter();
  return (
    <>
      <h1 className={styles.yearTitle}>
        {year} ({entries.length} st)
      </h1>
      <div className={styles.cardContainer}>
        {entries.map((item, index) => {
          return <GameCard key={index} entry={item} />;
        })}
      </div>
    </>
  );
}

export default Year;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const year = parseInt(context.query.year as string);

  const entries = await getEntries(year);

  return {
    props: {
      entries,
      year: context.query.year as string,
    },
  };
};
