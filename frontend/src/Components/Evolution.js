import React, { Component } from 'react'
import UnPokemonEvo from './UnPokemonEvo'

class Evolution extends Component {

    state = {
        evolution: null,
        loading: true,
    }

    async componentDidMount() {
        const url = this.props.url
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ evolution: data, loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div className="evotitle">
                        Pre-Evolution
                        <UnPokemonEvo id="pokevolution" pokeName={this.state.evolution.chain.species.name} />
                        Evolution
                        <UnPokemonEvo id="pokevolution" pokeName={this.state.evolution.chain.evolves_to[0].evolves_to[0].species.name} />
                    </div>
                )}
            </div>
        )
    }
}

export default Evolution
