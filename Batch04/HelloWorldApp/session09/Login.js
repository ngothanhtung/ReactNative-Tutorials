import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LogoImageUrl from './resources/email-orange.png';
import BackgroundImageUrl from './resources/orange-background.jpg';

const styles = {
  container: {
    flex: 1,
    // backgroundColor: 'red'
  },
  topContainer: {
    flex: 2,
    // backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 2,
    // backgroundColor: 'green',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },

  textIput: {
    borderRadius: 12,
    borderColor: '#ffffff',
    borderWidth: 0.5,
    height: 48,
    paddingLeft: 12,
    opacity: 1,
    color: '#ffffff',
  },

  button: {
    borderColor: '#ffffff',
    borderWidth: 0.5,
    backgroundColor: '#D00F14',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
  },
};


export default class LoginScreenV3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: 'login',
      text: '',
    };
  }

  onPressLoginorSignupButton() {
    Alert.alert('React Native', `Screen: ${this.state.screenName}`);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, position: 'relative' }} blurRadius={20} source={BackgroundImageUrl}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
          <View style={styles.topContainer}>
            <Image resizeMode="contain" style={{ width: 160, height: 160 }} source={LogoImageUrl} />
          </View>
          <View style={styles.middleContainer}>
            <View style={{ padding: 24 }}>
              <View style={{
                flexDirection: 'row', borderRadius: 12,
                borderColor: '#ffffff',
                borderWidth: 0.5,
                height: 48,
                paddingLeft: 12,
                opacity: 1,
                color: '#ffffff',
              }}>
                <View style={{ justifyContent: 'center' }}>
                  <Icon color="white" name="email" size={24} />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      height: 48,
                      paddingLeft: 12,
                    }}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Enter your email"
                    placeholderTextColor="#ffffff"
                    keyboardType="email-address"

                    onChangeText={(text) => { this.setState({ username: text }); }}
                  />
                </View>

              </View>

              <View style={{ height: 12 }} />

              <View style={{
                flexDirection: 'row', borderRadius: 12,
                borderColor: '#ffffff',
                borderWidth: 0.5,
                height: 48,
                paddingLeft: 12,
                opacity: 1,
                color: '#ffffff',
              }}>
                <View style={{ justifyContent: 'center' }}>
                  <Icon color="white" name="key-variant" size={24} />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    style={{
                      height: 48,
                      paddingLeft: 12,
                    }}
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Enter your password"
                    placeholderTextColor="#ffffff"
                    keyboardType="default"

                    onChangeText={(text) => { this.setState({ username: text }); }}
                  />
                </View>

              </View>

              <View style={{ height: 12 }} />



              <TouchableOpacity
                style={styles.button}
                onPress={() => { this.onPressLoginorSignupButton(); }}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 16 }}>
              <Text style={{ color: '#ffffff', paddingRight: 6 }} >
                Haven't an account?
              </Text>
              <Text
                style={{ textDecorationLine: 'underline', color: '#ffffff' }}
                onPress={() => {

                }}
              >
                Sign up
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );

  }
}
