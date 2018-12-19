// ------------------------------------------------------------------------------------------------
// ADD DATA
class CloudFirestoreHelper {
	constructor(db) {
		this.db = db;
	}

	add(data, collection) {
		var ref = this.db.collection(collection);
		ref.add(data).then(result => { console.log('completed') });
	}
}

module.exports = CloudFirestoreHelper;