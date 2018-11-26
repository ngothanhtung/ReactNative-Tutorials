import React, { Component } from 'react';
import { View, TextInput, Text, Button, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImageUrl from '../../resources/background-main.png';


import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';

const EmailInput = (props) => (
  <TextInput
    style={{ paddingHorizontal: 12, height: 48, backgroundColor: 'transparent', color: 'white' }}
    underlineColorAndroid="white"
    placeholder="Enter your email"
    placeholderTextColor="white"
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={(text) => {
      props.onChangeText(text);
    }}
  />
)

const PasswordInput = (props) => (
  <TextInput
    style={{ paddingHorizontal: 12, height: 48, backgroundColor: 'transparent', color: 'white' }}
    underlineColorAndroid="white"
    placeholder="Enter your password"
    placeholderTextColor="white"
    keyboardType="default"
    autoCapitalize="none"
    autoCorrect={false}
    secureTextEntry
    onChangeText={(text) => {
      props.onChangeText(text);
    }}
  />
)


const VioletButton = (props) => (
  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4527A0', '#7B1FA2']} style={{ borderRadius: 4, height: 54 }}>
    <TouchableOpacity onPress={() => {
      props.onPress();
    }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 16, fontWeight: '700', color: 'white' }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  </LinearGradient>
)

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
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            {/* <LinearTextGradient
              style={{ fontWeight: '100', fontSize: 80 }}
              locations={[0, 1]}
              colors={['#4527A0', '#7B1FA2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              Sky
            </LinearTextGradient> */}

          </View>
          <View style={{ flex: 2, padding: 24 }}>
            <EmailInput onChangeText={(text) => {
              this.setState({ email: text });
            }}
            />
            <View style={{ height: 6 }}></View>
            <PasswordInput onChangeText={(text) => {
              this.setState({ password: text });
            }}
            />
            <View style={{ height: 24 }}></View>
            <VioletButton
              title="LOGIN"
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
            />
          </View>
          <View style={{ height: 60, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>
              Sky Travel
              </Text>
          </View>
        </View>
      </ImageBackground >

    );
  }
}
