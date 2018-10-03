import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, ImageBackground, Image } from 'react-native';

import LogonImageUrl from './resources/aptech-logo.png';
import BackgroundImageUrl from './resources/background.png';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HandlingTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: 'login',
      username: 'admin',
      password: ''
    };
  }

  render() {
    var component = <View></View>;
    if (this.state.screenName === 'login') {
      component = (
        <ImageBackground source={BackgroundImageUrl} style={{ flex: 1, position: 'relative' }}>
          <View style={{ flex: 1, padding: 24 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

              <Image source={LogonImageUrl} style={{ width: 180, height: 180, borderRadius: 90 }} />
              <View style={{ height: 20 }}></View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                  <Icon name="email" size={24} />
                </View>

                <TextInput
                  value={this.state.username}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ height: 48, backgroundColor: 'white', width: '100%', paddingHorizontal: 8 }}
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({ username: text });
                  }}
                />
              </View>

              <View style={{ height: 6 }}></View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                  <Icon name="lock" size={24} />
                </View>

                <TextInput
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ height: 48, backgroundColor: 'white', width: '100%', paddingHorizontal: 8 }}
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({ password: text });
                  }}
                />
              </View>

              <View style={{ height: 6 }}></View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
                  <Icon name="map-marker" size={24} />
                </View>

                <TextInput
                  autoCorrect={false}
                  style={{ height: 48, backgroundColor: 'white', width: '100%', paddingHorizontal: 8 }}
                  onChangeText={(text) => {
                    console.log(text);
                    this.setState({ password: text });
                  }}
                />
              </View>
              <View style={{ height: 6 }}></View>
              <TouchableOpacity
                style={{ width: '100%', height: 48, backgroundColor: '#2d3436', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                onPress={() => {
                  if (this.state.username === 'admin' && this.state.password === '123456789') {
                    Alert.alert('Thong bao', 'Dang nhap thanh cong');
                  } else {
                    Alert.alert('Thong bao', 'Dang nhap that bai');
                  }
                }}>
                <Icon name="key" size={24} style={{ color: 'white', paddingRight: 12 }} />
                <Text style={{ color: '#ffffff', fontWeight: '700' }}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                this.setState({ screenName: 'register' })
              }}>
                <Text>
                  Register
          </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )
    } else {
      component = (
        <View style={{ flex: 1, backgroundColor: 'yellow', padding: 24 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text>LOGIN</Text>
            <TextInput
              value={this.state.username}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 48, backgroundColor: 'white', width: '100%' }}
              onChangeText={(text) => {
                console.log(text);
                this.setState({ username: text });
              }}
            />
            <View style={{ height: 6 }}></View>
            <TextInput
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 48, backgroundColor: 'white', width: '100%' }}
              onChangeText={(text) => {
                console.log(text);
                this.setState({ password: text });
              }}
            />
            <View style={{ height: 6 }}></View>
            <TextInput
              placeholder="Address"
              autoCapitalize="none"
              autoCorrect={false}
              style={{ height: 48, backgroundColor: 'white', width: '100%' }}
              onChangeText={(text) => {
                console.log(text);
                this.setState({ password: text });
              }}
            />
            <View style={{ height: 6 }}></View>
            <TouchableOpacity
              style={{ width: '100%', height: 48, backgroundColor: '#0984e3', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                Alert.alert('Thong bao', 'Chuc nang dang ky dang phat trien');
              }}>
              <Text style={{ color: '#ffffff', fontWeight: '700' }}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {
              this.setState({ screenName: 'login' })
            }}>
              <Text>
                Go back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      component
    );
  }
}
