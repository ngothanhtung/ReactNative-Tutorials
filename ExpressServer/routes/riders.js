var express = require('express');
var router = express.Router();
const { findDocuments, findDocument, updateDocument, insertDocument } = require('../helpers/MongoDbHelper');

router.get('/:id', function (req, res) {
  var id = req.params.id;
  findDocument(id, 'riders')
    .then((result) => {
      res.json({ ok: true, result });
    })
    .catch((error) => {
      res.status(400).json({ ok: false, error });
    });
});

router.put('/:id/review', function (req, res) {
  var id = req.params.id;
  var data = {
    riderId: id,
    star: req.body.star,
    tip: req.body.tip,
    comment: req.body.comment,
    reviewUserId: req.body.reviewUserId,
  };
  insertDocument(data, 'riders-reviews')
    .then((result) => {
      res.json({ ok: true, result: result.data });
    })
    .catch((error) => {
      res.status(400).json({ ok: false, error });
    });
});

module.exports = router;
