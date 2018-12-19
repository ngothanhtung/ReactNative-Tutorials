
var MongoDbHelper = require('./MongoDbHelper');
var db = new MongoDbHelper();
var data = {
  name: "iPhoneX",
  price: 1200,
  discount: 5,
};
// 1. INSERT
// db.insertDocument(data, 'oldProducts').then(result => {
//   console.log(result);
// });

// 2. FIND BY ID
// db.findDocument('5bcdbe941a29025f26a00678', 'products').then(result => {
//   console.log(result);
// })

// 3. DELETE BY ID
// db.deleteDocument('5bcdbe941a29025f26a00678', 'products').then(result => {
//   console.log(result);
// })
// 4. UPDATE BY ID
var dataUpdate = {
  name: 'Samsung Galaxy Note 9',
  price: 1400
}
db.updateDocument('5bcdba8885354d57b278f2fe', dataUpdate, 'products').then(result => {
  console.log(result)
}).catch(error => {
  console.log(error);
})



// ============================================================================
// ============================================================================
// 0. Khai báo thư viện MongoClient
// var MongoClient = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectID;

// // 1. Thông tin kết nối đến CSDL MongoDB:
// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017';
// //const CONNECTION_STRING = 'mongodb://aptech:Aptech2018@ds259001.mlab.com:59001/onlineshop';
// // 2. Tên CSDL:
// const DATABASE_NAME = 'AptechDB';

// // 3. Thêm mới 1 dữ liệu vào Collection: 'products'
// MongoClient.connect(CONNECTION_STRING)
//   .then(client => {
//     // Connect OK
//     var dbo = client.db(DATABASE_NAME);
//     var collection = dbo.collection('products');
//     var data = {
//       name: "iPhoneX",
//       price: 1200,
//       discount: 5,
//     };
//     collection.insertOne(data)
//       .then(result => {
//         // Đóng kết nối
//         client.close();
//         console.log('OK');
//       })
//       .catch(err => {
//         console.log(err)
//       });
//   })
//   .catch(err => {
//     console.log(err)
//   });