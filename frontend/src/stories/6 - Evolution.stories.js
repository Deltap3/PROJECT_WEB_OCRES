import React from 'react';
import Evolution from '../Components/Evolution';
import PokemonDetails from '../Components/Evolution';
import "../Components/PokemonDetails.css"


export default {
    title: 'evolutionPoke',
    component: Evolution
};


export const EvolutionWidget = (state = {
    loading: true,
    people: []
}) => {

    return (
        <div className="allU">


            <div>

                <div class="titre">
                    <center>
                        Evolution
                    </center>
                </div>
                <div className='bodyU'>
                    <div className="evotitle">
                        Pre-Evolution
                        <div className='pokemonE'>
                            <div className='titleE'>
                                Horsea
                            </div>
                            <div className="num">
                                116
                            </div>
                            <img className='imageE' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png" />

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



                    <div className="evotitle">
                        Evolution
                        <div className='pokemonE'>
                            <div className='titleE'>
                                Kingdra
                            </div>
                            <div className="num">
                                230
                            </div>
                            <img className='imageE' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png" />

                            <div className='pokeType'> Type :&nbsp;
                                <div className="type" style={{
                                    color: "white",
                                    backgroundColor: "#6390F0"
                                }}>
                                    {"Water"}&nbsp;

                                </div>

                                <div className="type" style={{
                                    color: "white",
                                    backgroundColor: "#6F35FC"
                                }}>
                                    {"Dragon"}&nbsp;

                                </div>
                            </div>

                        </div>
                    </div>





                </div>

            </div>
        </div>
    );

}