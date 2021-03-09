import { get } from 'lodash'

export const isSearchLoading = state => get(state, 'searchReducer.isLoading')
export const pokemonResults = state => get(state, 'searchReducer.pokemonResults')
export const allPokemonResults = state => get(state, 'getPokemonReducer.allPokemon')
export const pokemonsResults = state => get(state, 'getPokemonReducer.pokemons')