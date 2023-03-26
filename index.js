var express = require('express');
var app = express();

var things = require('./things.js');

app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});


app.get('/things', function(req, res){
   res.send("Things called");
   next();
});

app.get('*', function(req, res){
   res.send("Page not found.");
});

app.listen(3000);