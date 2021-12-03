//tableau : 
var tabimg = new Array();
var tabprenom = new Array();
var tabpoints = new Array();
var tabnombrePoke = new Array();
var tabclassement = new Array();
var tabmedaille1 = new Array();
var tabmedaille2 = new Array();
var tabmedaille3 = new Array();

/*fetch('http://localhost:3000/posts')
    .then(res=>res.json())
    .then(data=> console.log(data))*/

fetch('http://localhost:3001/posts')
    .then(res => {

        if (res.ok) {
            res.json().then(data => {


                for (let i = 0; i < data.length; i++) {
                    tabimg[i] = data[i].img
                    tabprenom[i] = data[i].prenom
                    tabpoints[i] = data[i].points
                    tabnombrePoke[i] = data[i].nombrePoke
                    tabclassement[i] = data[i].classement
                    tabmedaille1[i] = data[i].medailles.medaille1
                    tabmedaille2[i] = data[i].medailles.medaille2
                    tabmedaille3[i] = data[i].medailles.medaille3
                }

                //Pierre
                img.src = tabimg[0]
                document.getElementById('prenom').innerHTML = tabprenom[0]
                document.getElementById('nombrePoke').innerHTML = "Nombre Pokemons : " + tabnombrePoke[0]
                document.getElementById('points').innerHTML = "Points : " + tabpoints[0]
                document.getElementById('classement').innerHTML = "Classement : " + tabclassement[0]
                document.getElementById('medaille1').innerHTML = tabmedaille1[0] + ", "
                document.getElementById('medaille2').innerHTML = tabmedaille2[0] + ", "
                document.getElementById('medaille3').innerHTML = tabmedaille3[0]
                //Capucine
                img2.src = tabimg[1]
                document.getElementById('prenom2').innerHTML = tabprenom[1]
                document.getElementById('nombrePoke2').innerHTML = "Nombre Pokemons : " + tabnombrePoke[1]
                document.getElementById('points2').innerHTML = "Points : " + tabpoints[1]
                document.getElementById('classement2').innerHTML = "Classement : " + tabclassement[1]
                document.getElementById('medaille12').innerHTML = tabmedaille1[1] + ", "
                document.getElementById('medaille22').innerHTML = tabmedaille2[1] + ", "
                document.getElementById('medaille32').innerHTML = tabmedaille3[1]
                //Jeremy
                img3.src = tabimg[2]
                document.getElementById('prenom3').innerHTML = tabprenom[2]
                document.getElementById('nombrePoke3').innerHTML = "Nombre Pokemons : " + tabnombrePoke[2]
                document.getElementById('points3').innerHTML = "Points : " + tabpoints[2]
                document.getElementById('classement3').innerHTML = "Classement : " + tabclassement[2]
                document.getElementById('medaille13').innerHTML = tabmedaille1[2] + ", "
                document.getElementById('medaille23').innerHTML = tabmedaille2[2] + ", "
                document.getElementById('medaille33').innerHTML = tabmedaille3[2]
                //Maxence
                img4.src = tabimg[3]
                document.getElementById('prenom4').innerHTML = tabprenom[3]
                document.getElementById('nombrePoke4').innerHTML = "Nombre Pokemons : " + tabnombrePoke[3]
                document.getElementById('points4').innerHTML = "Points : " + tabpoints[3]
                document.getElementById('classement4').innerHTML = "Classement : " + tabclassement[3]
                document.getElementById('medaille14').innerHTML = tabmedaille1[3] + ", "
                document.getElementById('medaille24').innerHTML = tabmedaille2[3] + ", "
                document.getElementById('medaille34').innerHTML = tabmedaille3[3]
                //Julie
                img5.src = tabimg[4]
                document.getElementById('prenom5').innerHTML = tabprenom[4]
                document.getElementById('nombrePoke5').innerHTML = "Nombre Pokemons : " + tabnombrePoke[4]
                document.getElementById('points5').innerHTML = "Points : " + tabpoints[4]
                document.getElementById('classement5').innerHTML = "Classement : " + tabclassement[4]
                document.getElementById('medaille15').innerHTML = tabmedaille1[4] + ", "
                document.getElementById('medaille25').innerHTML = tabmedaille2[4] + ", "
                document.getElementById('medaille35').innerHTML = tabmedaille3[4]
                //Hadrien
                img6.src = tabimg[5]
                document.getElementById('prenom6').innerHTML = tabprenom[5]
                document.getElementById('nombrePoke6').innerHTML = "Nombre Pokemons : " + tabnombrePoke[5]
                document.getElementById('points6').innerHTML = "Points : " + tabpoints[5]
                document.getElementById('classement6').innerHTML = "Classement : " + tabclassement[5]
                document.getElementById('medaille16').innerHTML = tabmedaille1[5] + ", "
                document.getElementById('medaille26').innerHTML = tabmedaille2[5] + ", "
                document.getElementById('medaille36').innerHTML = tabmedaille3[5]
                //Melvin
                img7.src = tabimg[6]
                document.getElementById('prenom7').innerHTML = tabprenom[6]
                document.getElementById('nombrePoke7').innerHTML = "Nombre Pokemons : " + tabnombrePoke[6]
                document.getElementById('points7').innerHTML = "Points : " + tabpoints[6]
                document.getElementById('classement7').innerHTML = "Classement : " + tabclassement[6]
                document.getElementById('medaille17').innerHTML = tabmedaille1[6] + ", "
                document.getElementById('medaille27').innerHTML = tabmedaille2[6] + ", "
                document.getElementById('medaille37').innerHTML = tabmedaille3[6]
                //Tom
                img8.src = tabimg[7]
                document.getElementById('prenom8').innerHTML = tabprenom[7]
                document.getElementById('nombrePoke8').innerHTML = "Nombre Pokemons : " + tabnombrePoke[7]
                document.getElementById('points8').innerHTML = "Points : " + tabpoints[7]
                document.getElementById('classement8').innerHTML = "Classement : " + tabclassement[7]
                document.getElementById('medaille18').innerHTML = tabmedaille1[7] + ", "
                document.getElementById('medaille28').innerHTML = tabmedaille2[7] + ", "
                document.getElementById('medaille38').innerHTML = tabmedaille3[7]
                //Julien
                img9.src = tabimg[8]
                document.getElementById('prenom9').innerHTML = tabprenom[8]
                document.getElementById('nombrePoke9').innerHTML = "Nombre Pokemons : " + tabnombrePoke[8]
                document.getElementById('points9').innerHTML = "Points : " + tabpoints[8]
                document.getElementById('classement9').innerHTML = "Classement : " + tabclassement[8]
                document.getElementById('medaille19').innerHTML = tabmedaille1[8] + ", "
                document.getElementById('medaille29').innerHTML = tabmedaille2[8] + ", "
                document.getElementById('medaille39').innerHTML = tabmedaille3[8]

            })
        } else {
            console.log("Erreur")
        }
    })