import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackgroundImageUrl from '../../../../assets/bg.jpg';
import LogoImageUrl from '../../../../assets/logo.jpg';

const styles = {
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  textIput: {
    fontSize: 16,
    fontWeight: '700',
    borderRadius: 12,
    borderColor: '#dfe6e9',
    borderWidth: 1,
    height: 54,
    paddingLeft: 12,
    opacity: 0.75,
    color: '#2d3436',
    backgroundColor: '#ffffff',
  },

  button: {
    borderColor: '#e17055',
    borderWidth: 1,
    backgroundColor: '#AD1F23',
    height: 54,
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
    fontWeight: '900',
    fontSize: 48,
    color: '#AD1F23',
  },
};

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'ngothanhtung.it@gmail.com',
      password: '123456789',
    };
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (this.props.loggedInUser !== prevProps.loggedInUser) {
      //this.props.navigation.navigate('Drawer');
      // this.props.navigation.navigate('Tab');
      if (this.props.loggedInUser && this.props.loggedInUser.result.length > 0) {
        // alert('OK');
        this.props.navigation.navigate('Drawer');
      }
    }
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, position: 'relative' }} blurRadius={0} source={BackgroundImageUrl}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
          <View style={styles.topContainer}>
            <View style={{
              padding: 40, backgroundColor: '#ffffff', opacity: 1, borderRadius: 200,
            }}
            >
              <Image resizeMode="contain" style={{ width: 160, height: 160 }} source={LogoImageUrl} />
            </View>

          </View>
          <View style={styles.middleContainer}>
            <View style={{ padding: 24 }}>
              <TextInput
                style={styles.textIput}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor="#2d3436"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(text) => { this.setState({ email: text }); }}
              />
              <View style={{ height: 12 }} />


              <TextInput
                ref={(component) => { this.passwordInput = component; }}
                style={styles.textIput}
                underlineColorAndroid="transparent"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor="#2d3436"
                value={this.state.password}
                onChangeText={(text) => { this.setState({ password: text }); }}
              />
              <View style={{ height: 12 }} />
              <Button
                title="Đăng nhập"
                buttonStyle={styles.button}
                icon={<Icon name="key" size={20} color="white" />}
                onPress={() => {
                  this.props.login(this.state.email, this.state.password);
                  // TEST NAVIGATION
                  // this.props.navigation.navigate('Drawer');
                }}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 16 }}>
              <Text
                style={{ textDecorationLine: 'underline', color: '#ffffff' }}
                onPress={() => {

                }}
              >
                Quên mật khẩu
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
