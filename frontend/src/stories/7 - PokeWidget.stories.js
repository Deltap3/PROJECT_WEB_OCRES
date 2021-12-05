import React from 'react';
import UnPokemon from '../Components/UnPokemon';
import "../Components/PokemonDetails.css"


export default {
    title: 'uniquePoke',
    component: UnPokemon
};

export const PokemonWidget = (state = {
    loading: true,
    people: []
}) => {

    return (
        <div className="allU">

            <div className='pokemonE'>
                <div className='title'>
                    Seadra
                </div>
                <div className="num">117</div>
                <img className='image' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" />
                <div className='pokeType'> Type :&nbsp;

                    <div className="type" style={{
                        color: "white",
                        backgroundColor: "#6390F0"
                    }}>
                        {"Water"}&nbsp;
                    </div>
                </div>
            </div>
        </div>
    );
}