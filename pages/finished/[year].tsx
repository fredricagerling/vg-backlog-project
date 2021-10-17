import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Year: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.year}</h1>
    </>
  );
};

export default Year;
