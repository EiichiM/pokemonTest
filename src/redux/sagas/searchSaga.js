import { put, call, takeLatest } from 'redux-saga/effects'
import { SEARCH_POKEMON_START, SEARCH_POKEMON_ERROR, SEARCH_POKEMON_COMPLETE } from '../../constants/actionsType'
import { apiCall } from '../api';

export function* searchPokemon({ payload }) {
    try {
        const json = yield fetch(`https://pokeapi.co/api/v2/pokemon/${payload.pokemonName}`)
        .then(response => response.json(), );
        // const results = yield call(apiCall, `pokemon/${payload.pokemonName}`, null, null, 'GET');
        console.log(json, 'results');
        yield put({ type: SEARCH_POKEMON_COMPLETE, json });

    } catch (error) {
        yield put({ type: SEARCH_POKEMON_ERROR, error });
    }
}

export default function* search() {
    yield takeLatest(SEARCH_POKEMON_START, searchPokemon);
}