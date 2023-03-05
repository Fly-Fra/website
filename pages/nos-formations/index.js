import Head from "next/head";
import { useState } from "react";
import { GraphQLClient } from "graphql-request";
import {
  getTestimonies,
  getAllFormations,
  avoidRateLimit,
} from "../../queries";
import {
  Header,
  FormationHero,
  GlobalForm,
  Footer,
  FormationContainer,
  Prérequis,
  PourquoiNous,
  Témoignage,
} from "../../components";
export default function NosFormations({ testimonies, formations }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen font-Montserrat relative  w-full flex flex-col bg-white">
      <Head>
        <title>
          Nos Formations - FlyFra Academy - Ecole de formation des métiers du
          tourisme et de l'aérien
        </title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <Header setVisible={setVisible} activePage={"/nos-formations"} />
      <div className="h-20"></div>
      <main className="flex w-full flex-col">
        <FormationHero />
        <FormationContainer courses={formations} />
        <PourquoiNous />
        <Témoignage témoin={testimonies} />
        <Prérequis />
      </main>

      <GlobalForm
        formations={formations}
        visibile={visible}
        setVisible={setVisible}
      />

      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
  const hygraphClient = new GraphQLClient(hypgraph_API);
  async function getTestiMonies() {
    await avoidRateLimit();
    const { testimonies } = (await hygraphClient.request(getTestimonies)) || [];
    return testimonies;
  }
  async function getFormations() {
    await avoidRateLimit();
    const { formations } =
      (await hygraphClient.request(getAllFormations)) || [];

    return formations;
  }
  const testimonies = await getTestiMonies();
  const formations = await getFormations();
  return {
    props: {
      testimonies,
      formations,
    },
    revalidate:60,
  };
}
