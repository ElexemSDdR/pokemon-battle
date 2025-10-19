import {
  $battleOptions,
  $yourPokemon,
  $enemiePokemon,
} from './DomElements.js'

import {
  MOVES_PART,
  OPTIONS_PART,
} from './optionsPartsToRender.js'

import {
  attackMode,
} from './main.js'
import type { AllPokemons, Result } from '../../types/env.js'


export const whatWillDoMessage = (pkmnName: string) => {
  return `<p>What will<br>${pkmnName} do?</p>`
}

export const moveRight = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 2) {
    focussedButtonIndex += 1
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveLeft = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 1 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 1
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveUp = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 2 || focussedButtonIndex === 3) {
    focussedButtonIndex -= 2
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const moveDown = (buttonsArray: HTMLElement[], focussedButtonIndex: number): number => {
  if (focussedButtonIndex === 0 || focussedButtonIndex === 1) {
    focussedButtonIndex += 2
    buttonsArray[focussedButtonIndex]?.focus()
    return focussedButtonIndex
  } else {
    return focussedButtonIndex
  }
}

export const renderBattleOrAttackOptions = () => {
  if (!attackMode) {
    $battleOptions!.innerHTML = OPTIONS_PART
    return
    // load the options part
  } else {
    $battleOptions!.innerHTML = MOVES_PART
    return
    // load the moves part
  }
}

export const setSelects = (multiplierLimit = 1) => {
  // The final limit should be 1350
  let limit = 135
  let offset = 0
  let multiplierVar = multiplierLimit
  let options: string = ""

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit * multiplierVar}&offset=${multiplierLimit === 1 ? offset : offset + (limit * multiplierVar) - limit}`)
  .then((rta) =>  rta.json())
  .then((pokemon: AllPokemons) => {
    pokemon.results.forEach((name: Result) => {
        // $yourPokemon.innerHTML += `<option>${name.name}</option>`
        // $enemiePokemon.innerHTML += `<option>${name.name}</option>`
        //
        // options += `<option>${name.name}</option>\n`
        // return options
        options += `<option>${name.name}</option>\n`
    })
    $yourPokemon.innerHTML += options
    $enemiePokemon.innerHTML += options
    if (multiplierLimit === 10) return
    setSelects(multiplierLimit + 1)
  })
  
}

export const choosePokemons = (yourPokemon: string, enemiePokemon: string) => {
  return
}
