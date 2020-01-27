const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [
            true,
            'Please Provide a name!'
        ],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    
    type: {
        type: String,
        required: [
            true,
            'Please Provide a type of animal'
        ],
        minlength: [3, 'Type of animal name must at least 3 character long']
    },

    description: {
        type: String,
        required: [
            true,
            'Plese provide a description'
        ],
        minlength: [3, 'Description must be at least 3 character long']
    },
    skillone: {type:String},
    skilltwo: {type:String},
    skillthree: {type:String}
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet