require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const AnimalRouter = require('./controllers/animals')
const app = express()
const PORT = process.env.PORT || 4000


// middlewares

app.use(methodOverride('_method')) // allows you to override requests such as turning a post request into a delete request 
app.use(express.urlencoded({extended:true})) // defines req.body // without this, req.body is undefined
app.use(express.static('public')) // accesses a public folder so it can use its files // this runs in order, so it should come at the end
app.use('/animals', AnimalRouter) // this will mount '/fruits/ to the beginning of my routes in the routes on controllers/animals (AnimalRouter)


app.listen(PORT, () => 
    console.log(`Animals loading on port ${PORT}`))
