import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getEntries } from "../../utils/entries";
import { Entry, Game } from "@prisma/client";

function Year({
  entries,
}: {
  entries: (Entry & {
    game: Game;
  })[];
}) {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.year}</h1>
      <ol>
        {entries.map((item, index) => {
          return <li key={index}>{item.game.title}</li>;
        })}
      </ol>
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
