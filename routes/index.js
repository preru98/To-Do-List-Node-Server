var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome To Atlas Tutorial");
});

module.exports = router;
// PrernaSharma
// pidev