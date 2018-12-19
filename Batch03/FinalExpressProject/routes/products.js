var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

router.post('/add', function (req, res, next) {
  db.insertDocument(req.body, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});


router.get('/', function (req, res, next) {
  db.findDocuments({}, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

module.exports = router;
