import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { getAllFormations } from "../queries";
import { useState } from "react";

import { Header, GlobalForm, Footer,ContactForm,Location } from "../components";
export default function contact({ allFormations }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen font-Montserrat  w-full flex flex-col bg-white">
      <Head>
        <title>Contact - FlyFra Academy - Ecole de formation des métiers du tourisme et de l'aérien</title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <Header setVisible={setVisible} activePage={"/contact"} />
      <main className="w-full flex flex-col">
       <ContactForm /> 
       <Location /> 
      </main>
      <GlobalForm formations={allFormations} visibile={visible} setVisible={setVisible} />

      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
  const hygraphClient = new GraphQLClient(hypgraph_API);
  const getallForms = async () => {
    const { formations } = (await hygraphClient.request(getAllFormations)) || [];
    return formations;
  };
  const allFormations = await getallForms();
  return {
    props: {
      allFormations
    },
    revalidate:60,

  };
}