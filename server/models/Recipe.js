const mongoose = require('mongoose');

const recipeschema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    name: {

    type: String,
    required: 'this field id required'
    },
    email: {
        type: String,
        required: 'this field is required'
    },
    ingredients: {
        type: String,
        required: 'This field id required'
    },
    category: {
        type: String,
        // enum: ['Thai', 'amefrican', 'chinese', 'Mexican', 'indian'],
        required: 'ths field is required'
    },
    image: {
        type: String,
        required: 'This field is required'
    },
});

// recipeSchema.index( {name: 'text', description: 'text' });




module.exports = mongoose.model('Recipe', recipeschema);