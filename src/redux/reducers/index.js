import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import getPokemonReducer from './getPokemonsReducer'

const rootReducer = combineReducers({
	getPokemonReducer,
	searchReducer
});

export default rootReducer;