import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getEntries } from "../../utils/entries";
import { Entry, Game, Console } from "@prisma/client";
import styles from "../../styles/GameList.module.css";

function Year({
  entries,
}: {
  entries: (Entry & {
    game: Game;
    Console: Console | null;
  })[];
}) {
  const router = useRouter();
  return (
    <>
      <div className={styles.gameTable}>
        <h3>{router.query.year} ({entries.length} st)</h3>
        <table>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Console</th>
          </tr>

          {entries.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.game.title}</td>
                <td>{item.Console?.name}</td>
              </tr>
            );
          })}
        </table>
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
    },
  };
};
