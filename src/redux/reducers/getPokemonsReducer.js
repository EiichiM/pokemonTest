import { get } from 'lodash'
import {
    GET_ALL_POKEMON_START,
    GET_ALL_POKEMON_ERROR,
    GET_ALL_POKEMON_COMPLETE,
    GET_POKEMON_START,
    GET_POKEMON_ERROR,
    GET_POKEMON_COMPLETE,
} from '../../constants/actionsType'

const inicialState = {
    isLoading: false,
}

export default function (state = inicialState, action) {
    switch (action.type) {
        case GET_ALL_POKEMON_START:
            return { ...state, isLoading: true };
            break;
        case GET_ALL_POKEMON_ERROR:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                allPokemon: null
            };
        case GET_ALL_POKEMON_COMPLETE:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                allPokemon: action.json
            };
            break;
        case GET_POKEMON_START:
            return { ...state, isLoading: true };
            break;
        case GET_POKEMON_ERROR:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                pokemons: null
            };
        case GET_POKEMON_COMPLETE:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                pokemons: action.payload
            };
            break;
        default:
            return { ...state };
    }
}