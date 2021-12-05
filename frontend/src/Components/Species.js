import React, { Component } from 'react'
import Evolution from './Evolution'

class Species extends Component {

    state = {
        species: null,
        loading: true,
    }

    async componentDidMount() {
        const url = this.props.url
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ species: data, loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div>
                        <Evolution url={this.state.species.evolution_chain.url} />
                    </div>
                )}
            </div>
        )
    }
}

export default Species
