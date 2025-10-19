// Setting the Dom elements
export const $ = (el: string) => document.querySelector(el)
export const $$ = (el: string) => document.querySelectorAll(el)

export const $battleOptions = $('.battle_options')
export const $pokemonsOnBattle = $('.pokemons_on_battle')
export const $enemiePokemon = $('#enemie_pokemon')
export const $yourPokemon = $('#your_pokemon')
