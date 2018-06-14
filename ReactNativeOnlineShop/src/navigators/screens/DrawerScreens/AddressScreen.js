import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import BarIconMenu from './components/BarIconMenu';

export default class AddressScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Address',
    headerRight: <BarIconMenu navigation={navigation} />
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'violet' }}>
        <Text> AddressScreen </Text>

        
      </View>
    );
  }
}
