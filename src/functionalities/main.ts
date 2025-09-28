import { 
  $battle_options, 
  $pokemons_on_battle, 
} from './DomElements.js'

import { 
  MOVES_PART, 
  OPTIONS_PART 
} from './optionsPartsToRender.js'

import {
  moveRight,
  moveLeft,
  moveUp,
  moveDown
} from './functions.js'

// There's be an attack mode thath change if the pokemon will attack at the other or if the player will decide what to do (if the attack mode is active, all the section of the options is filled for the moves and else of the pokemon, else if disable, the section of the options will be the section to choice attack, the bag, run or choice pokémon).
// default this state is false
let attack_mode = false

const renderBattleOrAttackOptions = () => {
  if (!attack_mode) {
    $battle_options!.innerHTML = OPTIONS_PART
    return
    // load the options part
  } else {
    $battle_options!.innerHTML = MOVES_PART
    return
    // load the moves part
  }
}

renderBattleOrAttackOptions()

const KEYS = {
  ARROW_RIGHT: "ArrowRight",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  ENTER: "Enter",
  ESCAPE: "Escape",
}

document.addEventListener('DOMContentLoaded',() => {
  const {
    ARROW_DOWN, 
    ARROW_UP, 
    ARROW_LEFT, 
    ARROW_RIGHT, 
    ENTER, 
    ESCAPE
  } = KEYS

  let $options_buttons: HTMLButtonElement[] = [...document.querySelectorAll<HTMLButtonElement>('.options_buttons')]
  let focusedButtonIndex = 0
  document.addEventListener('keyup', (e) => {
    if (e.key === ARROW_RIGHT) {
      focusedButtonIndex = moveRight($options_buttons, focusedButtonIndex)
    } else if (e.key === ARROW_LEFT) {
      focusedButtonIndex = moveLeft($options_buttons, focusedButtonIndex)    
    } else if (e.key === ARROW_UP) {
      focusedButtonIndex = moveUp($options_buttons, focusedButtonIndex)    
    } else if (e.key === ARROW_DOWN) {
      focusedButtonIndex = moveDown($options_buttons, focusedButtonIndex)    
    } else if (e.key === ENTER && focusedButtonIndex === 0 && attack_mode === false) {
      attack_mode = true
      renderBattleOrAttackOptions()
    } else if (e.key === ESCAPE && attack_mode === true) {
      attack_mode = false
      renderBattleOrAttackOptions()
      $options_buttons = [...document.querySelectorAll<HTMLButtonElement>('.options_buttons')]
      $options_buttons[0]?.focus()
    }
    console.log(focusedButtonIndex, attack_mode, e.key)
  })
  $options_buttons[focusedButtonIndex]?.focus()
})
