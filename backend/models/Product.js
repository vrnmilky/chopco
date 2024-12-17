const { Schema, model } = require('mongoose')

const Product = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    price: {
        type: Number
    },

    rating: {
        type: Number
    }
})

module.exports = model( 'Product', Product)