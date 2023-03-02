const express = require("express")
const router = express.Router()

router.use(logger)

router.get("/", (req, res) => {    //can do '/users' too, need to change app.use in server.js
    console.log(req.query.name)
    res.send('User List')
})

router.get("/new", (req, res) => {
    res.render("users/new")
    // res.send('User new form')
})  //keep it above dynamic paramter as it compiles top to bottom

router.post('/', (req, res) => {
    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName})
    }
    // console.log(req.body.firstName)     //we need middleware to access body
    // res.send("Hi " +req.body.firstName)
})

router
.route("/:id")      //defining location of the route and then performing operations

.get((req, res) => {
    console.log(req.user)
    res.send('Get users with ID '+req.params.id)
})

.put((req, res) => {
    res.send('Update users with ID '+req.params.id)
})

.delete((req, res) => {
    res.send('Delete users with ID '+req.params.id)
})

const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("id", (req, res, next, id) => { // param is kind of middleware
    console.log(id)
    req.user = users[id]
    next()  //it will run infinitely until we call next
}) 

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router     //to import it into our main app

//there are user defined middlewares in express