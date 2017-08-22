var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('about', { title: 'About',
                        name: "Bucky"});
});

module.exports = router;
