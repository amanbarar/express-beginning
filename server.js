const express = require('express')
const app = express()

app.set('view engine', 'ejs')

//get post put delete catch
app.get('/', (req, res) => {
    console.log('Updated')
    //res.sendStatus(500) //HTTP status code
    // res.status(500).send("Hi")  //HTTP status in inspect console
    // res.status(500).json({ message: "Error"})
    // res.send('Hi')
    // res.download("server.js")
    res.render("index", {text: "World"})   //render json or files
})  //usually dont care about next

const userRouter = require('./routes/users')    //make routes

app.use('/users', userRouter)                   //use the routes

app.listen(3000)
