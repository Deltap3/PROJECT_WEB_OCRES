import React, { Component } from 'react'
import "./myWidget.css"



class MyWidget extends React.Component {
    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "http://localhost:3001/posts";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;
        }

        return (

            <div>


                <div class="titre">
                    <center>
                        Mon équipe
                    </center>

                </div>


                <div class="cadres">

                    {this.state.people.map(person => (
                        <div class="cadre">
                            <div key={person.prenom}>
                                <center>
                                    <br />
                                    <div class="prenom">{person.prenom}</div>
                                    <br />
                                    <img className='image' src={person.img} />

                                    <div>Classement : {person.classement}</div>
                                    <div>Nombre de pokémons : {person.nombrePoke}</div>
                                    <div>Points : {person.points}</div>
                                    <div>Medailles : {person.medailles.medaille1}, </div>
                                    <div>{person.medailles.medaille2}, </div>
                                    <div>{person.medailles.medaille3}</div>
                                </center>

                                <br />
                            </div>


                        </div>

                    ))}
                </div>
            </div>
        );
    }
}
export default MyWidget