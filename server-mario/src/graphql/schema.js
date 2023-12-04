import { gql } from 'apollo-server';

const rootTypeDefs = gql`
  type Query {
    jogosMario: JogosMario
  }
  type JogosMario {
    id: ID!
    nome: String!
    ano: Int!
  }
`;

const rootResolver = {
  Query: {
    jogosMario: () => {
      return {
        id: 1,
        nome: 'Mario 64',
        ano: 1987
      };
    },
  },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolver];
