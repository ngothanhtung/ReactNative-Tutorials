const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'AptechDB';
// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
	console.log('Connected successfully to server');

	const db = client.db(dbName);
	// INSERT MANY
	const data = [{ a: 1 }, { name: 'peter' }];
	db.collection('test')
		.insertMany(data)
		.then(result => {
			console.log(result);
		})
		.catch(error => {
			console.log(error);
		});
	client.close();
});
