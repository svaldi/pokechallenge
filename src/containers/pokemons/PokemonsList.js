import React, { Component } from 'react';
import { string, array, func } from 'prop-types';
import { connect } from 'react-redux';
import { selectPokemon } from '../../redux/actions';
import '../../styles/Pokemons.css';

class PokemonsList extends Component {
  static propTypes = {
    title: string.isRequired,
    pokemons: array.isRequired,
    selectPokemon: func
  };

  renderList() {
    return this.props.pokemons.map(pokemon => {
      return (
        <li key={pokemon.id} className="list-url-item">
          <div className="indicator" />
          <div className="details">
            <div onClick={() => this.props.selectPokemon(pokemon)}>
              {pokemon.name}
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    const { title } = this.props;
    return (
      <div className="url-list">
        <h2>{title}</h2>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { pokemons, activePokemon } = state.pokemons;
  return {
    pokemons,
    activePokemon
  };
}

export default connect(
  mapStateToProps,
  { selectPokemon }
)(PokemonsList);
