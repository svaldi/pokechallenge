import axios from 'axios';
import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  SELECT_POKEMON
} from './pokemon-actionTypes';

const request = axios.create({
  baseURL: `${process.env.REACT_APP_API}/pokemon`
});

function requestPokemons() {
  return {
    type: REQUEST_POKEMONS
  };
}

function receivePokemons(pokemons) {
  return {
    type: RECEIVE_POKEMONS,
    payload: pokemons
  };
}

export function fetchPokemons(page = 1) {
  return dispatch => {
    dispatch(requestPokemons());
    return request
      .get(`/${page}`)
      .then(response => response.data)
      .then(pokemons => dispatch(receivePokemons(pokemons)));
  };
}

export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    payload: pokemon
  };
}
