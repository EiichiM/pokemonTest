import { get } from 'lodash'
import { SEARCH_POKEMON_START, SEARCH_POKEMON_ERROR, SEARCH_POKEMON_COMPLETE } from '../../constants/actionsType'
const inicialState = {
    isLoading:false
}

export default function (state = inicialState, action) {
    switch (action.type) {
        case SEARCH_POKEMON_START:
            return { ...state, isLoading: true };
            break;
        case SEARCH_POKEMON_ERROR:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                pokemon: null
            };
            break;
        case SEARCH_POKEMON_COMPLETE:
            console.log(action)
            return {
                ...state,
                isLoading: false,
                pokemonResults: action.json
            };
            break;
        default:
            return { ...state };
    }
}