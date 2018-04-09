var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

var client = require('../helpers/MongoClientHelper');

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


router.post('/', function (req, res) {
  var user = req.body;
  client.insertOne({ name: 'John' }, 'users', () => {
    res.status(200).send('OK');
  });
});

module.exports = router;