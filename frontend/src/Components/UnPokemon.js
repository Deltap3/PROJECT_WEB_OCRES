import React, { Component } from 'react'
import "./UnPokemon.css"
import { Link } from "react-router-dom";

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
                    <div className='pokemon'>
                        <div className='title'>
                            {this.state.pokemon.name}
                        </div>
                        <Link to={`/${this.state.pokemon.name}`} className='body'>
                            <div className="num">{this.state.pokemon.id}</div>
                            <img className='image' src={this.state.pokemon.sprites.front_default} />
                            <div className='pokeType'> Type :&nbsp;
                                {this.state.pokemon.types.map((typePokemon, i) => {
                                    return (
                                        <div className="type" style={{
                                            color: "white",
                                            backgroundColor: this.switchColor(typePokemon.type.name)
                                        }}>
                                            {typePokemon.type.name}&nbsp;
                                        </div>
                                    )
                                })}
                            </div>
                        </Link>
                    </div>
                )
                }
            </div>
        )
    }
}

export default UnPokemon
