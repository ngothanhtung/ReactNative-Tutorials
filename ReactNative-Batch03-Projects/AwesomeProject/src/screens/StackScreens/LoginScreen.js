import React, { Component } from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImageUrl from '../../resources/background-main.png';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground source={BackgroundImageUrl} style={{ flex: 1, position: 'relative' }}>
        <View style={{ flex: 1, backgroundColor: '#271138', justifyContent: 'center', alignItems: 'center', opacity: 0.8 }}>
          <Text> Login </Text>
          <Button title="Go to Register" onPress={() => {
            this.props.navigation.navigate('RegisterScreen', {});
          }} />
        </View>
      </ImageBackground>

    );
  }
}
