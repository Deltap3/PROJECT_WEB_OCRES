//Pierre
const img = document.getElementById('img');
const prenom = document.getElementById('prenom');
const points = document.getElementById('points');
const nombrePoke = document.getElementById('nombrePoke');
const classement = document.getElementById('classement');
const medaille1 = document.getElementById('medaille1');
const medaille2 = document.getElementById('medaille2');
const medaille3 = document.getElementById('medaille3');
//Capucine
const img2 = document.getElementById('img2');
const prenom2 = document.getElementById('prenom2');
const points2 = document.getElementById('points2');
const nombrePoke2 = document.getElementById('nombrePoke2');
const classement2 = document.getElementById('classement2');
const medaille12 = document.getElementById('medaille12');
const medaille22 = document.getElementById('medaille22');
const medaille32 = document.getElementById('medaille32');
//Jeremy
const img3 = document.getElementById('img3');
const prenom3 = document.getElementById('prenom3');
const points3 = document.getElementById('points3');
const nombrePoke3 = document.getElementById('nombrePoke3');
const classement3 = document.getElementById('classement3');
const medaille13 = document.getElementById('medaille13');
const medaille23 = document.getElementById('medaille23');
const medaille33 = document.getElementById('medaille33');
//Maxence
const img4 = document.getElementById('img4');
const prenom4 = document.getElementById('prenom4');
const points4 = document.getElementById('points4');
const nombrePoke4 = document.getElementById('nombrePoke4');
const classement4 = document.getElementById('classement4');
const medaille14 = document.getElementById('medaille14');
const medaille24 = document.getElementById('medaille24');
const medaille34 = document.getElementById('medaille34');
//Julie
const img5 = document.getElementById('img5');
const prenom5 = document.getElementById('prenom5');
const points5 = document.getElementById('points5');
const nombrePoke5 = document.getElementById('nombrePoke5');
const classement5 = document.getElementById('classement5');
const medaille15 = document.getElementById('medaille15');
const medaille25 = document.getElementById('medaille25');
const medaille35 = document.getElementById('medaille35');
//Hadrien
const img6 = document.getElementById('img6');
const prenom6 = document.getElementById('prenom6');
const points6 = document.getElementById('points6');
const nombrePoke6 = document.getElementById('nombrePoke6');
const classement6 = document.getElementById('classement6');
const medaille16 = document.getElementById('medaille16');
const medaille26 = document.getElementById('medaille26');
const medaille36 = document.getElementById('medaille36');
//Melvin
const img7 = document.getElementById('img7');
const prenom7 = document.getElementById('prenom7');
const points7 = document.getElementById('points7');
const nombrePoke7 = document.getElementById('nombrePoke7');
const classement7 = document.getElementById('classement7');
const medaille17 = document.getElementById('medaille17');
const medaille27 = document.getElementById('medaille27');
const medaille37 = document.getElementById('medaille37');
//Tom
const img8 = document.getElementById('img8');
const prenom8 = document.getElementById('prenom8');
const points8 = document.getElementById('points8');
const nombrePoke8 = document.getElementById('nombrePoke8');
const classement8 = document.getElementById('classement8');
const medaille18 = document.getElementById('medaille18');
const medaille28 = document.getElementById('medaille28');
const medaille38 = document.getElementById('medaille38');
//Julien
const img9 = document.getElementById('img9');
const prenom9 = document.getElementById('prenom9');
const points9 = document.getElementById('points9');
const nombrePoke9 = document.getElementById('nombrePoke9');
const classement9 = document.getElementById('classement9');
const medaille19 = document.getElementById('medaille19');
const medaille29 = document.getElementById('medaille29');
const medaille39 = document.getElementById('medaille39');


/*fetch('http://localhost:3000/posts')
    .then(res=>res.json())
    .then(data=> console.log(data))*/



