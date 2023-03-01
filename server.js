const express = require('express')
const app = express()

//get post put delete catch
app.get('/', (req, res) => {
    console.log('Here')
    res.send('Hi')
})  //usually dont care about next

app.listen(3000)
