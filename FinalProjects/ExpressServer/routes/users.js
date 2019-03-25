var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017/AptechDB';
// Database Name
const dbName = 'AptechDB';

router.post('/createUser', function(req, res, next) {
	// Create a new MongoClient
	const client = new MongoClient(url);
	// Use connect method to connect to the Server
	client.connect(function(err, client) {
		if (err) {
			res.status(500).json(err);
		} else {
			console.log('Connected correctly to server');
			const db = client.db(dbName);
			// Insert a single document
			db.collection('Users').insertMany(req.body, function(err, r) {
				client.close();
				if (err) {
					console.log(err);
					res.json({ ok: false, error: err });
				} else {
					res.json({ ok: true });
				}
			});
		}
	});
});

router.get('/get/:userId', function(req, res, next) {
	var u = req.params.userId;
	console.log(u);
	res.send('OK');
});

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	if (username === 'admin' && password == '123') {
		res.json({
			ok: true,
			message: 'Login OK'
		});
	} else {
		res.json({
			ok: false,
			message: 'Login Not OK'
		});
	}
});

module.exports = router;
