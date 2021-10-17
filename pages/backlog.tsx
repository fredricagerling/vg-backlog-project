import type { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

type BacklogProps = {
  id: number;
  title: string;
  genre: string;
};

function Backlog({ games }: { games: BacklogProps[] }) {
  // const tjomme: BacklogProps[] = [...games];
  return (
    <>
      {games.map((game: any, index: any) => {
        return <p key={index}>{game.title}</p>;
      })}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const DUMMY_GAMES: BacklogProps[] = [
    {
      id: 1,
      title: "Tales of Arise",
      genre: "JRPG",
    },
    {
      id: 2,
      title: "Tales of Legendia",
      genre: "JRPG",
    },
  ];

  return {
    props: {
      games: DUMMY_GAMES,
    },
  };
};

export default Backlog;
