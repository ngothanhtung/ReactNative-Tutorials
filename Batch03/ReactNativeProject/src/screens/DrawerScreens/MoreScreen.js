import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import BarIconMenu from './components/BarIconMenu';

export default class MoreScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'MoreScreen',
    header: null,
    headerRight: <BarIconMenu navigation={navigation} />
  });

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet', justifyContent: 'center', alignItems: 'center' }}>
        <Text>MoreScreen</Text>
      </View>
    );
  }
}
