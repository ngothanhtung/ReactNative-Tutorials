import React, { Component } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import firebase from 'react-native-firebase';
// Provider of Redux
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './screens/AppNavigator';
import { setUser } from './modules/Auth/actions';

// CONSTANTS
import colors from './constants/colors';
//
import NavigationService from './NavigationService';

// PAPER THEME
const theme = {
  ...DefaultTheme,
  // roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.PRIMARY,
    accent: colors.LIGHT,
  },
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    );
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // SET REDUX STATE
        store.dispatch(setUser(user));
        console.log(user);
        NavigationService.navigate('Drawer');
      } else {
        NavigationService.navigate('Stack');
      }
    });
    // SET STATUS BAR
  }

  async componentWillUnmount() {
    if (this.unsubscribe) {
      await this.unsubscribe();
    }
  }
}
