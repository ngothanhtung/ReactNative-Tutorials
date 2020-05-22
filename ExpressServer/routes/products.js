var express = require('express');
var router = express.Router();
const { findDocuments, findDocument, insertDocument } = require('../helpers/MongoDbHelper');

router.get('/', function (req, res) {
  findDocuments({}, 'products')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error,
      });
    });
});

router.get('/:id', function (req, res) {
  findDocument(req.params.id, 'products')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error: error,
      });
    });
});

router.post('/', function (req, res) {
  var data = req.body;
  insertDocument(data, 'products')
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        error: error,
      });
    });
});

module.exports = router;
