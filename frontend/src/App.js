import React, { Component } from 'react';
import './App.css';
import UnPokemon from './Components/UnPokemon.js';
import ListPokemon from './Components/ListPokemon.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListPokemon />
      </div>
    );
  }
}

export default App;
