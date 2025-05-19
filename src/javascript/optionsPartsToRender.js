import { whatWillDoMessage } from "./functions.js"
export const pkmnName = "CHARMANDER"

// HTML rendering parts
export const MOVES_PART = ``

export const OPTIONS_PART = `
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