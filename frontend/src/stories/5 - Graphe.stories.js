import React from 'react';
import PokemonDetails from '../Components/PokemonDetails';
import "../Components/PokemonDetails.css"
import { PieChart } from 'react-minimal-pie-chart';


export default {
    title: 'detailsPoke',
    component: PokemonDetails
};

export const GrapheWidget = (state = {
    loading: true,
    people: []
}) => {

    return (
        <div className="allU">

            <div>
                <div class="titre">
                    <center>
                        Graph
                    </center>
                </div>
                <div className='bodyU'>

                    <PieChart className="chart"
                        data={[
                            { title: "Special-Defense", value: 45, color: '#70e000' },
                            { title: "Special-Attack", value: 95, color: '#ba0c0c' },
                            { title: "Speed", value: 85, color: '#7a7a7a' },
                            { title: "Hp", value: 55, color: '#4cc9f0' },
                            { title: "Attack", value: 65, color: '#9d4edd' },
                            { title: "Defense", value: 95, color: '#ff9f1c' },
                        ]} label={({ dataEntry }) => dataEntry.title + ': ' + dataEntry.value}
                        labelStyle={{ fontSize: '10px' }}
                        labelPosition={100}
                    />
                </div>
            </div>
        </div>
    );
}