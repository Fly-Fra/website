import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { getAllFormations, getAllStudents } from "../../queries";
import { useState } from "react";
import { avoidRateLimit } from "../../queries";
import { Header, GlobalForm,StudentCard,ListSection, Footer } from "../../components";
export default function NosEtudiants({ students,allFormations }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="min-h-screen  font-Montserrat  w-full flex flex-col bg-white">
      <Head>
        <title>Nos Etudiants - FlyFra Academy - Ecole de formation des métiers du tourisme et de l'aérien</title>
        <meta name="description" content="Fly fra academy" />
        <link rel="icon" href="/Logo-white.png" />
      </Head>
      <Header setVisible={setVisible} activePage={"/nos-etudiants"} />
      <main className="w-full gap-8 pt-40 pb-20 px-8 md:px-12 grid place-items-center grid-cols-1 sm:[grid-template-columns:_repeat(_auto-fit,_minmax(30rem,_1fr)_);]">
        {students?.map((student,index)=>(
            student && <StudentCard page={"témoin"} index={index} slug={student.formation.slug} student={student} title={student.formation.title} key={index} offset={ index} />
        ))}
      </main>
      <GlobalForm formations={allFormations} visibile={visible} setVisible={setVisible} />

      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
  const hygraphClient = new GraphQLClient(hypgraph_API);
  const getTotalStudents = async () => {
    const { formationTestimonies } = (await hygraphClient.request(getAllStudents)) || [];
    return formationTestimonies;
  };
  const getallForms = async () => {
    await avoidRateLimit();
    const { formations } =
      (await hygraphClient.request(getAllFormations)) || [];
    return formations;
  };
  const allFormations = await getallForms();
  const students = await getTotalStudents();
  return {
    props: {
      students,
      allFormations
    },
    revalidate:60
  };
}