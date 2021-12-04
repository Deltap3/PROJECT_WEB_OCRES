import React, { Component } from 'react'

class Ability extends Component {

    state = {
        ability: null,
        loading: true,
    }

    async componentDidMount() {
        const url = this.props.url
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ ability: data, loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div className='bodyU'>
                        <div className="titleAbi">
                            {this.state.ability.name}
                        </div>
                        <div className="description">
                            {this.state.ability.effect_entries[1].effect}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Ability
