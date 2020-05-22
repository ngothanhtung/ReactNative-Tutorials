import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FIcon from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  constainer: {flex: 1},
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
  footerContainer: {
    height: 120,
    backgroundColor: '#c6ff00',
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.constainer}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <FIcon name="codepen" size={80} style={{color: '#343C44'}} />
          </View>
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.sloganText}>Change your lives</Text>
          </View>
        </View>
        <View style={styles.loginContainer}>
          {/* ---------------------------------------------------- */}
          {/* USERNAME */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <MCIcon name="account" size={32} style={{color: 'white'}} />
            </View>
            <View style={styles.inputTextContainer}>
              <Text style={{color: 'white', fontSize: 18}}>
                Enter your username
              </Text>
            </View>
          </View>
          <View style={{height: 16}}></View>
          {/* ---------------------------------------------------- */}
          {/* PASSWORD */}
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <MCIcon name="account" size={32} style={{color: 'white'}} />
            </View>
            <View style={styles.inputTextContainer}>
              <Text style={{color: 'white', fontSize: 18}}>
                Enter your username
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}></View>
      </View>
    );
  }
}
