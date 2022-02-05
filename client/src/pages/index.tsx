import type { NextPage } from "next";
import Head from "next/head";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import Calendar from "../modules/calendar/Calendar";
import CalendarBar from "../modules/calendar/CalendarBar";
import MonthView from "../modules/calendar/month/MonthView";
import StageSwitcher from "../modules/calendar/StageSwitcher";
import ViewSwitcher from "../modules/calendar/ViewSwitcher";
import Sidebar from "../modules/sidebar/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col m-48">
        <CalendarBar />
        <MonthView />
      </div>
    </div>
  );
};

export default Home;
