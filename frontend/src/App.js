import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import ListPokemon from './Components/ListPokemon';
import PokemonDetails from './Components/PokemonDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <ListPokemon />
            </Route>
            <Route path="/:pokemonName" component={PokemonDetails}>
              <PokemonDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
