import type { Request, Response } from 'express';
import { pokemonsData, pokemonData } from '../data/pokemonsData.js'
import path from 'node:path'
import type { FetchError, IPokemon } from '../../../types/env.js';

const isFetchError = (pokemon: any): pokemon is FetchError => pokemon && typeof pokemon.error === "string"

const dirname = path.resolve()

export const getPokemonsByName = async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
      const pokemon: IPokemon | FetchError = await pokemonData(String(name).toLowerCase())
      if (isFetchError(pokemon)) {
        res.status(500).json(pokemon)
        return
      }
      res.status(200).json(pokemon)
    } else {
      const pokemons = await pokemonsData()
      res.json(pokemons)
    }
}

export const setPokemonsOnBattle = (req: Request, res: Response) => {
  const { your_pokemon, enemie_pokemon } = req.query
  console.log(`Tu pokémon: ${your_pokemon},`, `Pokémon enemigo: ${enemie_pokemon}`)
  res.sendFile(path.join(dirname, 'src/pages/battle.html'))
}
