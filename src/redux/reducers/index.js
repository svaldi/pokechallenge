import { combineReducers } from 'redux';
import prokemonReducer from './pokemons/pokemon-reducer';

const rootReducer = combineReducers({
  pokemons: prokemonReducer
});

export default rootReducer;
