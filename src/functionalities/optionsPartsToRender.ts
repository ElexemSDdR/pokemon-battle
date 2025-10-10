import { whatWillDoMessage } from "./functions.js"
export const pkmnName = "CHARMANDER"

// HTML rendering parts
export const MOVES_PART = `
  <section class="attack_container">
    <section class="moves">
      

k
    </section>
    <section class="moves_info">

    </section>
  </section>
`

export const OPTIONS_PART = `
  <section class="options_part">
    <section class="message_box">
      <section class="what_will_do">
        ${whatWillDoMessage(pkmnName)}
      </section>
    </section>
    <section class="options">
      <section class="first_border">
        <section class="buttons">
          <button class="options_buttons" id="fight-b">FIGHT</button>
          <button class="options_buttons" id="bag-b">BAG</button>
          <button class="options_buttons" id="pokemon-b">POKéMON</button>
          <button class="options_buttons" id="run-b">RUN</button>
        </section>
      </section>
    </section>
  </section>
`
