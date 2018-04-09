// Khai báo thư viện MongoClient
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Chuỗi kết nối đến MongoDB
var ConnectionString = 'mongodb://127.0.0.1:27017/WebTokenExample';

function MongoDbHelper() {
}

// INSERT: Thêm mới
MongoDbHelper.insertDocument = function (jsonData, collectionName, callback) {
    MongoClient.connect(ConnectionString, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var collection = db.collection(collectionName);
            collection.insertOne(jsonData, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(jsonData);
                }
            });
        }
    });
};

// UPDATE: Sửa
MongoDbHelper.updateDocument = function (id, jsonData, collectionName, callback) {
    MongoClient.connect(ConnectionString, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var collection = db.collection(collectionName);
            collection.updateOne({ _id: ObjectID(id) }, { $set: jsonData }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// REMOVE: Xoá
MongoDbHelper.removeDocument = function (id, collectionName, callback) {
    MongoClient.connect(ConnectionString, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var collection = db.collection(collectionName);
            collection.removeOne({ _id: ObjectID(id) }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// FIND: Tìm kiếm (nhiều)
MongoDbHelper.findDocuments = function (jsonData, collectionName, callback) {
    MongoClient.connect(ConnectionString, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var collection = db.collection(collectionName);
            collection.find(jsonData).toArray(function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

// FIND: Tìm kiếm (id)
MongoDbHelper.findDocument = function (id, collectionName, callback) {
    MongoClient.connect(ConnectionString, function (err, db) {
        if (err) console.log('MONGODB ERROR', err);
        else {
            var collection = db.collection(collectionName);
            collection.findOne({ _id: ObjectID(id) }, function (err, result) {
                if (err) console.log('MONGODB ERROR', err);
                else {
                    db.close();
                    callback(result);
                }
            });
        }
    });
};

module.exports = MongoDbHelper;

