import type { GetServerSideProps, NextPage } from "next";
import { getEntries } from "../../utils/entries";
import { EntryProp } from "../../components/Gamecard";

function Finished({ entries }: { entries: EntryProp[] }) {
  return (
    <>
      <h1>Finished</h1>
      {/* lista statistik osv*/}
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
