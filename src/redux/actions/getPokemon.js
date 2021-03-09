import {
    GET_ALL_POKEMON_START,
    GET_POKEMON_START,
} from '../../constants/actionsType'

export const getAllPokemon = payload => ({
    type: GET_ALL_POKEMON_START,
    payload
})

export const getPokemonBaseDetail = payload => ({
    type: GET_POKEMON_START,
    payload
})
