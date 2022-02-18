import type { NextPage } from "next";
import Head from "next/head";
import LoginBox from "../modules/auth/LoginBox";

// TODO: Find a better way for styling Main div so it grows to have 100 %
const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginBox />
      </main>
    </div>
  );
};

export default Login;