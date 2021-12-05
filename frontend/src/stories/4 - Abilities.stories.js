import React from 'react';
import Items from '../Components/Items';
import "../Components/PokemonDetails.css"
import Ability from '../Components/Ability';

export default {
    title: 'habilite',
    component: Ability
};

export const AbilitiesWidget = (state = {
    loading: true,
    people: []
}) => {

    return (
        <div className="allU">


            <div>

                <div class="titre">
                    <center>
                        Abilities
                    </center>
                </div>
                <div className='bodyU'>
                    <div className="titleAbi">
                        Poison-Point
                    </div>
                    <div className="description">
                        Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.
                    </div>
                    <div className="titleAbi">
                        Sniper
                    </div>
                    <div className="description">
                        This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.                </div>
                </div>

            </div>
        </div>
    );

}