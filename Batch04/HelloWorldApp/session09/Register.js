import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, View, SafeAreaView, TextInput,
  TouchableOpacity, KeyboardAvoidingView, Platform,
  DatePickerAndroid, Picker, ImageBackground,
  TouchableWithoutFeedback, Keyboard, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// DATETIME UTILITY
import moment from 'moment';

// Get value from CONSTANTS
const WHITE_COLOR = '#ffffff';
const DARK_COLOR = '#B53471';

import LOGO_IMAGE_URL from './resources/email-orange.png';
import BACKGROUND_IMAGE_URL from './resources/bg1.jpeg';

const JOBS = ['Software Engineer', 'Teacher', 'Student'];
const GENDERS = ['Male', 'Female'];

export default class RegisterScreenV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBirthday: moment(new Date()),
      selectedGender: '',
      selectedJob: '',
    }
  }

  render() {
    return (

      <ImageBackground style={{ flex: 1, position: 'relative' }} blurRadius={60} source={BACKGROUND_IMAGE_URL}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
          {/* BACKGROUND */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {/* LOGIN COMPONENTS */}
            <SafeAreaView style={styles.loginContainer}>
              {/* LOGO IMAGE */}
              <View style={{ height: 180, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={LOGO_IMAGE_URL} style={styles.logoImage} />
              </View>
              <ScrollView>
                {/* EMAIL INPUT */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="email" size={24} style={styles.inputIcon} />
                    <TextInput
                      autoFocus={false}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      style={styles.inputText}
                      placeholder={'Email'}
                      keyboardType={'email-address'}
                      underlineColorAndroid={'transparent'}
                      placeholderTextColor={WHITE_COLOR}
                    />
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>

                {/* PASSWORD INPUT */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="key" size={24} style={styles.inputIcon} />
                    <TextInput
                      autoFocus={false}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                      style={styles.inputText}
                      placeholder={'Password'}
                      keyboardType={'default'}
                      underlineColorAndroid={'transparent'}
                      placeholderTextColor={WHITE_COLOR}
                    />
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>

                {/* PHONE INPUT */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="phone" size={24} style={styles.inputIcon} />
                    <TextInput
                      autoFocus={false}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      style={styles.inputText}
                      placeholder={'Phone'}
                      keyboardType={'phone-pad'}
                      underlineColorAndroid={'transparent'}
                      placeholderTextColor={WHITE_COLOR}
                    />
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>

                {/* BIRTHDAY DATE PICKER */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="cake-variant" size={24} style={styles.inputIcon} />
                    <View style={{ width: 5 }}></View>
                    <Text style={{
                      color: WHITE_COLOR,
                      paddingVertical: 10,
                      width: '100%'
                    }} onPress={() => {
                      DatePickerAndroid.open({ mode: 'spinner', date: new Date(this.state.selectedBirthday) })
                        .then(result => {
                          // https://facebook.github.io/react-native/docs/datepickerandroid
                          if (result.action != DatePickerAndroid.dismissedAction) {
                            this.setState({ selectedBirthday: moment(new Date(result.year, result.month, result.day)) });
                          }
                        })
                        .catch(err => console.log(err));
                    }}>
                      {this.state.selectedBirthday.format('DD MMM YYYY')}
                    </Text>
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>

                {/* GENDER PICKER */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="gender-male-female" size={24} style={styles.inputIcon} />
                    <Picker
                      style={{ flex: 1, color: WHITE_COLOR, backgroundColor: 'transparent' }}
                      mode="dropdown"
                      selectedValue={this.state.selectedGender}
                      onValueChange={(value, index) => {
                        this.setState({ selectedGender: value });
                      }}
                      children={GENDERS.map((subItem, subIndex) => <Picker.Item key={subIndex} label={subItem} value={subItem} color="black" />)}
                    />
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>

                {/* JOBS PICKER */}
                <View style={styles.inputContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, zIndex: 1 }}>
                    <Icon name="account" size={24} style={styles.inputIcon} />
                    <Picker
                      style={{ flex: 1, color: WHITE_COLOR, backgroundColor: 'transparent' }}
                      mode="dialog"
                      selectedValue={this.state.selectedJob}
                      onValueChange={(value, index) => {
                        this.setState({ selectedJob: value });
                      }}
                      children={JOBS.map((subItem, subIndex) => <Picker.Item key={subIndex} label={subItem} value={subItem} color="black" />)}
                    />
                  </View>
                  <View style={styles.inputBackground}></View>
                </View>
                {/* <View style={{ height: 1000, backgroundColor: 'red' }}></View> */}
              </ScrollView>

              {/* LOGIN BUTTON */}
              <View>
                <TouchableOpacity
                  activeOpacity={0.75}
                  style={styles.submitButton}
                  onPress={this.onPressLogin}>
                  <Text style={styles.submitButtonText}>REGISTER</Text>
                </TouchableOpacity>
              </View>

            </SafeAreaView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    height: '100%',
    width: '100%'
  },

  loginContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },

  logoImage: {
    width: 120,
    height: 120,
  },

  inputContainer: {
    width: '100%',
    height: 48,
    marginVertical: 8,
  },

  inputIcon: {
    color: '#bdc3c7',
    marginRight: 6,
  },

  inputBackground: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    opacity: 0.1,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0,
  },

  inputText: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: WHITE_COLOR,
  },

  submitButton: {
    backgroundColor: DARK_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: '100%',
    borderRadius: 12,
    marginVertical: 8
  },

  submitButtonText: {
    fontSize: 16,
    color: WHITE_COLOR,
    fontWeight: 'bold'
  },

});
