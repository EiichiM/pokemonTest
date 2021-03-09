import { all } from 'redux-saga/effects';
import search from './searchSaga';
import getPokemons from './getPokemonSaga'
import getPokemonBase from './getPokemonBaseSaga'
export default function* rootSaga() {
	yield all([search(), getPokemons(), getPokemonBase()]);
}