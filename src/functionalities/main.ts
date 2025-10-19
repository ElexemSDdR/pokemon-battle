import { 
  $battleOptions, 
  $pokemonsOnBattle, 
} from './DomElements.js'

import { 
  MOVES_PART, 
  OPTIONS_PART 
} from './optionsPartsToRender.js'

import {
  moveRight,
  moveLeft,
  moveUp,
  moveDown,
  renderBattleOrAttackOptions,
  setSelects,
} from './functions.js'

// There's be an attack mode thath change if the pokemon will attack at the other or if the player will decide what to do (if the attack mode is active, all the section of the options is filled for the moves and else of the pokemon, else if disable, the section of the options will be the section to choice attack, the bag, run or choice pokémon).
// default this state is false
export let attackMode = false

renderBattleOrAttackOptions()
setSelects()

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

  let $optionButtons: HTMLButtonElement[] = [...document.querySelectorAll<HTMLButtonElement>('.options_buttons')]
  let focusedButtonIndex = 0
  document.addEventListener('keyup', (e) => {
    if (e.key === ARROW_RIGHT) {
      focusedButtonIndex = moveRight($optionButtons, focusedButtonIndex)
    } else if (e.key === ARROW_LEFT) {
      focusedButtonIndex = moveLeft($optionButtons, focusedButtonIndex)    
    } else if (e.key === ARROW_UP) {
      focusedButtonIndex = moveUp($optionButtons, focusedButtonIndex)    
    } else if (e.key === ARROW_DOWN) {
      focusedButtonIndex = moveDown($optionButtons, focusedButtonIndex)    
    } else if (e.key === ENTER && focusedButtonIndex === 0 && attackMode === false) {
      attackMode = true
      renderBattleOrAttackOptions()
    } else if (e.key === ESCAPE && attackMode === true) {
      attackMode = false
      renderBattleOrAttackOptions()
      $optionButtons = [...document.querySelectorAll<HTMLButtonElement>('.options_buttons')]
      $optionButtons[0]?.focus()
    }
    console.log(focusedButtonIndex, attackMode, e.key)
  })
  $optionButtons[focusedButtonIndex]?.focus()
})
