var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

router.get('/products', function (req, res) {
    db.findDocuments({}, "products", function (result) {
        res.json(result);
    })
});

module.exports = router;