import Hello from "@/components/Hello";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prevent re-rendering child playground</title>
        <meta
          name="description"
          content="Prevent re-rendering child playground"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen min-w-full flex-row items-center justify-center dark:bg-slate-800 dark:text-gray-300">
        <Hello />
      </main>
    </>
  );
};

export default Home;
