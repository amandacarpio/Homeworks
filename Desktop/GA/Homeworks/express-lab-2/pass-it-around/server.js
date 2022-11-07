const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`99 bottles of beer on the wall. <a href='http://localhost:3001/98'>Take one down, pass it around.</a>`)
})

app.get('/:numberOfBottles', (req, res) => {
    let numOfBottle = parseInt(req.params.numberOfBottles) - 1
    if(numOfBottle === -1) {
        res.send(`${req.params.numberOfBottles} bottles of beer on the wall <a href='http://localhost:3001/99'>Start over.</a>`)
    } else {
        res.send(`${req.params.numberOfBottles} bottles of beer on the wall <a href='http://localhost:3001/${numOfBottle}'>Take one down, pass it around.</a>`)
    }
})

app.listen(3001, () => {
    console.log('listening')
})
