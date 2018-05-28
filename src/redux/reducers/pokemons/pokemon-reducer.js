import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  SELECT_POKEMON
} from './pokemon-actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  pokemons: [],
  activePokemon: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return { ...state, isFetching: true, error: null };
    case RECEIVE_POKEMONS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        isFetching: false
      };
    case SELECT_POKEMON:
      return { ...state, activePokemon: action.payload };
    default:
      return state;
  }
};
