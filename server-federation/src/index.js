const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        { name: 'mario', url: 'http://localhost:4003/graphql' },
        { name: 'pokemon', url: 'http://localhost:4004/graphql' },
        { name: 'zelda', url: 'http://localhost:4005/graphql' },
    ],
});

const server = new ApolloServer({
    gateway,
    subscription: false
});

server.listen(4006).then(({ url }) => {
    console.log(`🚀 Schema Centralizado rodando na porta ${url}`);
}).catch(err => {console.error(err)});