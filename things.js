var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("GET called.");
});

router.post('/', function(req, res){
    res.send("Post response.");
});

module.exports = router;