var express = require('express');
var app = express();

var things = require('./things.js');

app.use('/things', things);

app.get('/things/:name/:id', function(req, res){
   res.send("ID: " + req.params.id + " Name: " + req.params.name);
});

// app.get('/', function(req, res){
//    res.send("Hello world!");
// });

// app.post('/hello', function(req, res){
//    res.send("Post function called");
// });

// app.all('/test', function(req, res){
//    res.send("HTTP method does not have any effect on this all function route.");
// });

app.get('*', function(req, res){
   res.send("Page not found.");
});

app.listen(3000);