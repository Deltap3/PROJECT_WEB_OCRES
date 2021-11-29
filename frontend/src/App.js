import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UnPokemon from './Components/UnPokemon.js';

class App extends Component {
  state = {
    pokemon: {}
  }

  render() {
    return (
      <div className="App">
        <UnPokemon />
      </div>
    );
  }
}

export default App;
