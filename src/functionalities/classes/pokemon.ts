import type { IPokemon } from "../../../types/env.js";

type PokemonChoise = Pick<IPokemon, 'name' | 'moves' | 'abilities' | 'stats' | 'types' | 'weight' | 'front_sprites' | 'back_sprites'>

class Pokemon implements PokemonChoise {
  name: PokemonChoise['name']; 
  moves: PokemonChoise['moves']; 
  abilities: PokemonChoise['abilities']; 
  types: PokemonChoise['types']; 
  stats: PokemonChoise['stats'];
  weight: PokemonChoise['weight'];
  front_sprites: PokemonChoise['front_sprites'];
  back_sprites: PokemonChoise['back_sprites'];

  constructor(
    name: PokemonChoise['name'], 
    moves: PokemonChoise['moves'], 
    abilities: PokemonChoise['abilities'], 
    types: PokemonChoise['types'], 
    stats: PokemonChoise['stats'],
    weight: PokemonChoise['weight'],
    front_sprites: PokemonChoise['front_sprites'],
    back_sprites: PokemonChoise['back_sprites'],
  ) {
    this.name = name;
    this.moves = moves;
    this.abilities = abilities;
    this.types = types;
    this.stats = stats;
    this.weight = weight;
    this.front_sprites = front_sprites;
    this.back_sprites = back_sprites;
  }
}

// Tablita para patada baja (movimiento dependiente del peso
// Peso del objetivo  	Potencia
// De 0,1 a 9,9 kg	     20
// De 10 a 24,9 kg	     40
// De 25 a 49,9 kg	     60
// De 50 a 99,9 kg	     80
// De 100 a 199,9 kg  	100
// Más de 200 kg	      120
