import { gql } from 'apollo-server';
import { getPokemonById } from '../services/pokemonApi'
import { mapPokemonToSchema } from '../mapper/pokemonMapper'

const rootTypeDefs = gql`
  extend type Query {
    pokemon(id: ID!): Pokemon
  }

  type Pokemon {
    id: ID!
    nome: String!
    altura: Int!
    tipo: String!
  }
`;

const rootResolver = {
  Query: {
    pokemon: async (_, { id }) => {
      try {
        const response = await getPokemonById(id);
        return mapPokemonToSchema(response.data)
      } catch(err) {
        console.error('Erro ao buscar dados na API', err)
        throw new Error('Não foi possível buscar o pokemon escolhido')
      }
    },
  },
};

export const typeDefs = rootTypeDefs;
export const resolvers = rootResolver;
