require("dotenv").config()
const express = require("express")
const app = express()
const Pokemon = require('./models/pokemon.js')
const methodOverride = require("method-override")
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("public"))
app.use(methodOverride("_method"))

    // INDEX - displays a bunch of Pokemons
    app.get('/pokemon', (req, res) => {
        res.render('index.ejs', { 
        data: Pokemon 
    });
    });
    
    // NEW - add a new pokemon // goes hand-in-hand with create/post request because this brings us to a page that allows us to create a new post
    app.get('/pokemon/new', (req, res) => {
        res.render('new.ejs')
    })

    // SHOW - have separate show pages for each Pokemon accesible by clicking on a Pokemon's index page
    app.get('/pokemon/:id', (req, res) => {
        res.render('show.ejs', { data: Pokemon[req.params.id], index: req.params.id });
    });

    // EDIT - edit exisiting pokemon
    app.get('/pokemon/:id/edit', (req, res) => {
        res.render('edit.ejs', {
            data: Pokemon[req.params.id],
            index: req.params.id
        })
    })

    // CREATE - post request for new pokemon // this will submit the new data to the req.body
    app.post('/pokemon', (req, res) => {
        // console.log(req.body)
        Pokemon.unshift(req.body)
        res.redirect('/pokemon')
    })

    app.put('/pokemon/:id', (req, res) => {
        // access the pokemon to update
        // update target pokemon with the form data
        Pokemon[req.params.id] = req.body
        // console.log(updatedPokemon.name)
        // redirect to our show route with the updated pokemon's id
        res.redirect(`/pokemon/${req.params.id}`)
    })

    //DELETE - delete Pokemon
    app.delete('/pokemon/:id', (req, res) => {
        // splice the item out of the array
        Pokemon.splice(req.params.id, 1)
        //redirect user back to index
        res.redirect("/pokemon")
    })

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})