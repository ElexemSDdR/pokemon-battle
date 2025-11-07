// Setting the Dom elements
export const $ = (el: string) => document.querySelector(el)
export const $$ = (el: string) => document.querySelectorAll(el)

const $battleOptions = $('.battle_options') as HTMLElement
const $pokemonsOnBattle = $('.pokemons_on_battle') as HTMLElement
const $enemiePokemon = $('#enemie_pokemon') as HTMLSelectElement
const $yourPokemon = $('#your_pokemon') as HTMLSelectElement
const $dialogSelectPokemon = $('.select_pokemons_pop_up') as HTMLDialogElement
const $selectPokemonForm = $('#selectPokemon') as HTMLFormElement
  
export {
  $battleOptions,
  $pokemonsOnBattle,
  $enemiePokemon,
  $yourPokemon,
  $dialogSelectPokemon,
  $selectPokemonForm
}
