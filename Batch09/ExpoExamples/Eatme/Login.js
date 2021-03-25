import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Switch } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  logoContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flex: 1.5,
  },

  logo: {
    height: 60,
    width: 190,
  },

  headerContainer: {
    alignItems: 'center',
    marginTop: 24,
  },

  headerText: {
    fontFamily: 'SVN-Gilroy-Bold',
    fontSize: 24,
    marginVertical: 8,
    color: '#111A2C',
  },

  welcomeText: {
    fontFamily: 'SVN-Gilroy-Medium',
    fontSize: 14,
    color: '#525C67',
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    flex: 3,
    padding: 16,
  },

  emailContainer: {
    marginTop: 12,
  },

  passwordContainer: {
    marginTop: 12,
  },

  label: {
    marginBottom: 12,
    color: '#525C67',
    fontFamily: 'SVN-Gilroy-Medium',
  },

  input: {
    height: 56,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },

  placeholderText: {
    color: '#898B9A',
    fontFamily: 'SVN-Gilroy-Medium',
    fontSize: 14,
  },

  forgotPasswordContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },

  forgotPasswordText: {
    color: '#898B9A',
    fontFamily: 'SVN-Gilroy-Regular',
    fontSize: 14,
  },

  saveMeText: {
    marginLeft: 8,
    color: '#898B9A',
    fontFamily: 'SVN-Gilroy-Regular',
    fontSize: 14,
  },

  footerContainer: {
    backgroundColor: '#FFFFFF',
    // flex: 1,
    paddingHorizontal: 16,
  },

  loginButton: {
    marginTop: 24,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SVN-Gilroy-SemiBold',
  },

  facebookLoginButton: {
    marginBottom: 12,
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0064C0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  googleLoginButton: {
    marginBottom: 12,
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F5F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpContainer: {
    marginTop: 12,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  notHaveAccountText: {
    fontSize: 16,
    color: '#525C67',
    fontFamily: 'SVN-Gilroy-Regular',
  },

  signUpText: {
    fontSize: 16,
    color: '#FF6C44',
    fontFamily: 'SVN-Gilroy-Bold',
  },
});

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* LOGO & HEADER TEXT*/}
        <View style={styles.logoContainer}>
          {/* LOGO */}
          <Image style={styles.logo} source={require('../assets/logo-eatme.png')} />

          {/* HEADER TEXT */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Let's Sign You In</Text>
            <Text style={styles.welcomeText}>Welcome back, you've been missed</Text>
          </View>
        </View>

        {/* INPUTS */}
        <View style={styles.inputContainer}>
          {/* EMAIL INPUT */}
          <View style={styles.emailContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.input}>
              <Text style={styles.placeholderText}>Enter your email</Text>
              <Icon name='check-circle-outline' size={20} color='#898B9A' />
            </View>
          </View>

          {/* PASSWORD INPUT */}
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.input}>
              <Text style={styles.placeholderText}>Enter your password</Text>
              <Icon name='eye-circle-outline' size={20} color='#898B9A' />
            </View>
          </View>

          {/* SAVE ME & FORGOT PASSWORD? */}
          <View style={styles.forgotPasswordContainer}>
            <View flexDirection='row' alignItems='center'>
              <Switch trackColor={{ false: '#898B9A', true: '#FF6C44' }} ios_backgroundColor='#898B9A' thumbColor={'#ffffff'} onValueChange={() => {}} value={false} />
              <Text style={styles.saveMeText}>Save me</Text>
            </View>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </View>

          {/* SIGN IN BUTTON */}
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </View>

          {/* DONT'T HAVE AN ACCOUNT? SIGN UP */}
          <View style={styles.signUpContainer}>
            <Text style={styles.notHaveAccountText}>Don't have an account? </Text>
            <Text style={styles.signUpText}>Sign up</Text>
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footerContainer}>
          {/* FACEBOOK LOGIN BUTTON */}
          <View style={styles.facebookLoginButton}>
            <View>
              <Ionicons name='logo-facebook' size={18} color='white' />
            </View>
            <View width={8} />
            <View>
              <Text style={styles.loginText}>Continue with Facebook</Text>
            </View>
          </View>

          {/* GOOGLE LOGIN BUTTON */}
          <View style={styles.googleLoginButton}>
            <View>
              <Image style={{ height: 16, width: 16 }} source={require('../assets/google-icon.png')} />
            </View>
            <View width={8} />
            <View>
              <Text style={[styles.loginText, { color: '#111A2C' }]}>Continue with Google</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
