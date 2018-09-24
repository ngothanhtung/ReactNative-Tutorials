import React, { Component } from 'react';
import { View, TextInput, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImageUrl from '../../resources/background-main.png';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <ImageBackground source={BackgroundImageUrl} style={{ flex: 1, position: 'relative' }}>
        <View style={{ flex: 1, opacity: 0.8 }}>
          <View style={{ flex: 1, }}></View>
          <View style={{ flex: 2, padding: 24 }}>
            <TextInput
              style={{ paddingHorizontal: 12, height: 48, backgroundColor: 'white' }}
              placeholder="Enter your email"
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
            <View style={{ height: 6 }}></View>
            <TextInput
              style={{ paddingHorizontal: 12, height: 48, backgroundColor: 'white' }}
              placeholder="Enter your password"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
            />
            <View style={{ height: 6 }}></View>
            <TouchableOpacity
              style={{ height: 48, backgroundColor: 'violet', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                axios.post('https://slacklivechat.com/users/login', {
                  email: this.state.email,
                  password: this.state.password
                }).then(response => {
                  console.log(response.data);
                }).catch(error => {
                  console.log(error);
                })
              }}
            >
              <Text style={{ fontWeight: '700' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 60, backgroundColor: 'blue' }}></View>
        </View>
      </ImageBackground >

    );
  }
}
