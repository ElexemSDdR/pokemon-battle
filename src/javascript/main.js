import { $battle_options, $pokemons_on_battle } from './DomElements.js'
import { whatWillDoMessage } from "./functions.js"

// There's be an attack mode thath change if the pokemon will attack at the other or if the player will decide what to do (if the attack mode is active, all the section of the options is filled for the moves and else of the pokemon, else if disable, the section of the options will be the section to choice attack, the bag, run or choice pokémon).
// default this state is false
let attack_mode = false

const pkmnName = "CHARMANDER"

// HTML rendering parts
const MOVES_PART = ``

const OPTIONS_PART = `
  <section class="options_part">
    <section class="message-box">
      <section class="what_will_do">
        ${whatWillDoMessage(pkmnName)}
      </section>
    </section>
    <section class="options">
      <section class="first-border">
        <section class="buttons">
          <button>FIGHT</button>
          <button>BAG</button>
          <button>POKéMON</button>
          <button>RUN</button>
        </section>
      </section>
    </section>
  </section>
`

const loadBattleOrAttackOptions = () => {
  if (!attack_mode) {
    $battle_options.innerHTML = OPTIONS_PART
    return
    // load the options part
  } else {
    return
    // load the moves part
  }
}

loadBattleOrAttackOptions()
