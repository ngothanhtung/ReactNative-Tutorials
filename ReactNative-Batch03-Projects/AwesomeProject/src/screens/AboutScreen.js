import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
    tabBarIcon: <Icon name='information' size={24} />
  };

  constructor(props) {
    super(props);
    this.state = {
      message: props.navigation.getParam('message', '')
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet', justifyContent: 'center', alignItems: 'center' }}>
        <Text> {this.state.message} </Text>
        <Button title="Go to Home" onPress={() => {
          this.props.navigation.navigate('HomeScreen', {})
        }} />
      </View>
    );
  }
}
