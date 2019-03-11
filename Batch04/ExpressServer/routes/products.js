var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');

router.get('/get/:collectionName', function (req, res, next) {
  // const data = req.body.data;
  const collectionName = req.params.collectionName;
  MongoDbHelper.findDocuments({}, collectionName)
    .then((result) => {
      res.json({ ok: true, result: result });
    })
    .catch(error => {
      res.status(500).json({ ok: false, error: error });
    })
});

router.post('/add', function (req, res, next) {
  const data = req.body.data;
  const collectionName = req.body.collectionName;;
  MongoDbHelper.insertDocument(data, collectionName)
    .then((result) => {
      res.json({ ok: true, result: result });
    })
    .catch(error => {
      res.status(500).json({ ok: false, error: error });
    })
});

module.exports = router;
