require("dotenv").config()
const express = require("express")
const Budget= require("./models/budget.js")
const app = express()
const PORT = process.env.PORT || 3004

app.use("/static", express.static("public"))
app.use(express.urlencoded({ extended: true }))

// const router = express.Router()

// INDEX: GET /budgets
app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
        budgetData: Budget
    })
})

// NEW: GET /budgets/new
app.get("/budgets/new", (req, res) => {
    res.render("new.ejs", {
        budgetData: Budget
    })
})

// SHOW: GET /budgets/:index
app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {
        budgetData: Budget[req.params.id]
    })
})

// CREATE: POST /budgets
app.post("/budgets", (req, res) => {
    Budget.create(req.body)
    // newBudget.push("/budgets")
    res.redirect("/budgets")
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})