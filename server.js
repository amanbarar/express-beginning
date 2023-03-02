const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// app.use(logger) //to use middleware globally, put it on the top

//get post put delete catch
app.get('/', (req, res, next) => {      //can put n-number of middleware in function
    console.log('Here')
    //res.sendStatus(500) //HTTP status code
    // res.status(500).send("Hi")  //HTTP status in inspect console
    // res.status(500).json({ message: "Error"})
    // res.send('Hi')
    // res.download("server.js")
    res.render("index", {text: "World"})   //render json or files
})  //usually dont care about next

const userRouter = require('./routes/users')    //make routes

app.use('/users', userRouter)                   //use the routes

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
