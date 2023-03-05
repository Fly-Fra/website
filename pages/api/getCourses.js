import { GraphQLClient, gql } from "graphql-request";
import { getAllFormations } from "../../queries";
export default async function asynchandler(req, res) {
  let { formations } = [];
  try {
    const hypgraph_API = process.env.NEXT_PUBLIC_QUERY_API;
    const hygraphClient = new GraphQLClient(hypgraph_API);
    formations = (await hygraphClient.request(getAllFormations)) || [];
    res.status(200).send({ formations: formations });
  } catch (error) {
    console.error(error);
    res.status(200).send({ message: error, formations: [] });
  }
}
