import { put, call, takeLatest } from 'redux-saga/effects'
import {
    GET_POKEMON_START,
    GET_POKEMON_ERROR,
    GET_POKEMON_COMPLETE,
} from '../../constants/actionsType'

export function* getBasePokemon({ payload }) {
    try {
        
        yield put({ type: GET_POKEMON_COMPLETE, payload });
    } catch (error) {
        yield put({ type: GET_POKEMON_ERROR, error })
    }
}

export default function* pokemon() {
    yield takeLatest(GET_POKEMON_START, getBasePokemon);
}