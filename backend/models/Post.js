const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({

    prenom: {
        type: String,
        required: true
    },
    nombrePoke: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    classement: {
        type: Number,
        required: true
    },
    medailles:
    {
        medaille1: {
            type: String
        },
        medaille2: {
            type: String
        },
        medaille3: {
            type: String
        }
    },
    img: {
        type: String
    }
});


module.exports = mongoose.model('Posts', PostSchema);
