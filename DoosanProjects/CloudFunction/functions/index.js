const functions = require('firebase-functions');

// FIREBASE ADMIN
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
	response.send('Hello from Firebase!');
});

exports.goodbye = functions.https.onRequest((request, response) => {
	response.json({
		message: 'Goodbye!',
	});
});

// LOGIN FUNCTION
exports.login = functions.https.onRequest((request, response) => {
	var data = request.body;
	if (data.username === 'admin' && data.password === '123456789') {
		response.json({ ok: true, message: 'Login OK' });
	} else {
		response.json({ ok: false, message: 'Login Failed' });
	}
});

// ------------------------------------------------------------------------------------------------
// GET FUNCTION
exports.getProducts = functions.https.onRequest((request, response) => {
	var docs = [];
	db.collection('Products')
		.get()
		.then((snapshot) => {
			snapshot.forEach((doc) => {
				docs.push(doc.data());
			});

			response.send(docs);
		})
		.catch((err) => {
			response.send('Error getting documents: ' + err);
		});
});

// ------------------------------------------------------------------------------------------------
// ADD FUNCTION
exports.addProduct = functions.https.onRequest((request, response) => {
	var data = request.body;

	db.collection('Products')
		.add(data)
		.then((docRef) => {
			response.send(docRef);
		})
		.catch((err) => {
			response.send('Error creating document: ' + err);
		});
});

// ------------------------------------------------------------------------------------------------
// UPDATE FUNCTION
exports.updateProduct = functions.https.onRequest((request, response) => {
	var id = request.body.id;
	var data = request.body.data;

	var docRef = db.collection('Products').doc(id);
	docRef
		.update(data)
		.then((result) => {
			response.send(result);
		})
		.catch((err) => {
			response.send('Error updating document: ' + err);
		});
});

// ------------------------------------------------------------------------------------------------
// DELETE FUNCTION
exports.deleteProduct = functions.https.onRequest((request, response) => {
	var id = request.body.id;

	var docRef = db.collection('Products').doc(id);
	docRef
		.delete()
		.then((result) => {
			response.send(result);
		})
		.catch((err) => {
			response.send('Error deleting document: ' + err);
		});
});

exports.sendNotification = functions.https.onRequest((request, response) => {
	var data = request.body;
	const message = {
		notification: {
			title: data.title,
			body: data.body,
		},
		android: {
			priority: 'high',
			notification: {
				sound: 'default',
				color: '#d63031',
				title: data.title,
				body: data.body,
			},
		},
		apns: {
			headers: {
				'apns-priority': '10',
			},
			payload: {
				aps: {
					alert: {
						title: data.title,
						body: data.body,
					},
					//badge: data && data.notificationCount ? data.notificationCount : 1,
					badge: parseInt('1'),
					sound: 'default',
					'content-available': 1,
				},
			},
		},
		data: request.body.data,
		topic: data.topic,
	};
	admin
		.messaging()
		.send(message)
		.then((result) => {
			response.status(200).json(result);
		})
		.catch((error) => {
			response.status(500).json(error);
		});
});
