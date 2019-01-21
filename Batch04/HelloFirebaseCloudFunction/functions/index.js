const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.easyLogin = functions.https.onRequest((request, response) => {
  // body: {username: 'admin', password: '123456789'}
  // method: 'POST'

  // const username = request.body.username;
  // const password = request.body.password;
  const { username, password } = request.body;
  // IF USE DATABASE: CODE ...
  // HARD CODE
  if (username === 'admin' && password === '123456789') {
    response.json({
      ok: true,
      message: 'Login OK'
    });
  } else {
    response.json({
      ok: false,
      message: 'Login Failed'
    });
  }
});

exports.register = functions.https.onRequest((request, response) => {
  var docRef = db.collection('users');
  // const data = {
  //   username: request.body.username,
  //   password: request.body.password,
  //   fullName: request.body.fullName,
  //   email: request.body.email,
  // }
  docRef.add(request.body).then(result => {
    response.json({
      ok: true,
    })
  }).catch(error => {
    response.json({
      ok: false,
      error: error // DEVELOPMENT MODE
    })
  });
});


exports.login = functions.https.onRequest((request, response) => {
  // body: {username: 'admin', password: '123456789'}
  // method: 'POST'
  // const username = request.body.username;
  // const password = request.body.password;
  const { username, password } = request.body;
  var docs = [];
  db.collection('users')
    .where('username', '==', username)
    .where('password', '==', password)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });
      var ok = docs.length > 0;
      response.json({
        ok: ok,
        user: docs
      });
    })
    .catch((err) => {
      response.json({
        ok: false,
        error: err
      });
    });
});