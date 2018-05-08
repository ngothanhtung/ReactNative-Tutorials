var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

router.get('/albums', function (req, res) {
  db.findDocuments({}, "albums", function (result) {
    res.json({
      success: true,
      message: "OK",
      token: "",
      result: result
    });
  })
});

router.get('/photos/:albumId', function (req, res) {
  const albumId = req.params.albumId;
  db.findDocuments({ albumId: ObjectID(albumId) }, "photos", function (result) {
    res.json({
      success: true,
      message: "OK",
      token: "",
      result: result
    });
  })
});

module.exports = router;