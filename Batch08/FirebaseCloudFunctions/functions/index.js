const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);
var db = admin.firestore();

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
    .catch((exception) => {
      response.status(500).json({ ok: false, error: exception });
    });
});

// GET FUNCTION: GET BY ID
exports.getProduct = functions.https.onRequest((request, response) => {
  // METHOD: GET
  // URL: https://wyx.com/getProduct?id=5
  var id = request.query.id;
  this.db
    .collection('Products')
    .doc(id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        response.json({ ok: true, product: null });
      } else {
        response.json({ ok: true, product: doc.data() });
      }
    })
    .catch((exception) => {
      response.status(500).json({ ok: false, error: exception });
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
