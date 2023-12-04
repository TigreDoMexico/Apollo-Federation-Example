import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { buildSubgraphSchema  } from '@apollo/subgraph';

const server = new ApolloServer({
  schema: buildSubgraphSchema({typeDefs, resolvers})
});

server.listen(4005).then(({ url }) => {
  console.info(`Server listening on: ${url}`);
});
