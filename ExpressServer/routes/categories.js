var express = require('express');
var router = express.Router();
const { findDocuments, findDocument, insertDocument } = require('../helpers/MongoDbHelper');

const categories = [
  {
    id: 1,
    name: 'Fast Food',
    imageUrl: 'https://training.softech.cloud/images/categories/1.png',
    // image: require('../images/1.png'),
  },
  {
    id: 2,
    name: 'Fruit Item',
    imageUrl: 'https://training.softech.cloud/images/categories/2.png',
    // image: require('../images/2.png'),
  },
  {
    id: 3,
    name: 'Rich Item',
    imageUrl: 'https://training.softech.cloud/images/categories/3.png',
    // image: require('../images/1.png'),
  },
];

router.get('/', function (req, res) {
  res.status(200).json({ ok: true, categories });
});

module.exports = router;
