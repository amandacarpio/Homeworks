const express = require('express');
const app = express();

const magicResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/greeting', (req, res) => {
    res.send('Hello Stranger');
})

app.get('/magic/:question', (req, res) => {
    res.send(`
    ${req.params.question} <h1>${magicResponse[Math.floor(Math.random() * magicResponse.length)]}</h1>
    `)
    console.log('Magic 8 Ball express application created.')
})

app.get('/greeting/:name', (req, res) => {
    res.send("What's up " + req.params.name + "?" + " It's so great to see you.")
    console.log('Greeting express application created')
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send('This is the tip amount: ' + '$' + parseInt(req.params.total)*(parseInt(req.params.tipPercentage) / 100)) //parseInt turns strings -> numbers // MUST HAVE 'SOMETHING HERE: ' OR ELSE IT WON'T WORK // PEMDAS was used to convert tip percentage into decimal
    console.log('Tip Calculator express application created.')
})

app.listen(3000, () => {
    console.log('listening');
});