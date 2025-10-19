import type { Request, Response } from 'express';
import { pokemonsData, pokemonData } from '../data/pokemonsData.js'
import type { FetchError, Pokemon } from 'env.d'

const isFetchError = (pokemon: any): pokemon is FetchError => pokemon && typeof pokemon.error === "string"

export const getPokemonsByName = async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
      const pokemon: Pokemon | FetchError = await pokemonData(String(name).toLowerCase())
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
