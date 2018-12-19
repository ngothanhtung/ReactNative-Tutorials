var admin = require("firebase-admin");
var CloudFirestoreHelper = require('./CloudFirestoreHelper');
var serviceAccount = require('./aptech-reactnative-firebase-firebase-adminsdk-to17e-7cc2629ab4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://aptech-reactnative-firebase.firebaseio.com'
});

var db = admin.firestore();

var helper = new CloudFirestoreHelper(db);

var data = {
  'title': 'Vung Tau City',
  'subTitle': 'Phia Nam',
  'text': 'Thanh pho Bien xinh dep',
  'imageUrl': "https://images.unsplash.com/photo-1446770145316-10a05382c470?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
};


helper.add(data, 'images')