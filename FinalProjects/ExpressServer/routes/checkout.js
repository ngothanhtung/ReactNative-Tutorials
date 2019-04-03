var express = require('express');
var router = express.Router();
var MongoDbHelper = require('../helpers/MongoDbHelper');
var ObjectID = require('mongodb').ObjectID;

router.all('/*', (req, res, next) => {
	console.log('request params:', req.params);
	console.log('request body:', req.body);
	next();
});

// THÊM MỚI
// Example: POST: http://localhost:3000/products
router.post('/', function(req, res, next) {
	const data = req.body;
	data.categoryId = ObjectID(data.categoryId);
	const collectionName = 'orders';
	MongoDbHelper.insertDocument(data, collectionName)
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

module.exports = router;
