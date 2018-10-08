const admin = require('firebase-admin');

var serviceAccount = require("./aptech-reactnative-firebase-firebase-adminsdk-to17e-3aa56062c5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://aptech-reactnative-firebase.firebaseio.com"
});


var db = admin.firestore();

var data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  notes: '2nd city'
};

// Add a new document in collection "cities" with ID 'LA'
var setDoc = db.collection('thanhpho').doc('LB').set(data);