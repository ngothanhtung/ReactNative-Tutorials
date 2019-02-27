// https://firebase.google.com/docs/functions/write-firebase-functions

const auth = require('./auth');
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });

// exports.easyLogin = functions.https.onRequest((request, response) => {
//   auth.handlerLogin(request, response);
// });

exports.register = functions.https.onRequest((request, response) => {
  var docRef = db.collection('users');
  // url: https://cloudfunctions.net/search?name=apple&model=2009
  // method: 'POST, PUT': const param = request.body.nameofparam
  // method: 'GET, PUT, DELETE' : const param = request.query.nameofparam

  // body = {
  //   username: request.body.username,
  //   password: request.body.password,
  //   fullName: request.body.fullName,
  //   email: request.body.email,
  // }

  var username = request.body.username;
  if (username != null && username.length === 0) {
    response.json({
      ok: false,
      error: { message: 'Username cannot be empty string' }
    });
    return;
  } else {
    response.json({
      ok: false,
      error: { message: 'Username cannot be null' }
    });
    return;
  }

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
  // method: 'POST'
  // body: {username: 'admin', password: '123456789'}  
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
      response.json({ ok: ok, user: docs });
    })
    .catch((error) => {
      response.json({ ok: false, error: error });
    });
});


exports.sql = functions.https.onRequest((request, response) => {
  var Connection = require('tedious').Connection;
  response.json({ ok: true });
});


// ------------------------------------------------------------------------------------------------
// GET FUNCTION
exports.getProducts = functions.https.onRequest((request, response) => {
  var docs = [];
  db.collection('Products').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        docs.push(doc.data());
      });

      response.send(docs);
    })
    .catch((err) => {
      response.send("Error getting documents: " + err);
    });
});

// ------------------------------------------------------------------------------------------------
// ADD FUNCTION
exports.addProduct = functions.https.onRequest((request, response) => {
  var data = request.body;

  db.collection('Products').add(data)
    .then((docRef) => {
      response.send(docRef);
    })
    .catch((err) => {
      response.send("Error creating document: " + err);
    });
});

// ------------------------------------------------------------------------------------------------
// UPDATE FUNCTION
exports.updateProduct = functions.https.onRequest((request, response) => {
  var id = request.body.id;
  var data = request.body.data;

  var docRef = db.collection('Products').doc(id);
  docRef.update(data)
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      response.send("Error updating document: " + err);
    });
});

// ------------------------------------------------------------------------------------------------
// DELETE FUNCTION
exports.deleteProduct = functions.https.onRequest((request, response) => {
  var id = request.body.id;

  var docRef = db.collection('Products').doc(id);
  docRef.delete()
    .then((result) => {
      response.send(result);
    })
    .catch((err) => {
      response.send("Error deleting document: " + err);
    });
});

// ------------------------------------------------------------------------------------------------
// SEND NOTIFICATION (ADMIN SDK) FUNCTION
exports.sendNotification = functions.https.onRequest((request, response) => {
  // This registration token comes from the client FCM SDKs.
  var registrationToken = request.body.token;
  var data = request.body.data;
  var notification = request.body.notification;

  // See documentation on defining a message payload.
  var message = {
    notification: notification,
    data: data,
    token: registrationToken
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((result) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', result);
      response.json(result);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      response.json(error);
    });
});


// ------------------------------------------------------------------------------------------------
// SUBSCRIBE TO TOPIC (ADMIN SDK) FUNCTION
exports.subscribeToTopic = functions.https.onRequest((request, response) => {
  // These registration tokens come from the client FCM SDKs.
  var registrationTokens = request.body.tokens;
  var topic = request.body.topic;

  // Subscribe the devices corresponding to the registration tokens to the
  // topic.
  admin.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function (result) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', result);
      response.json(result);

    })
    .catch(function (error) {
      console.log('Error subscribing to topic:', error);
      response.json(error);
    });
});

exports.sendToTopic = functions.https.onRequest((request, response) => {
  // This registration token comes from the client FCM SDKs.
  // var registrationToken = request.body.token;
  var topic = request.body.topic;
  var data = request.body.data;
  var notification = request.body.notification;

  // See documentation on defining a message payload.
  var message = {
    notification: notification,
    data: data,
    // token: registrationToken
    topic: topic
  };

  // Send a message to the device corresponding to the provided
  // registration token.
  admin.messaging().send(message)
    .then((result) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', result);
      response.json(result);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
      response.json(error);
    });
});