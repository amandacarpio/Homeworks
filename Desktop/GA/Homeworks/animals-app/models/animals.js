// animals model

const mongoose = require('./connection')

const { Schema, model } = mongoose // destructuring, grabbing model and Schema off mongoose variable

const animalsSchema = new Schema ({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animals = model('animals', animalsSchema) 

module.exports = Animals