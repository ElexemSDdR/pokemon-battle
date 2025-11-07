import type { IPokemon, Ability, Type, Move, FetchError } from '../../../types/env.js'

const reducePokemonData = (pokemon: any): IPokemon => {
  const pokemonDataReduced: IPokemon = {
    name: pokemon.name,
    id: pokemon.id,
    height: pokemon.height,
    weight: pokemon.weight, 
    front_sprites: [
      pokemon.sprites.versions['generation-v']['black-white'].animated.front_default,
      pokemon.sprites.versions['generation-v']['black-white'].animated.front_shiny
    ],
    back_sprites: [
      pokemon.sprites.versions['generation-v']['black-white'].animated.back_default,
      pokemon.sprites.versions['generation-v']['black-white'].animated.back_shiny
    ],
    abilities: pokemon.abilities.map((ability: Ability) => ability.ability.name),
    types: pokemon.types.map((type: Type) => type.type.name),
    moves: pokemon.moves.map((move: Move) => move.move.name),
    stats: pokemon.stats
  }
  return pokemonDataReduced
}

export const pokemonsData = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1350&offset=0')
    const pokemons = await response.json()
    return pokemons
  }
  catch (e) {
    console.error(`Error fetching Pokémon data: ${e}`);
  }
  return
}

export const pokemonData = async (pokemonName: string): Promise<IPokemon | FetchError> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    const pokemon: IPokemon = await response.json()
    const pokemonDataReduced = reducePokemonData(pokemon) 
    return pokemonDataReduced
  } catch (e) {
    console.error(`Error fetching pokémon data: ${e}`)
    const fetchError: FetchError = { 
      error: `Error fetching the Pokémon data: ${e}`
    }
    return fetchError
  }
}
