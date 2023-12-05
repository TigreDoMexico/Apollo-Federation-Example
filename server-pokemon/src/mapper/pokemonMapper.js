export const mapPokemonToSchema = (data) => ({
    id: data.id,
    nome: data.name,
    altura: data.height,
    tipo: data.types.map((el) => el.type.name).join(' | ')
})