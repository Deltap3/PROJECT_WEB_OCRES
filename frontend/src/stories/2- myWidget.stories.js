import React from 'react';
import myWidget from "../Components/myWidget";
import "../Components/myWidget.css"

export default {
  title: 'monwidget',
  component: myWidget
};

export const monWidget = (state = {
  loading: true,
  people: []
}) => {

  return (

    <div>

      <div class="titre">
        <center>
          Mon équipe
        </center>
      </div>

      <div class="cadres">

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Pierre</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C5603AQGMp2Yxu2XgtA/profile-displayphoto-shrink_200_200/0/1634916716716?e=1642032000&v=beta&t=dE9FUxU1N6wt8ulozS9Ozqfg8ENURjE9CVC8pUPIV14" />
            <div>Classement : 1</div>
            <div>Nombre de Pokémons : 31</div>
            <div>Points : 12836</div>
            <div>Medailles : Collectionneur, </div>
            <div>Scientifique, </div>
            <div>Joggeur</div>
          </center>

          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Capucine</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4E03AQHb2wfH_WO5Fw/profile-displayphoto-shrink_200_200/0/1636210173467?e=1642032000&v=beta&t=_dHyzEaa0js87MVL2CaF3puTAgJWt8YhDc_Lp-KaeX8" />
            <div>Classement : 2</div>
            <div>Nombre de Pokémons : 28</div>
            <div>Points : 11541</div>
            <div>Medailles : Eleveur, </div>
            <div>Randonneur, </div>
            <div>Vacancier</div>
          </center>

          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Jeremy</div>
            <br />
            <img className='img' src="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-1/p200x200/244493021_1972645886249827_2221941888864394589_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=JDSTo6usjHUAX9Xyqvh&tn=8OCBIxHJ0-0YZRqU&_nc_ht=scontent-cdt1-1.xx&oh=b3e0283f10271667b0cf531991c99db1&oe=61A9CD4E" />
            <div>Classement : 3</div>
            <div>Nombre de Pokémons : 24</div>
            <div>Points : 11135</div>
            <div>Medailles : Pêcheur, </div>
            <div>Combattant, </div>
            <div>Zarbi</div>
          </center>

          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Maxence</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4D03AQHvJ7bBwXlIZw/profile-displayphoto-shrink_200_200/0/1617481283316?e=1642032000&v=beta&t=euHS-2aBeAiDbCYVu1NUY5oqekSbHlIpcqP4HWzyJNg" />
            <div>Classement : 4</div>
            <div>Nombre de Pokémons : 21</div>
            <div>Points : 10999</div>
            <div>Medailles : Gamin, </div>
            <div>Fan de Pikachu, </div>
            <div>Zarbi</div>
          </center>
          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Julie</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4E03AQEHIFViqh4c7A/profile-displayphoto-shrink_100_100/0/1634637741643?e=1641427200&v=beta&t=mLxJTG8AYPEEjEZyZ9f5JOwmvGw_FABF-rC262fCUd0" />
            <div>Classement : 5</div>
            <div>Nombre de Pokémons : 18</div>
            <div>Points : 10001</div>
            <div>Medailles : Johto, </div>
            <div>Maître, </div>
            <div>Combattant Légendaire</div>
          </center>
          <br />
        </div>


        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Hadrien</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4E03AQFFxwnR4Q1NXg/profile-displayphoto-shrink_400_400/0/1631883414882?e=1643846400&v=beta&t=NScF1T0oWP8wtUZ9askbjY9y0wx6L2EdvXkQEjvBoow" />
            <div>Classement : 6</div>
            <div>Nombre de Pokémons : 17</div>
            <div>Points : 9481</div>
            <div>Medailles : Maître des Baies, </div>
            <div>Champion des Arènes, </div>
            <div>Hoenn</div>
          </center>
          <br />
        </div>


        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Melvin</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C5603AQFnL5xXx82h3Q/profile-displayphoto-shrink_200_200/0/1602797250233?e=1642032000&v=beta&t=hghdoCORbuwSJpHQqT9572DGg6Q72rX4t3OP3nU9Sh0" />
            <div>Classement : 7</div>
            <div>Nombre de Pokémons : 14</div>
            <div>Points : 8125</div>
            <div>Medailles : Pokémon Ranger, </div>
            <div>Star, </div>
            <div>Gentleman</div>
          </center>
          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Tom</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4E03AQFKDB9lxwprgA/profile-displayphoto-shrink_400_400/0/1600075162363?e=1643846400&v=beta&t=1R8gHFyJUeGnyQrH86pzvEnFrtw-Sx5Bwd-Hp6Q8ON4" />
            <div>Classement : 8</div>
            <div>Nombre de Pokémons : 13</div>
            <div>Points : 8124</div>
            <div>Medailles : Pilote, </div>
            <div>Sinnoh, </div>
            <div>Vénérable de la Ligue Super</div>
          </center>
          <br />
        </div>

        <div class="cadre">
          <center>
            <br />
            <div class="prenom">Julien</div>
            <br />
            <img className='img' src="https://media-exp1.licdn.com/dms/image/C4E03AQEx1dlEl0AQkw/profile-displayphoto-shrink_200_200/0/1637056638365?e=1642636800&v=beta&t=sjvv36CUY4QawjsSOe0LMCh2sZ2JfhLAKm-rIg_KMcw" />
            <div>Classement : 9</div>
            <div>Nombre de Pokémons : 5</div>
            <div>Points : 5021</div>
            <div>Medailles : Caméraman, </div>
            <div>Unys, </div>
            <div>Purificateur</div>
          </center>
          <br />
        </div>

      </div>

    </div>
  );

}