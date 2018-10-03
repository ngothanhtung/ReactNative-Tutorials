import React, { Component } from 'react';
import { Alert, View, Text, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LogonImageUrl from '../resources/aptech-logo.png';
import BackgroundImageUrl from '../resources/background.png';

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      address: ''
    };
  }

  render() {
    return (
      <ImageBackground source={BackgroundImageUrl} style={{ flex: 1, position: 'relative' }}>
        <View style={{ flex: 1, padding: 12 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* ---------------------------------------------------------------- */}
            {/* LOGO */}
            <Image source={LogonImageUrl} style={{ width: 180, height: 180, borderRadius: 90 }} />
            <View style={{ height: 20 }}></View>
            {/* ---------------------------------------------------------------- */}
            {/* USERNAME INPUT */}
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                <Icon name="email" size={24} />
              </View>

              <TextInput
                value={this.state.username}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ flex: 1, height: 48, backgroundColor: 'white', paddingHorizontal: 8 }}
                onChangeText={(text) => {
                  console.log(text);
                  this.setState({ username: text });
                }}
              />
            </View>

            <View style={{ height: 6 }}></View>
            {/* ---------------------------------------------------------------- */}
            {/* PASSWORD INPUT */}
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                <Icon name="lock" size={24} />
              </View>

              <TextInput
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={{ flex: 1, height: 48, backgroundColor: 'white', paddingHorizontal: 8 }}
                onChangeText={(text) => {
                  console.log(text);
                  this.setState({ password: text });
                }}
              />
            </View>
            <View style={{ height: 6 }}></View>
            {/* ---------------------------------------------------------------- */}
            {/* LOGIN BUTTON */}
            <TouchableOpacity
              style={{ width: '100%', height: 48, backgroundColor: '#2d3436', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
              onPress={() => {
                Alert.alert('Thong bao', 'Chuc nang dang phat trien');
              }}>
              <Icon name="key" size={24} style={{ color: 'white', paddingRight: 12 }} />
              <Text style={{ color: '#ffffff', fontWeight: '700' }}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 48 }}>
            <View style={{ height: 48, alignItems: 'center', justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => {
                this.props.onChangeScreenPress();
              }}>
                <Text style={{ color: 'white', textDecorationLine: 'underline' }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
