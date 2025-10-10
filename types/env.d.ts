export interface Result {
  name: string
  url: string
}

type Type = {
  slot: number
  type: Result
}

type Sprites = {
  front_default: string
  other: { 
    'official-artwork': 
    { front_default: string } 
  }
  versions: {
    'generation-v': {
      'black-white': { 
        animated: {
          back_default: string,
          front_default: string,
          back_shiny: string,
          front_shiny: string
        } 
      }
    }
  }
} 

type Move = {
  move: Result
}

type Stat = Result

type Ability = {
  ability: Result
  is_hidden: boolean
  slot: number
}

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  abilities: Ability[]
  types: Type[]
  sprites: Sprites
  moves: Move[]
  stats: { 
    base_stat: number, 
    stat: Stat 
  }[]
}

