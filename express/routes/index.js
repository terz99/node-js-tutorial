var express = require('express');
var router = express.Router();
var vd = require("../videodata");
var path = require("path");

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'The New Boston',
    name: "Bucky",
    videodata: vd,
    path: path});
});

module.exports = router;
