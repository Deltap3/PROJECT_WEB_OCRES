import React, { Component } from 'react'
import './UnPokemon.css'

class UnPokemon extends Component {

    state = {
        loading: true,
        pokemon: null,
        ability1: null,
        ability2: null,
    }

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/charizard'
        const response = await fetch(url)


        const data = await response.json()
        this.setState({ pokemon: data, loading: false })
        /* const urlAbi2 = data.abilities[1].ability.url
        const responseAbi1 = await fetch(urlAbi1)
        const dataAbi1 = await responseAbi1.json()
        this.setState({ ability1: dataAbi1 })
        const urlAbi1 = data.abilities[0].ability.url
        const responseAbi2 = await fetch(urlAbi2)
        const dataAbi2 = await responseAbi2.json()
        this.setState({ ability2: dataAbi2 }) */
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div Class='page'>
                        <div Class='title'>
                            {this.state.pokemon.name}
                        </div>
                        <div Class='body'>
                            <img Class='image' src={this.state.pokemon.sprites.front_default} />
                            <div Class='pokeType'> Type :&nbsp;
                                {this.state.pokemon.types.map((typePokemon, i) => {
                                    return (
                                        <div>[{typePokemon.type.name}]&nbsp;</div>
                                    )
                                })}
                            </div>
                            <div Class='pokeType'> Abilities :&nbsp;
                                {this.state.pokemon.abilities.map((abilPokemon, i) => {
                                    return (
                                        <div>[{abilPokemon.ability.name}]&nbsp;</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                )}

            </div>
        )
    }
}

export default UnPokemon
