var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'AptechDB';

/* GET home page. */
router.post('/', function(req, res, next) {
	//

	// Create a new MongoClient
	const client = new MongoClient(url, { useNewUrlParser: true });

	// Use connect method to connect to the Server
	client.connect(function(err) {
		if (err) {
			res.status(500).json(err);
			client.close();
			return;
		}
		console.log('Connected successfully to server');

		const db = client.db(dbName);
		// INSERT MANY
		const data = [{ a: 1 }, { name: 'peter' }];
		db.collection('test').insertMany(data, function(error, result) {
			if (error) {
				// ERROR
				client.close();
				res.status(500).json(error);
				return;
			} else {
				client.close();
				res.status(200).json(result);
				console.log(result);
			}
		});
	});
});

module.exports = router;
