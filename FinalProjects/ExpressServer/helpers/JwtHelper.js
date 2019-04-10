var express = require('express');
var JwtHelper = express.Router();

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var secrect = '123456789';

var MongoDbHelper = require('./MongoDbHelper');

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
JwtHelper.check = function(req, res, next) {
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.params.token || req.headers['x-access-token'];
	console.log(token);
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, secrect, function(err, decoded) {
			if (err) {
				return res.json({ ok: false, message: 'Failed to authenticate token.' });
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});
	} else {
		// if there is no token
		// return an error
		return res.status(403).send({
			ok: false,
			message: 'No token provided.',
		});
	}
};

JwtHelper.login = function(req, res) {
	const { username, password } = req.body;
	MongoDbHelper.findDocuments({ username: username, password: password }, 'users')
		.then(result => {
			// create a token
			var payload = {
				username: username,
				password: password,
			};
			var token = jwt.sign(payload, secrect, {
				expiresIn: 3600, // expires in 24 hours
			});

			if (result.length > 0) {
				res.status(200).json({
					ok: true,
					message: 'Token was created',
					result: result,
					token: token,
				});
			} else {
				res.status(401).json({
					ok: false,
					message: 'Unauthorized',
				});
			}
		})
		.catch(error => {
			res.status(500).json({ ok: false, error: error });
		});
};
module.exports = JwtHelper;

// http status:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
