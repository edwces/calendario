import type { NextPage } from "next";
import Head from "next/head";
import withAuth from "../modules/auth/withAuth";
import Calendar from "../modules/calendar/Calendar";

// TODO: Find a better way for styling Main div so it grows to have 100 %
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Calendar />
      </main>
    </div>
  );
};

export default Home;
