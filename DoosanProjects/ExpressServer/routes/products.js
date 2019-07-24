var express = require('express');
var router = express.Router();

// Mongo
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'Doosan';

// Create a new MongoClient
const client = new MongoClient(url);
const helper = require('../helpers/MongoDbHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
	const data = {
		message: 'hello from express',
	};
	res.json(data);
});

router.post('/addProduct', function(req, res, next) {
	// Use connect method to connect to the Server
	client.connect(function(err, client) {
		console.log('Connected correctly to server');

		const db = client.db(dbName);
		const data = req.body;

		db.collection('products')
			.insertMany(data)
			.then((result) => {
				client.close();
				res.status(200).json(result);
			})
			.catch((error) => {
				client.close();
				res.status(500).json(result);
			});
	});
});

router.post('/insertProduct', function(req, res, next) {
	helper
		.insertDocument(req.body, 'products')
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json(error));
});

router.delete('/deleteProduct/:id', function(req, res, next) {
	const id = req.params.id;
	helper
		.deleteDocument(id, 'products')
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json(error));
});

router.put('/updateProduct/:id', function(req, res, next) {
	const id = req.params.id;
	const data = req.body;
	helper
		.updateDocument(id, data, 'products')
		.then((result) => res.status(200).json(result))
		.catch((error) => res.status(500).json(error));
});

module.exports = router;