fetch('http://localhost:3000/posts')
    .then(res => {

        if (res.ok) {
            res.json().then(data => {
                //Pierre
                img.src = data[0].img
                document.getElementById('prenom').innerHTML = data[0].prenom
                document.getElementById('nombrePoke').innerHTML = "Nombre Pokemons : " + data[0].nombrePoke
                document.getElementById('points').innerHTML = "Points : " + data[0].points
                document.getElementById('classement').innerHTML = "Classement : " + data[0].classement
                document.getElementById('medaille1').innerHTML = data[0].medailles.medaille1 + ", "
                document.getElementById('medaille2').innerHTML = data[0].medailles.medaille2 + ", "
                document.getElementById('medaille3').innerHTML = data[0].medailles.medaille3
                //Capucine
                img2.src = data[1].img
                document.getElementById('prenom2').innerHTML = data[1].prenom
                document.getElementById('nombrePoke2').innerHTML = "Nombre Pokemons : " + data[1].nombrePoke
                document.getElementById('points2').innerHTML = "Points : " + data[1].points
                document.getElementById('classement2').innerHTML = "Classement : " + data[1].classement
                document.getElementById('medaille12').innerHTML = data[1].medailles.medaille1 + ", "
                document.getElementById('medaille22').innerHTML = data[1].medailles.medaille2 + ", "
                document.getElementById('medaille32').innerHTML = data[1].medailles.medaille3
                //Jeremy
                img3.src = data[2].img
                document.getElementById('prenom3').innerHTML = data[2].prenom
                document.getElementById('nombrePoke3').innerHTML = "Nombre Pokemons : " + data[2].nombrePoke
                document.getElementById('points3').innerHTML = "Points : " + data[2].points
                document.getElementById('classement3').innerHTML = "Classement : " + data[2].classement
                document.getElementById('medaille13').innerHTML = data[2].medailles.medaille1 + ", "
                document.getElementById('medaille23').innerHTML = data[2].medailles.medaille2 + ", "
                document.getElementById('medaille33').innerHTML = data[2].medailles.medaille3
                //Maxence
                img4.src = data[3].img
                document.getElementById('prenom4').innerHTML = data[3].prenom
                document.getElementById('nombrePoke4').innerHTML = "Nombre Pokemons : " + data[3].nombrePoke
                document.getElementById('points4').innerHTML = "Points : " + data[3].points
                document.getElementById('classement4').innerHTML = "Classement : " + data[3].classement
                document.getElementById('medaille14').innerHTML = data[3].medailles.medaille1 + ", "
                document.getElementById('medaille24').innerHTML = data[3].medailles.medaille2 + ", "
                document.getElementById('medaille34').innerHTML = data[3].medailles.medaille3
                //Julie
                img5.src = data[4].img
                document.getElementById('prenom5').innerHTML = data[4].prenom
                document.getElementById('nombrePoke5').innerHTML = "Nombre Pokemons : " + data[4].nombrePoke
                document.getElementById('points5').innerHTML = "Points : " + data[4].points
                document.getElementById('classement5').innerHTML = "Classement : " + data[4].classement
                document.getElementById('medaille15').innerHTML = data[4].medailles.medaille1 + ", "
                document.getElementById('medaille25').innerHTML = data[4].medailles.medaille2 + ", "
                document.getElementById('medaille35').innerHTML = data[4].medailles.medaille3
                //Hadrien
                img6.src = data[5].img
                document.getElementById('prenom6').innerHTML = data[5].prenom
                document.getElementById('nombrePoke6').innerHTML = "Nombre Pokemons : " + data[5].nombrePoke
                document.getElementById('points6').innerHTML = "Points : " + data[5].points
                document.getElementById('classement6').innerHTML = "Classement : " + data[5].classement
                document.getElementById('medaille16').innerHTML = data[5].medailles.medaille1 + ", "
                document.getElementById('medaille26').innerHTML = data[5].medailles.medaille2 + ", "
                document.getElementById('medaille36').innerHTML = data[5].medailles.medaille3
                //Melvin
                img7.src = data[6].img
                document.getElementById('prenom7').innerHTML = data[6].prenom
                document.getElementById('nombrePoke7').innerHTML = "Nombre Pokemons : " + data[6].nombrePoke
                document.getElementById('points7').innerHTML = "Points : " + data[6].points
                document.getElementById('classement7').innerHTML = "Classement : " + data[6].classement
                document.getElementById('medaille17').innerHTML = data[6].medailles.medaille1 + ", "
                document.getElementById('medaille27').innerHTML = data[6].medailles.medaille2 + ", "
                document.getElementById('medaille37').innerHTML = data[6].medailles.medaille3
                //Tom
                img8.src = data[7].img
                document.getElementById('prenom8').innerHTML = data[7].prenom
                document.getElementById('nombrePoke8').innerHTML = "Nombre Pokemons : " + data[7].nombrePoke
                document.getElementById('points8').innerHTML = "Points : " + data[7].points
                document.getElementById('classement8').innerHTML = "Classement : " + data[7].classement
                document.getElementById('medaille18').innerHTML = data[7].medailles.medaille1 + ", "
                document.getElementById('medaille28').innerHTML = data[7].medailles.medaille2 + ", "
                document.getElementById('medaille38').innerHTML = data[7].medailles.medaille3
                //Julien
                img9.src = data[8].img
                document.getElementById('prenom9').innerHTML = data[8].prenom
                document.getElementById('nombrePoke9').innerHTML = "Nombre Pokemons : " + data[8].nombrePoke
                document.getElementById('points9').innerHTML = "Points : " + data[8].points
                document.getElementById('classement9').innerHTML = "Classement : " + data[8].classement
                document.getElementById('medaille19').innerHTML = data[8].medailles.medaille1 + ", "
                document.getElementById('medaille29').innerHTML = data[8].medailles.medaille2 + ", "
                document.getElementById('medaille39').innerHTML = data[8].medailles.medaille3



            })
        } else {
            console.log("Erreur")
        }
    })