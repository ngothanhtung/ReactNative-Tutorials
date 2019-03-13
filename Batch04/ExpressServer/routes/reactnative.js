var express = require('express');
var router = express.Router();
var db = require('../helpers/MongoDbHelper');

router.get('/', function(req, res, next) {
	res.json({ ok: true, message: 'Hello API' });
});

router.post('/login', function(req, res, next) {
	const { username, password } = req.body;
	console.log(username, password);
	db.findDocuments({ username: username, password: password }, 'users')
		.then(result => {
			res.status(200).json({ ok: true, result: result });
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
});

module.exports = router;
