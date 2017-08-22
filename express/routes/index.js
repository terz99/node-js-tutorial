var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'The New Boston',
                        name: "Bucky"});
});

module.exports = router;
