import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PokemonsList from './PokemonsList';

describe('UrlForm component', () => {
  const pokemons = [
    {
      name: 'f32fbn4',
      id: '1',
      url: 'http://www.example.com/hello/mylink'
    }
  ];
  xit('should be rendered', () => {
    const wrapper = shallow(
      <PokemonsList title="List of Active short urls" pokemons={pokemons} />
    );

    expect(wrapper.exists()).to.be.equal(true);
  });

  xit('should have a li', () => {
    const wrapper = shallow(
      <PokemonsList title="List of pokemons" pokemons={pokemons} />
    );

    expect(wrapper.find('li').length).to.be.equal(1);
  });
});
