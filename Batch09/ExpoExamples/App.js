import React, { Component } from 'react';
import { View } from 'react-native';

import * as Font from 'expo-font';

// import Login from './Login';
import Login from './Eatme/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),

      'Gilroy-Light': require('./assets/fonts/Gilroy-Light.otf'),
      'Gilroy-ExtraBold': require('./assets/fonts/Gilroy-ExtraBold.otf'),

      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),

      'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf'),
      'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),

      // Cách 2: Có fallback
      'Roboto-Medium': {
        uri: require('./assets/fonts/Roboto-Medium.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'Roboto-Thin': {
        uri: require('./assets/fonts/Roboto-Thin.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return <Login />;
    } else {
      return null;
    }
  }
}
