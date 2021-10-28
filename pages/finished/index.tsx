import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { getEntries } from "../../utils/entries";
import { Entry, Game, Console } from "@prisma/client";
import GameCard from "../../components/Gamecard";
import { EntryProp } from "../../components/Gamecard";
import styles from '../../styles/Navbar.module.css'

function Finished({ entries }: { entries: EntryProp[] }) {
  return (
    <>
      <h1>Finished</h1>
      
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
