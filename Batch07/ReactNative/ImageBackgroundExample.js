import React, {Component} from 'react';
import {Text, View, ImageBackground, Button, StatusBar} from 'react-native';
import h1 from './assets/images/background.png';

export default class ImageBackgroundExample extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#395A81" />
        <ImageBackground
          blurRadius={1}
          source={h1}
          style={{flex: 1, padding: 24}}>
          <Button title="Login" />
        </ImageBackground>
      </View>
    );
  }
}
