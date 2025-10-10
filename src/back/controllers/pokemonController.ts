import type { Request, Response } from 'express';
import { pokemonsData, pokemonData } from '../data/pokemonsData.js'

export const getPokemons = async (req: Request, res: Response) => {
}

export const getPokemonsByName = async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
    try {
      const pokemon = await pokemonData(String(name).toLowerCase())
      return res.status(200).json(pokemon)
    } catch (error) {
      console.error(`Error fetching Pokémon data: ${error}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    try {
      const pokemons = await pokemonsData()
      return res.json(pokemons)
    } catch (error) {
      console.error(`Error fetching Pokémon data: ${error}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
