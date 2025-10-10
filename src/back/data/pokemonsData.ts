import type { Pokemon, Ability, Type, Move, Stat } from 'env.d'

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

export const pokemonData = async (pokemonName: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
  const pokemon: Pokemon = await response.json()
  const pokemonDataReduced = {
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
    stats: pokemon.stats.map((stat: Stat) => ({ 
      name: stat.stat.name, 
      base_stat: stat.base_stat 
    })),
  }
  return pokemonDataReduced
}
