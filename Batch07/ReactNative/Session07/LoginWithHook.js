import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343C44',
  },
  logoContainer: {
    flex: 4,
    backgroundColor: '#343C44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#FBB843',
    padding: 24,
    borderRadius: 99,
  },
  welcome: {
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
  sloganText: {
    color: 'white',
    fontSize: 18,
  },

  loginContainer: {
    flex: 3,
    backgroundColor: '#343C44',
    paddingHorizontal: 48,
  },

  inputContainer: {
    flexDirection: 'row',
    height: 56,
    // backgroundColor: 'yellow',
  },
  inputIconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E3338',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  inputTextContainer: {
    flex: 1,
    height: 56,
    backgroundColor: '#3E4750',
    justifyContent: 'center',
    paddingLeft: 12,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },

  buttonContainer: {
    flexDirection: 'row',
    // height: 120,
    // backgroundColor: 'blue',
  },

  footerContainer: {
    flexDirection: 'row',
    backgroundColor: '#343C44',
    paddingHorizontal: 48,
  },
});

const Login = () => {
  const [screenName, setScreenName] = React.useState('LOGIN');

  return (
    <View style={styles.container}>
      {/* LOGIN SCREEN */}
      {screenName === 'LOGIN' && (
        <View style={{flex: 1}}>
          {/* LOGO */}
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <FIcon name="codepen" size={80} style={{color: '#343C44'}} />
            </View>
            <View style={styles.welcome}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.sloganText}>Change your lives</Text>
            </View>
          </View>
          {/* LOGIN */}
          <View style={styles.loginContainer}>
            {/* ---------------------------------------------------- */}
            {/* USERNAME */}
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <MCIcon name="email" size={32} style={{color: 'white'}} />
              </View>
              <View style={styles.inputTextContainer}>
                <TextInput
                  keyboardType="phone-pad"
                  style={{color: 'white', fontSize: 18}}
                  autoCorrect={false}
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                />
              </View>
            </View>
            <View style={{height: 16}}></View>
            {/* ---------------------------------------------------- */}
            {/* PASSWORD */}
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <MCIcon name="key" size={32} style={{color: 'white'}} />
              </View>
              <View style={styles.inputTextContainer}>
                <TextInput
                  secureTextEntry
                  autoCorrect={false}
                  style={{color: 'white', fontSize: 18}}
                  placeholder="Enter your password"
                  placeholderTextColor="white"
                />
              </View>
            </View>

            <View style={{height: 16}}></View>

            <View style={styles.buttonContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{color: '#636e72', fontSize: 18, fontWeight: '700'}}>
                  Forgot Password?
                </Text>
              </View>
              <View style={{width: 30}} />
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  flex: 1,
                  height: 60,
                  backgroundColor: '#FBB843',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#dfe6e9',
                    fontSize: 18,
                    fontWeight: '700',
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* FOOTER */}
          <TouchableOpacity
            style={styles.footerContainer}
            onPress={() => {
              setScreenName('REGISTER');
            }}>
            <View
              style={{
                flex: 1,
                height: 56,
                backgroundColor: '#3E4750',
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#dfe6e9',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                REGISTER
              </Text>
            </View>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#FBB843',
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MCIcon
                name="chevron-double-right"
                size={32}
                style={{color: 'white'}}
              />
            </View>
          </TouchableOpacity>

          <View style={{height: 16}} />
        </View>
      )}
      {screenName === 'REGISTER' && (
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      )}
    </View>
  );
};

export default Login;
