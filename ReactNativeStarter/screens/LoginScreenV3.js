import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import LogoImageUrl from '../resources/user-logo.png';
import BackgroundImageUrl from "../resources/orange-background.jpg";

export default class LoginScreenV3 extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1, position: 'relative' }} source={BackgroundImageUrl}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Image resizeMode={'contain'} style={{ width: 160, height: 160 }} source={LogoImageUrl} />
          </View>
          <View style={styles.middleContainer}>
            <View style={{ padding: 24 }}>
              <TextInput
                style={styles.textIput}
                placeholder={"Enter email"}
                placeholderTextColor={"#ffffff"}
              />
              <View style={{ height: 12 }} />
              <TextInput
                style={styles.textIput}
                placeholder={"Enter password"}
                placeholderTextColor={"#ffffff"}
              />
              <View style={{ height: 12 }} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{ backgroundColor: 'transparent', alignItems: 'center', paddingBottom: 16 }}>
              <Text style={{ color: '#ffffff' }} >Have an account?
              <Text> </Text>
                <Text style={{ textDecorationLine: 'underline' }} onPress={() => { Alert.alert('React Native', 'Coming soon') }}>Sign up</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    //backgroundColor: 'red'
  },
  topContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 2,
    //backgroundColor: 'green',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    //backgroundColor: 'blue',
    justifyContent: 'flex-end',
  },

  textIput: {
    borderRadius: 12,
    borderColor: '#ffffff',
    borderWidth: 0.5,
    height: 48,
    paddingLeft: 12,
    opacity: 1
  },

  button: {
    backgroundColor: '#fa8231',
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
    color: '#ffffff'
  }
};