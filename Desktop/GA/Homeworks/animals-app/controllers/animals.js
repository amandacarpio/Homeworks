const express = require('express') // bring this in so we can make our router
const Animals = require('../models/animalSchema')

// create router

const router = express.Router()

// routes
// router.get('/seeds', (req, res) => {
    
// })


// index
router.get('/', (req, res) => {
    Animals.find({})
    .then((animals) => {
        res.render('../views/index.ejs', { animals })
    })
})

module.exports = router // without this we'll get an error