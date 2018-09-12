import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: <Icon name='home' size={24} />
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Home </Text>
        <Button title="Go to About" onPress={() => {
          this.props.navigation.navigate('AboutScreen', { message: 'Hello About' })
        }} />
      </View>
    );
  }
}
