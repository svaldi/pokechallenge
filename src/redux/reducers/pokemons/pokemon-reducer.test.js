import reducer from '../../reducers/pokemons/pokemon-reducer';
import * as types from '../../reducers/pokemons/pokemon-actionTypes';

describe('urls reducer', () => {
  const INITIAL_STATE = {
    isFetching: false,
    pokemons: [],
    activePokemon: null,
    error: null
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle CREATE_URL_SUCCESS', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: types.CREATE_URL_SUCCESS,
        payload: {
          hash: 'f32fbn4',
          _id: '1',
          url: 'http://www.example.com/hello/mylink'
        }
      })
    ).toEqual({
      isFetching: false,
      urls: [
        {
          hash: 'f32fbn4',
          _id: '1',
          url: 'http://www.example.com/hello/mylink'
        }
      ],
      activeURL: {
        hash: 'f32fbn4',
        _id: '1',
        url: 'http://www.example.com/hello/mylink'
      },
      error: null
    });
  });
});
