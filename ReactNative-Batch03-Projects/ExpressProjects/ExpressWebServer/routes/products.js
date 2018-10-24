var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var db = new MongoDbHelper();

router.get('/', function (req, res, next) {
  db.findDocuments({}, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/:id', function (req, res, next) {
  var id = req.params.id
  db.findDocument(id, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/', function (req, res, next) {
  var data = req.body;
  db.insertDocument(data, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  db.deleteDocument(id, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.put('/:id', function (req, res, next) {
  var id = req.params.id;
  var data = req.body;
  db.updateDocument(id, data, 'products')
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
