import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { getAllFormations, getHomeCourses } from "../queries";
import { useState } from "react";

import { Header, About, Hero, GlobalForm, Partners, Contact, Formations, Faq, Footer } from "../components";
export default function Home({ formations,allFormations }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen font-Montserrat  w-full flex flex-col bg-white">
      <Head>
        <title>Accueil - FlyFra Academy - Ecole de formation des métiers du tourisme et de l'aérien</title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <Header setVisible={setVisible} activePage={"/"} />
      <main className="w-full flex flex-col">
        <Hero setVisible={setVisible} />
        <Partners />
        <Formations courses={formations} />
        <About />
        <Contact />
        <Faq />
      </main>
      <GlobalForm formations={allFormations} visibile={visible} setVisible={setVisible} />

      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
  const hygraphClient = new GraphQLClient(hypgraph_API);
  const { formations } = (await hygraphClient.request(getHomeCourses)) || [];
  const getallForms = async () => {
    const { formations } = (await hygraphClient.request(getAllFormations)) || [];
    return formations;
  };
  const allFormations = await getallForms();
  return {
    props: {
      formations,
      allFormations
    },
    revalidate:60,

  };
}
