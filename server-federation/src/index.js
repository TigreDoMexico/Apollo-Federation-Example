const { ApolloServer } = require('apollo-server');
const { ApolloGateway, IntrospectAndCompose } = require('@apollo/gateway');

const supergraphSdl = new IntrospectAndCompose({
    subgraphs: [
      { name: "pokemon", url: "http://localhost:4003/graphql" },
      { name: "mario", url: "http://localhost:4004/graphql" },
      { name: "zelda", url: "http://localhost:4005/graphql" },
    ],
  });

const gateway = new ApolloGateway({
    supergraphSdl,
    __exposeQueryPlanExperimental: false
});

const server = new ApolloServer({
    gateway,
    subscription: false,
    engine: false
});

server.listen(4006).then(({ url }) => {
    console.log(`🚀 Schema Centralizado rodando na porta ${url}`);
}).catch(err => {console.error(err)});