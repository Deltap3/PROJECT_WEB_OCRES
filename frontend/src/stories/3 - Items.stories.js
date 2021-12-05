import React from 'react';
import Items from '../Components/Items';
import myWidget from "../Components/Items";
import "../Components/PokemonDetails.css"

export default {
    title: 'objets',
    component: Items
};

export const ItemsWidget = (state = {
    loading: true,
    people: []
}) => {

    return (

        <div className="allU">

            <div>
                <div class="titre">
                    <center>
                        Held Items
                    </center>
                </div>

                <div className='bodyU'>
                    <div className='titleAbi'>
                        Dragon-Scale
                    </div>
                    <img className='itemImg' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dragon-scale.png" />
                </div>

            </div>
        </div>
    );

}