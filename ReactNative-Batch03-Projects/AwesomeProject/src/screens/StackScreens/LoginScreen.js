import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Login </Text>
        <Button title="Go to Register" onPress={() => {
          this.props.navigation.navigate('RegisterScreen', {});
        }} />
      </View>
    );
  }
}
