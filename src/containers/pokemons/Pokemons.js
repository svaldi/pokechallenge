import React, { Component } from 'react';
import { array, bool, func, object, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons } from '../../redux/actions';

import PokemonsList from '../pokemons/PokemonsList';

import '../../styles/Pokemons.css';

class Pokemons extends Component {
  static propTypes = {
    activePokemon: object,
    dispatch: func,
    fetchPokemons: func,
    isFetching: bool,
    title: string.isRequired,
    pokemons: array
  };

  componentWillMount() {
    this.props.fetchPokemons();
  }

  render() {
    const { isFetching, title, pokemons } = this.props;
    return (
      <div className="url-shortener">
        {isFetching && pokemons.length === 0 && <h2>Loading...</h2>}
        {!isFetching &&
          pokemons.length >= 0 && (
            <div
              style={{ opacity: isFetching ? 0.5 : 1 }}
              className="flex-container"
            >
              <div className="form">
                <h2>{title}</h2>
              </div>
              <PokemonsList title="Pokemons" pokemons={pokemons} />
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, pokemons, activePokemon } = state.pokemons;
  return {
    isFetching,
    pokemons,
    activePokemon
  };
}

export default connect(
  mapStateToProps,
  { fetchPokemons }
)(Pokemons);
