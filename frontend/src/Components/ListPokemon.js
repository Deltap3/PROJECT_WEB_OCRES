import React, { Component } from 'react'
import UnPokemon from './UnPokemon'
class ListPokemon extends Component {

    state = {
        listPoke: null,
        loading: true
    }

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0'
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ listPoke: data, loading: false })
    }

    render() {
        return (
            <div className="pokeList">
                {this.state.loading ? (<div>loading...</div>) : (
                    this.state.listPoke.results.map((pokemon, i) => {
                        return (
                            <UnPokemon pokeName={pokemon.name} />
                        )
                    }))}
            </div>
        )
    }
}

export default ListPokemon
