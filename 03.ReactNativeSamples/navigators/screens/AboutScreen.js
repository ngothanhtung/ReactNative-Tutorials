import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          AboutScreen: {this.props.navigation.state.params.id}
        </Text>
        <Button title='Go back' onPress={() => { this.props.navigation.goBack() }} />
      </View>
    );
  }
}
