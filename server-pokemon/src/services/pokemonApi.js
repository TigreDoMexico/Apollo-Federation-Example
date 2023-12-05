import axios from 'axios';

const urlApi = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonById = async (id) => await axios.get(`${urlApi}/${id}`);