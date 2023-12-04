import { gql } from 'apollo-server';
import {} from '../services/pokemonApi'

const rootTypeDefs = gql`
  extend type Query {
    pokemon(id: ID!): Pokemon
  }

  type Pokemon {
    id: ID!
    nome: String!
    geracao: Int!
  }
`;

const rootResolver = {
  Query: {
    pokemon: async (_, { id }) => {
      try {
        const response = await getPokemonById(id);
        console.log(response.data)
      } catch(err) {
        console.error('Erro ao buscar dados na API', err)
        throw new Error('Não foi possível buscar o pokemon escolhido')
      }

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
