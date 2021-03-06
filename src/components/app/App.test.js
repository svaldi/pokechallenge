import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Pokemons from '../../containers/pokemons/Pokemons';

describe('App component', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toEqual(true);
  });

  it('should render welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1 className="App-title">Welcome to React</h1>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('should render UrlShortener component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Pokemons).length).toEqual(1);
  });
});
