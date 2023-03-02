const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {    //can do '/users' too, need to change app.use in server.js
    res.send('User List')
})

router.get("/new", (req, res) => {
    res.send('User new form')
})

module.exports = router     //to import it into our main app