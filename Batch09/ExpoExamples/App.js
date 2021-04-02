import React, { Component } from 'react';
import { Platform, SafeAreaView, View } from 'react-native';

import * as Font from 'expo-font';

import Login from './src/Session01/Login';
import Eatme_Login from './src/Session02/Eatme/LoginScreen';
import Eatme_OnboardingScreen from './src/Session02/Eatme/OnboardingScreen';

import Example01 from './src/Session02/Animations/Example01';

// SESSION 02
import LikeButton from './src/Session02/LikeButton';
import Avatar from './src/Session02/Avatar';
import CheckBox from './src/Session02/CheckBox';
import ImageSlider from './src/Session02/ImageSlider';
import SizeBox from './src/Session02/Eatme/components/SizeBox';

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
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <View style={{ minWidth: 414, minHeight: Platform.OS === 'web' ? 812 : null }}>
            {/* <Login /> */}
            {/* <Eatme_Login /> */}
            {/* <Eatme_OnboardingScreen /> */}
            {/* <Example01 /> */}
            {/* <Avatar imageUrl='https://randomuser.me/api/portraits/women/47.jpg' size={120} />
            <Avatar imageUrl='https://randomuser.me/api/portraits/women/44.jpg' />
            <LikeButton />
            <CheckBox /> */}
            {/* <ImageSlider /> */}
            <SizeBox sizes={['12"', '14"', '16"', '18', '36"']} />
            <SizeBox sizes={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />
          </View>
        </SafeAreaView>
      );
    } else {
      return null;
    }
  }
}
