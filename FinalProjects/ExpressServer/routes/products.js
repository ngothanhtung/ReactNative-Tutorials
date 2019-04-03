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
router.get('/', function(req, res, next) {
	MongoDbHelper.findDocuments({}, 'products', { _id: 1, name: 1, price: 1 })
		.then(result => {
			res.json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

router.get('/:page/:size', function(req, res, next) {
	var page = parseInt(req.params.page);
	var size = parseInt(req.params.size);
	console.log(page, size);
	MongoDbHelper.getProducts({}, 'products', page, size)
		.then(result => {
			res.json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// Example: GET: http://localhost:3000/products/5c86529998554ffc5b59661a
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	MongoDbHelper.findDocument(id, 'products')
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// THÊM MỚI
// Example: POST: http://localhost:3000/products
router.post('/create', function(req, res, next) {
	const data = req.body;
	data.categoryId = ObjectID(data.categoryId);
	const collectionName = 'products';
	MongoDbHelper.insertDocument(data, collectionName)
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// XÓA
// Example: DELETE: http://localhost:3000/products/5c86529998554ffc5b59661a
router.delete('/:id', function(req, res, next) {
	const id = req.params.id;
	MongoDbHelper.deleteDocument(id, 'products')
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// SỬA
// Example: PUT: http://localhost:3000/products/5c86529998554ffc5b59661a
router.put('/:id', function(req, res, next) {
	const id = req.params.id;
	const data = req.body;

	MongoDbHelper.updateDocument(id, data, 'products')
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

// Example: GET: http://localhost:3000/products
router.get('/categories/:categoryId/products', function(req, res, next) {
	const categoryId = req.params.categoryId;
	MongoDbHelper.findDocuments({ categoryId: ObjectID(categoryId) }, 'products')
		.then(result => {
			res.json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

module.exports = router;
