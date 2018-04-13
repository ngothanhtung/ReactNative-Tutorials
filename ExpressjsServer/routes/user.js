var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

router.get('/get/:email', function (req, res) {
  var email = req.params.email;
  //console.log(req.params);
  db.findDocuments({ email: email }, "users", function (result) {
    res.json({
      success: true,
      message: "OK",
      result: result
    });
  })
});

router.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  db.findDocuments({ email: email, password: password }, "users", function (result) {
    res.json({
      success: true,
      message: "OK",
      result: result
    });
  })
});

module.exports = router;