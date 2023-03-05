import { Header ,GlobalForm} from "../components";
import Head from "next/head";
import { useState } from "react";
const errorPage = () => {

  return (
    <main className="h-screen w-full relative bg-white">
      <Header setVisible={false} activePage={"none"} />
      <Head>
        <title>FlyFra</title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <section className="h-full   overflow-hidden grid place-items-center w-full pt-20">
        <h1 className="text-dark-blue animate-pulse text-4xl font-bold uppercase">
          Page not <span className="text-main-red">found</span>
        </h1>
        <img className="w-[40%] " src="/development.svg" alt="" />
      </section>
    </main>
  );
};

export default errorPage;
