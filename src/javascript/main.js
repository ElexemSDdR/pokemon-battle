import { $battle_options, $pokemons_on_battle } from './DomElements.js'
import { MOVES_PART, OPTIONS_PART } from './optionsPartsToRender.js'

// There's be an attack mode thath change if the pokemon will attack at the other or if the player will decide what to do (if the attack mode is active, all the section of the options is filled for the moves and else of the pokemon, else if disable, the section of the options will be the section to choice attack, the bag, run or choice pokémon).
// default this state is false
let attack_mode = false

const renderBattleOrAttackOptions = () => {
  if (!attack_mode) {
    $battle_options.innerHTML = OPTIONS_PART
    return
    // load the options part
  } else {
    return
    // load the moves part
  }
}

renderBattleOrAttackOptions()
