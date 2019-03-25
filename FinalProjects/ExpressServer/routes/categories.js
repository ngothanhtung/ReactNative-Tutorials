var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

// Example: GET: http://localhost:3000/categories/
router.get('/', function(req, res, next) {
	MongoDbHelper.findDocuments({}, 'categories', {})
		.then(result => {
			res.json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// Example: GET: http://localhost:3000/categories/5ba1c1b80a456c86100cc95a/products
router.get('/:categoryId/products', function(req, res, next) {
	const categoryId = req.params.categoryId;
	MongoDbHelper.findDocuments({ categoryId: ObjectID(categoryId) }, 'products', {})
		.then(result => {
			res.json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

module.exports = router;
