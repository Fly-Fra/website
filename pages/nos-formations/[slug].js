import { GraphQLClient, gql } from "graphql-request";
import {
  avoidRateLimit,
  getAllFormations,
  getFormationDetails,
} from "../../queries";
import {
  Header,
  Footer,
  Form,
  LandingSection,
  GlobalForm,
  DescriptionsSection,
  ListSection,
  ImagesSection,
  StudentCard,
} from "../../components";
import Head from "next/head";
import { useState } from "react";
export default function FormationDetails({ formation, allFormations }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen font-Montserrat  w-full flex flex-col bg-white">
      <Head>
        <title>{`Formation ${formation.title} - Flyfra ACADEMY`}</title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <Header setVisible={setVisible} activePage={"/nos-formations"} />
      <main className="w-full flex flex-col md:items-start items-center md:grid justify-items-center gap-12 px-8 py-20  md:grid-cols-12">
        <section className=" h-full w-full  col-span-7">
          <LandingSection
            title={formation.title}
            type={formation.type}
            image={formation.coverPicture}
          />
          <DescriptionsSection
            offset={1}
            title="Description du métier :"
            text={formation.description}
          />
          <DescriptionsSection
            offset={2}
            title="OBJECTIF DE LA FORMATION :"
            text={formation.objectif}
          />
          {formation.plan.length!==0 && <ListSection page="formation" offset={3} title="plan :" elements={formation.plan} />}
          {formation.durations.length!==0 &&<ListSection
           page="formation"
            offset={2 + formation.plan.length}
            title="DUREE DE LA FORMATION :"
            elements={formation.durations}
          />}
          
          {formation.prerequis.length!==0 && <ListSection
           page="formation"
            offset={2 + formation.plan.length + 2 + formation.durations.length}
            title="prérequis :"
            elements={formation.prerequis}
          />}
          {formation.testimonies && <StudentCard
            page="formation"
            index={2 + formation.plan.length+formation.prerequis.length + 2 + formation.durations.length}
            title="nos etudiants"
            slug={""}
            student={formation.testimonies[0]}
          />}
        </section>
        <Form />
      </main>
      <ImagesSection Images={formation.extraPictures} />
      <GlobalForm
        formations={allFormations}
        visibile={visible}
        setVisible={setVisible}
      />

      <Footer />
    </div>
  );
}


export async function getServerSideProps({ params }) {
  const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
  const hygraphClient = new GraphQLClient(hypgraph_API);
  const getDetails = async () => {
    await avoidRateLimit();
    const { formation } =
      (await hygraphClient.request(getFormationDetails, {
        slug: params.slug,
      })) || [];
    return formation;
  };
  const getallForms = async () => {
    await avoidRateLimit();
    const { formations } =
      (await hygraphClient.request(getAllFormations)) || [];
    return formations;
  };
  const formation = await getDetails();
  const allFormations = await getallForms();
  return {
    props: { formation, allFormations },
  };
}
