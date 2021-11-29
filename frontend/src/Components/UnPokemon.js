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
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.props.pokeName
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ pokemon: data, loading: false })

        /* const urlAbi1 = data.abilities[0].ability.url
        const responseAbi1 = await fetch(urlAbi1)
        const dataAbi1 = await responseAbi1.json()
        this.setState({ ability1: dataAbi1 })

        const urlAbi2 = data.abilities[1].ability.url
        const responseAbi2 = await fetch(urlAbi2)
        const dataAbi2 = await responseAbi2.json()
        this.setState({ ability2: dataAbi2, loading: false }) */
    }

    switchColor(type) {
        switch (type) {
            case "normal":
                return "#A8A77A"
                break;
            case "poison":
                return "#A33EA1"
                break;
            case "fire":
                return "#EE8130"
                break;
            case "water":
                return "#6390F0"
                break;
            case "electric":
                return "#F7D02C"
                break;
            case "grass":
                return "#7AC74C"
                break;
            case "ice":
                return "#96D9D6"
                break;
            case "fighting":
                return "#C22E28"
                break;
            case "ground":
                return "#E2BF65"
                break;
            case "flying":
                return "#A98FF3"
                break;
            case "psychic":
                return "#F95587"
                break;
            case "bug":
                return "#A6B91A"
                break;
            case "rock":
                return "#B6A136"
                break;
            case "ghost":
                return "#735797"
                break;
            case "dragon":
                return "#6F35FC"
                break;
            case "dark":
                return "#705746"
                break;
            case "steel":
                return "#B7B7CE"
                break;
            case "fairy":
                return "#D685AD"
                break;
            default:
                return "#FFFFFF"
                break;
        }
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div Class='pokemon'>
                        <div Class='title'>
                            {this.state.pokemon.name}
                        </div>
                        <div Class='body'>
                            <div Class="num">{this.state.pokemon.id}</div>
                            <img Class='image' src={this.state.pokemon.sprites.front_default} />
                            <div Class='pokeType'> Type :&nbsp;
                                {this.state.pokemon.types.map((typePokemon, i) => {
                                    return (
                                        <div Class="type" style={{
                                            color: "white",
                                            backgroundColor: this.switchColor(typePokemon.type.name)
                                        }}>
                                            {typePokemon.type.name}&nbsp;
                                        </div>
                                    )
                                })}
                            </div>
                            {/* <div Class='pokeType'> Abilities :&nbsp;
                                {this.state.pokemon.abilities.map((abilPokemon, i) => {
                                    return (
                                        <div>
                                            <div>
                                                [{abilPokemon.ability.name}]&nbsp;
                                            </div>
                                            <div>
                                                {this.state.ability1.effect_changes};
                                            </div>
                                        </div>

                                    )
                                })}
                            </div> */}
                        </div>
                    </div>

                )
                }

            </div>
        )
    }
}

export default UnPokemon
