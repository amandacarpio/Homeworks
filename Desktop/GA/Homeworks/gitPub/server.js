const express = require("express")
const app = express()
const PORT=3000
const drinks = require("./models/drinks")
const food = require("./models/food")

app.set('view engine', 'ejs') // Needed this to get res.render(" ", {}) to work

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    //     res.send( drinks )
    res.render('drinks_index', {
        allDrinks: drinks
    })
})

app.get("/drinks/:id", (req, res) => {
    const idGet = req.params.id
    res.render('drinks_show', {
        selectedName: drinks[idGet].name,
        selectedImage: drinks[idGet].image,
        selectedPrice: drinks[idGet].price,
    })
})

app.get("/food", (req, res) => {
    res.render('food_index', {
        allFoods: food
    })
})

app.get("/food/:id", (req, res) => {
    const getFood = req.params.id
    res.render('food_show', {
        selectedName: food[getFood].name,
        selectedImage: food[getFood].image,
        selectedPrice: food[getFood].price,
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})