import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { resolve } from 'rsvp';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
        <Text> Register </Text>
        <Button title="Go to Tab" onPress={() => {
          this.props.navigation.navigate('DrawerScreen', {});
        }} />

        <Button title="Register" onPress={() => {
          axios.post('https://slacklivechat.com/users/register', {
            email: 'peterjackson@gmail.com',
            password: '123123123',
            fullname: 'Peter Jackson',
            phoneNumber: '0905111222'
          }).then(response => {
            console.log(response.data);
          }).catch(error => {
            console.log(error);
          })
        }} />

      </View>
    );
  }
}
