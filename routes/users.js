const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {    //can do '/users' too, need to change app.use in server.js
    res.send('User List')
})

router.get("/new", (req, res) => {
    res.send('User new form')
})  //keep it above dynamic paramter as it compiles top to bottom

router.post('/', (req, res) => {
    res.send("Create user")
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
module.exports = router     //to import it into our main app