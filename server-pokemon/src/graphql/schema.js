import { gql } from 'apollo-server';

const rootTypeDefs = gql`
  extend type Query {
    pokemon: Pokemon!
  }

  type Pokemon {
    id: ID!
    nome: String!
    geracao: Int!
  }
`;

const rootResolver = {
  Query: {
    pokemon: () => {
      return {
        id: 1,
        nome: 'Bulbassauro',
        geracao: 1
      };
    },
  },
};

export const typeDefs = rootTypeDefs;
export const resolvers = rootResolver;
