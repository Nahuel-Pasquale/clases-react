import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';

export const reducer = combineReducers({
  pokemon: pokemonReducer,
});

export default reducer;