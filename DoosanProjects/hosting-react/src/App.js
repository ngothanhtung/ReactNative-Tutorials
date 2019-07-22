import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firebase-firestore';
import './App.css';

// Initialize Firebase
var config = {
	projectId: 'doosan-tutorials',
	apiKey: 'AIzaSyB4EsU5Csyc7PavMqsqzUZcHA7IQOR4Tng',
	authDomain: 'doosan-tutorials.firebaseapp.com',
	databaseURL: 'https://doosan-tutorials.firebaseio.com',
	storageBucket: 'doosan-tutorials.appspot.com',
};
firebase.initializeApp(config);

const db = firebase.firestore();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: null,
		};
	}

	componentDidMount() {
		var products = [];
		db.collection('Products')
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					const product = doc.data();
					products.push(product);
				});
				this.setState({ products });
				console.log(products);
			});
	}

	render() {
		return (
			<div>
				{this.state.products &&
					this.state.products.map((item, index) => {
						return <h1 key={index}>{item.name}</h1>;
					})}
			</div>
		);
	}
}

export default App;
