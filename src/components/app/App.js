import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/App.css';
import Pokemons from '../../containers/pokemons/Pokemons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Pokemons title="List of pokemons" />
      </div>
    );
  }
}

export default App;
