import React, { Component } from 'react'
import "./PokemonDetails.css"
import { PieChart } from 'react-minimal-pie-chart';

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

class PokemonDetails extends Component {

    state = {
        loading: true,
        pokemon: null,
    }

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
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
                    <div className='pokemonU'>
                        <div className='bodyU'>
                            <div className='titleU'>
                                {this.state.pokemon.name}
                            </div>
                            <div className='numU'>{this.state.pokemon.id}</div>
                            <img className='imageU' src={this.state.pokemon.sprites.front_default} />
                            <div className='pokeTypeU'> Type :&nbsp;
                                {this.state.pokemon.types.map((typePokemon, i) => {
                                    return (
                                        <div className='typeU' style={{
                                            color: "white",
                                            backgroundColor: this.switchColor(typePokemon.type.name)
                                        }}>
                                            {typePokemon.type.name}&nbsp;
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <PieChart className="chart"
                            data={[
                                { title: 'Sinoh', value: 10, color: '#E38627' },
                                { title: 'Johto', value: 15, color: '#C13C37' },
                                { title: 'Ohen', value: 20, color: '#6A2135' },
                            ]} label={({ dataEntry }) => dataEntry.value}

                        />
                    </div>
                )
                }
            </div>
        )
    }
}

export default PokemonDetails
