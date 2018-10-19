const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();
var database = admin.database();
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

  console.log('username', username);
  console.log('password', password);

  var userRef = db.collection('users')
    .where('username', '==', username)
    .where('password', '==', password)
    .get()
    .then(snapshot => {
      if (snapshot.size > 0) {
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

  var { username, password, phone, fullName } = request.body;
  // console.log(data);
  db.collection('users').add({
    username: username,
    password: password,
    phone: phone,
    fullName: fullName
  }).then(result => {
    response.json({ status: 'OK', message: 'Register completed (updated)' });
  });
});



exports.addCity = functions.https.onRequest((request, response) => {
  var data = request.body;
  db.collection('cities').add(data).then(result => {
    response.json(result);
  });
});

// POST
exports.addProduct = functions.https.onRequest((request, response) => {
  if (request.method !== 'POST') {
    response.status(400).json({ ok: false });
  }
  else {
    var data = request.body;
    db.collection('products').add(data).then(result => {
      response.json(result);
    });
  }
});

// PUT
exports.editProduct = functions.https.onRequest((request, response) => {
  if (request.method !== 'PUT') {
    response.status(400).json({ ok: false });
  }
  else {
    var id = request.query.id;
    console.log(request.query);
    var data = request.body;
    db.collection('products').doc(id).update(data).then(result => {
      response.json(result);
    });
  }
});

exports.getProducts = functions.https.onRequest((request, response) => {
  var result = [];
  db.collection('products').get().then(snapshot => {
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      result.push(doc.data())
    });
    response.json(result);
  }).catch(err => {
    response.json({ error: err });
  });
});

exports.chat = functions.https.onRequest((request, response) => {
  var { from, to, messageText } = request.body;
  const serverTime = admin.database.ServerValue.TIMESTAMP;
  database.ref('messages').push({
    from: from,
    to: to,
    messageText: messageText,
    createdTime: serverTime
  }, (error) => {
    if (error) {
      response.json({ error: error });
    }
    else {
      response.json({ status: 'OK' });
    }
  });
});


exports.chat = functions.https.onRequest((request, response) => {
  var { from, to, messageText } = request.body;
  //const serverTime = database.ServerValue.TIMESTAMP;
  database.ref('messages').push({
    from: from,
    to: to,
    messageText: messageText,
    createdTime: new Date()
  }, (error) => {
    if (error) {
      response.json({ error: error });
    }
    else {
      response.json({ status: 'OK' });
    }
  });
});

