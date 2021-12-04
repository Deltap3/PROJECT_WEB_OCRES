import React, { Component } from 'react'
import "./PokemonDetails.css"
import { PieChart } from 'react-minimal-pie-chart';
import Ability from './Ability'
import Species from './Species';
import Items from './Items';

class PokemonDetails extends Component {

    state = {
        loading: true,
        pokemon: null,
    }

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/pikachu'
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

    async printAbility(url) {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ pokemon: data, loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div className='pokemonU'>
                        <div className='allU'>
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
                                    { title: this.state.pokemon.stats[0].stat.name, value: this.state.pokemon.stats[0].base_stat, color: '#70e000' },
                                    { title: this.state.pokemon.stats[1].stat.name, value: this.state.pokemon.stats[1].base_stat, color: '#ba0c0c' },
                                    { title: this.state.pokemon.stats[2].stat.name, value: this.state.pokemon.stats[2].base_stat, color: '#7a7a7a' },
                                    { title: this.state.pokemon.stats[3].stat.name, value: this.state.pokemon.stats[3].base_stat, color: '#4cc9f0' },
                                    { title: this.state.pokemon.stats[4].stat.name, value: this.state.pokemon.stats[4].base_stat, color: '#9d4edd' },
                                    { title: this.state.pokemon.stats[5].stat.name, value: this.state.pokemon.stats[5].base_stat, color: '#ff9f1c' },
                                ]} label={({ dataEntry }) => dataEntry.title + ': ' + dataEntry.value}
                                labelStyle={{ fontSize: '10px' }}
                                labelPosition={100}
                            />
                            <div className="species">
                                <Species url={this.state.pokemon.species.url} />
                            </div>
                            <div className='bodyU'>
                                <div className='title2'>Abilities</div>
                                <div className="abilities">{this.state.pokemon.abilities[0] ?
                                    <div >
                                        <Ability url={this.state.pokemon.abilities[0].ability.url} />
                                    </div> : null}
                                    {this.state.pokemon.abilities[1] ?
                                        <div >
                                            <Ability url={this.state.pokemon.abilities[1].ability.url} />
                                        </div> : null}
                                    <div className='title2'>Held Items</div>
                                </div>{this.state.pokemon.held_items[0] ?
                                    <div className="items">
                                        <Items url={this.state.pokemon.held_items[0].item.url} />
                                    </div> : null
                                }
                                {this.state.pokemon.held_items[1] ?
                                    <div className="items">
                                        <Items url={this.state.pokemon.held_items[1].item.url} />
                                    </div> : null
                                }
                            </div>
                        </div>


                    </div>
                )
                }
            </div>
        )
    }
}

export default PokemonDetails
