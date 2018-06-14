import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import BarIconMenu from './components/BarIconMenu';

export default class PaymentScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Payment',
    headerRight: <BarIconMenu navigation={navigation} />
  });
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text> PaymentScreen </Text>
      
      </View>
    );
  }
}
