import React, { Component } from 'react'

class Items extends Component {
    state = {
        items: null,
        loading: true,
    }

    async componentDidMount() {
        const url = this.props.url
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ items: data, loading: false })
        console.log(this.state.items.sprites.default)
    }

    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div className='bodyU'>
                        <div className='titleAbi'>
                            {this.state.items.name}
                        </div>
                        <img className='itemImg' src={this.state.items.sprites.default} />
                    </div>
                )}
            </div>
        )
    }
}

export default Items
