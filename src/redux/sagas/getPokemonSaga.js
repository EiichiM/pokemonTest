import { put, call, takeLatest } from 'redux-saga/effects'
import {
    GET_ALL_POKEMON_START,
    GET_ALL_POKEMON_ERROR,
    GET_ALL_POKEMON_COMPLETE,
} from '../../constants/actionsType'

export function* getPokemon({ payload }) {
    try {
        const json = yield fetch(`${payload.pokemonName}`)
            .then(response => response.json(),);

        // const results = yield fetchAsync(apiCall, `pokemon/`, null, null, 'GET');
        yield put({ type: GET_ALL_POKEMON_COMPLETE, json });
    } catch (error) {
        yield put({ type: GET_ALL_POKEMON_ERROR, error })
    }
}

export default function* pokemon() {
    yield takeLatest(GET_ALL_POKEMON_START, getPokemon);
}