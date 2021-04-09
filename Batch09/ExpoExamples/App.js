import React, { Component } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import * as Font from 'expo-font';
import HandlingTextInput from './src/Session03/Examples/HandlingEvent/HandlingTextInput';
import LifeCycle from './src/Session03/Examples/LifeCycle';

import LoginScreen from './src/Session02/Eatme/LoginScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      'SVN-Gilroy-Regular': require('./assets/fonts/SVN-Gilroy-Regular.otf'),
      'SVN-Gilroy-Medium': require('./assets/fonts/SVN-Gilroy-Medium.otf'),
      'SVN-Gilroy-SemiBold': require('./assets/fonts/SVN-Gilroy-SemiBold.otf'),
      'SVN-Gilroy-Bold': require('./assets/fonts/SVN-Gilroy-Bold.otf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            // alignItems: Platform.OS === 'web' ? 'center' : null,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: Platform.OS === 'web' ? 'row' : 'column',
              minWidth: Platform.OS === 'web' ? 414 : '100%',
              minHeight: Platform.OS === 'web' ? 812 : null,
            }}
          >
            {Platform.OS === 'web' && (
              <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
            )}
            <LoginScreen />
            {/* <HandlingTextInput /> */}
            {/* <LifeCycle /> */}
          </View>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}
