import { gql } from 'apollo-server';

const rootTypeDefs = gql`
  extend type Query {
    personagemZelda: Personagem
  }
  type Personagem {
    id: ID!
    nome: String!
  }
`;

const rootResolver = {
  Query: {
    personagemZelda: () => {
      return {
        id: 1,
        nome: 'Link',
      };
    },
  },
};

export const typeDefs = rootTypeDefs;
export const resolvers = rootResolver;
