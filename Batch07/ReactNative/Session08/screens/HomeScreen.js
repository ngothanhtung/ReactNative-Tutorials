import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> Home </Text>
        <Button
          title="Go to Login"
          onPress={() => {
            this.props.navigation.navigate('LoginScreen');
          }}
        />
      </View>
    );
  }
}
