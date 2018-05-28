import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions';
import * as types from '../../reducers/pokemons/pokemon-actionTypes';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Pokemons Action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  xit('RECEIVE_POKEMONS when fetching pokemons has been done', () => {
    fetchMock.getOnce('/', { body: { urls: ['do something'] } });

    const expectedActions = [
      { type: types.REQUEST_POKEMONS },
      { type: types.RECEIVE_POKEMONS, body: { pokemons: ['do something'] } }
    ];
    const store = mockStore({ pokemons: [] });

    return store.dispatch(actions.fetchPokemons()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
