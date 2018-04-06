var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var data = {
    id: 1,
    name: 'iPhone X',
    price: 1200
  };
  res.json(data);
});

module.exports = router;
