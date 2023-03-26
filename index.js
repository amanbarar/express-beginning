var express = require('express');
var app = express();

var things = require('./things.js');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res){
   res.render('first_view');
})

app.listen(3000);