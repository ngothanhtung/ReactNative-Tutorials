import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './navigators/AppNavigator';
import firebase from 'react-native-firebase';

// Provider of Redux
import { Provider } from 'react-redux';
// Store
import store from './store';

// BEGIN: Sagas
import { sagaMiddleware } from './middlewares';
import rootSagas from './rootSagas';
sagaMiddleware.run(rootSagas);
// END: Sagas

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	async componentDidMount() {
		// TODO: You: Do firebase things
		// const { user } = await firebase.auth().signInAnonymously();
		// console.warn('User -> ', user.toJSON());
		// await firebase.analytics().logEvent('foo', { bar: '123'});
	}

	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={{ flex: 1 }}>
					<AppNavigator />
				</SafeAreaView>
			</Provider>
		);
	}
}
