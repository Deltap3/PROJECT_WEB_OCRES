const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//si je mets localhost:3000/posts je récupère tout le contenu de la base de donnée (tous les posts)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }
});

//si je veux récupérer un post spécifique. PostId représente tout ce que j'écris derrière posts dans l'url
//ici je récupère un post spécifique en fonction de son id. Dans postmann, je peux afficher l'id en fonction n get et après je mets l'id derrière le /
router.get('/:postId', async (req, res) => {
    try {
        //a chaque fois on utilise Post qu'on a cree au dessus qui est dans le model 
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:prenom', (req, res, next) => {
    Post.findOne({ _prenom: req.params.prenom })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

//si je veux supprimer le post que j'ai séléctionné avec la méthode du dessus 
//pour ca je vais dans postmann, delete, je mets l'id du post que je veux delete apres le posts/ et je send  
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});


//je soumets un post
router.post('/', async (req, res) => {
    const post = new Post({
        prenom: req.body.prenom,
        nombrePoke: req.body.nombrePoke,
        points: req.body.points,
        classement: req.body.classement,
        medailles: req.body.medailles,
        img: req.body.img
    });
    //we save it in the database 
    try {
        const savedPost = await post.save();
        res.json(savedPost);

    } catch (err) {
        res.json({ message: err });
    }
});

//update a specific post -- patch in postmann

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateMany({ _id: req.params.postId }, { $set: { prenom: req.body.prenom, points: req.body.points, nombrePoke: req.body.nombrePoke, classement: req.body.classement, medailles: req.body.medailles, img: req.body.img } });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }

});




module.exports = router;