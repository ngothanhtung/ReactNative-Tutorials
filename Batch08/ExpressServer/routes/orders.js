var express = require('express');
var router = express.Router();

var MongoDbHelper = require('../helpers/MongoDbHelper');

/* GET users listing. */
router.get('/', function (req, res, next) {
  MongoDbHelper.findDocuments({}, 'Orders')
    .then((result) => {
      // OK
      res.status(200).json({ ok: true, result: result });
    })
    .catch((err) => {
      res.status(500).json({ ok: false, err: err });
    });
});

/* GET users listing. */
router.get('/:id', function (req, res, next) {
  const id = req.params.id;

  MongoDbHelper.findDocument(id, 'Orders')
    .then((result) => {
      res.status(200).json({ ok: true, result: result });
    })
    .catch((err) => {
      res.status(200).json({ ok: false, err: err });
    });
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const body = req.body;
  console.log('body:', body);
  // OK

  MongoDbHelper.insertDocument(body, 'Orders')
    .then((result) => {
      res.status(200).json({ ok: true, result: result.data });
    })
    .catch((err) => {
      res.status(500).json({ ok: false, err: err });
    });
});

module.exports = router;
