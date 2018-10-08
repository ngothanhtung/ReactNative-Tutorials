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
  if (request.body.username === 'admin' && request.body.password === '123456789') {
    response.json({ status: 'OK', message: 'Login successful' });
  } else {
    response.json({ status: 'Not OK', message: 'Login failed' });
  }
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