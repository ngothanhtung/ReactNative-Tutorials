const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  const data = [
    { message: 'Hello', language: 'en' },
    { message: 'Xin chào', language: 'vi' },
  ];

  response.set('Access-Control-Allow-Origin', "*")
  response.set('Access-Control-Allow-Methods', 'GET, POST')
  response.json(data);
});


exports.login = functions.https.onRequest((request, response) => {
  var username = request.body.username;
  var password = request.body.password;
  var userRef = db.collection('users')
    .where('username', '==', username)
    .where('password', '==', password)
    .get()
    .then(doc => {
      if (doc.exists) {
        response.json({ message: 'Login OK' })
      } else {
        response.json({ message: 'Login Failed' })
      }
    }).catch(error => {
      response.json({ error: error });
    });
});

exports.register = functions.https.onRequest((request, response) => {
  // {
  //   username: "tungnt",
  //   password: "12345678789",
  //   phone: "0905157803",
  //   fullName: "Ngo Thanh Tung"
  // }

  var data = request.body;
  db.collection('users').add(data).then(result => {
    response.json({ status: 'OK', message: 'Register completed' });
  });
});

exports.addCity = functions.https.onRequest((request, response) => {
  var data = request.body;
  db.collection('cities').add(data).then(result => {
    response.json(result);
  });
});