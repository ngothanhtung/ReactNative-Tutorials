import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './navigators/AppNavigator';

// Provider of Redux
import { Provider } from 'react-redux';
// Store
import store from './store';

// BEGIN: Sagas
import { sagaMiddleware } from './middlewares';
import rootSagas from './rootSagas';
sagaMiddleware.run(rootSagas);
// END: Sagas

// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import NavigationService from './services/NavigationService';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<SafeAreaView style={{ flex: 1 }}>
					<AppNavigator
						ref={(navigatorRef) => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
					/>
				</SafeAreaView>
			</Provider>
		);
	}
}
