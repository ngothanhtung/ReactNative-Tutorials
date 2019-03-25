var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

router.all('/*', (req, res, next) => {
	console.log('request params:', req.params);
	console.log('request body:', req.body);
	next();
});

// Example: GET: http://localhost:3000/products
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
