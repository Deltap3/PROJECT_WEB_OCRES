import React, { Component } from 'react'
import "./PokemonDetails.css"
import { Area, CirclePie, BarMetric } from 'react-simple-charts'


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [44, 55, 13, 43, 22],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>


        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(ApexChart), domContainer);

class PokemonDetails extends Component {

    state = {
        loading: true,
        pokemon: null
    }

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
        console.log(this.props.pokeName)
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
                            <ApexChart />
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}

export default PokemonDetails
