import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform,
  DatePickerAndroid, DatePickerIOS, Picker
} from 'react-native';
import COLORS from '../../constants/COLORS';

// BEGIN: CONSTANTS
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

// Get value from CONSTANTS
const WHITE_COLOR = COLORS.White;
const DARK_COLOR = '#45aaf2';

const BACKGROUND_IMAGE = require('../../resources/background-2.jpg');
const LOGO_IMAGE = require('../../resources/react-native-logo.png');
const MAIL_ICON = require('../../resources/icons/mail_icon.png');
const LOCK_ICON = require('../../resources/icons/lock_icon.png');
const PHONE_ICON = require('../../resources/icons/phone_icon.png');
const BIRTHDAY_ICON = require('../../resources/icons/gift_icon.png');
const GENDER_ICON = require('../../resources/icons/gender_icon.png');
const JOB_ICON = require('../../resources/icons/job_icon.png');

const SUBMIT_BUTTON_TEXT = 'REGISTER';
const PICKER_HOLDER = '-- CLICK TO SELECT';
// END CONSTANTS COMPONENTS

const Error = (props) => {
  if (props.isInvalid === true) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'yellow' }}>{props.errorMessage}</Text>
      </View>
    );
  }
  return (
    <View></View>
  );
};

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthday: new Date(Date.now()),
      gender: 'female',
      job: 'student'
    }
  }

  JOBS = ['Programmer', 'Servicer', 'Taxi driver'];
  GENDER = ['Male', 'Female'];

  openBirthdayAndroidDatePicker = e => {
    DatePickerAndroid.open({ mode: 'spinner', date: this.state.birthday })
      .then(result => {
        if (result.action != DatePickerAndroid.dismissedAction) {
          var birthday = new Date();
          birthday.setUTCDate(result.day);
          birthday.setUTCMonth(result.month);
          birthday.setUTCFullYear(result.year);
          this.setState({
            birthday
          });
        }
      })
      .catch(err => console.log(err));
  }


  formatAndroidBirthdayText = () => {
    var birthday = this.state.birthday;
    return `${birthday.getUTCDate()}/${birthday.getUTCMonth() + 1}/${birthday.getUTCFullYear()}`;
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        {/* BACKGROUND */}
        <Image source={BACKGROUND_IMAGE} resizeMode='stretch' style={styles.backgroundImage} />
        {/* LOGIN COMPONENTS */}
        <View style={styles.loginContainer}>
          {/* LOGO IMAGE */}
          <Image source={LOGO_IMAGE} style={styles.logoImage} />

          {/* USERNAME */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={MAIL_ICON} style={styles.inputIcon} />
              <TextInput
                autoFocus={false}
                autoCorrect={false}
                autoCapitalize={'none'}
                style={styles.inputText}
                placeholder={"Email"}
                keyboardType={"email-address"}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={WHITE_COLOR}
              // onChangeText={(text) => this.setState({ username: text, invalidEmail: text.length === 0 })}
              // onSubmitEditing={(input) => this.passwordInput.focus()}
              />
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* PASSWORD */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={LOCK_ICON} style={styles.inputIcon} />
              <TextInput
                secureTextEntry={true}
                autoFocus={false}
                autoCorrect={false}
                autoCapitalize={"none"}
                style={styles.inputText}
                placeholder={"Password"}
                keyboardType={"default"}
                underlineColorAndroid={'transparent'}
                placeholderTextColor={WHITE_COLOR}
              // onChangeText={(text) => this.setState({ username: text, invalidEmail: text.length === 0 })}
              // onSubmitEditing={(input) => this.passwordInput.focus()}
              />
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* BIRTHDAY */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={BIRTHDAY_ICON} style={styles.inputIcon} />
              <Text style={styles.androidBirthdayText} onPress={this.openBirthdayAndroidDatePicker}>
                {this.formatAndroidBirthdayText()}
              </Text>
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* GENDER */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={GENDER_ICON} style={styles.inputIcon} />
              <Picker
                style={{ flex: 1, color: WHITE_COLOR }}
                mode={'dialog'}
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemPosition) => {
                  this.setState({ gender: itemValue });
                }}
              >
                <Picker.Item label="Male" value="male" color={DARK_COLOR} />
                <Picker.Item label="Female" value="female" color={DARK_COLOR} />
              </Picker>
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* JOB */}
          <View style={styles.inputContainer}>
            <View style={styles.subInputContainer}>
              <Image source={JOB_ICON} style={styles.inputIcon} />
              <Picker
              style={{ flex: 1, color: WHITE_COLOR }}
                mode={'dialog'}
                selectedValue={this.state.gender}
                onValueChange={(itemValue, itemPosition) => {
                  this.setState({ job: itemValue });
                }}
              >
                <Picker.Item label="Student" value="student" color={DARK_COLOR} />
                <Picker.Item label="Software Engineer" value="software-engineer" color={DARK_COLOR} />
              </Picker>
            </View>
            <View style={styles.inputBackground}></View>
          </View>

          {/* LOGIN BUTTON */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.submitButton}
            onPress={this.onPressLogin}>
            <Text style={styles.submitButtonText}>{SUBMIT_BUTTON_TEXT}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    height: '100%',
    width: '100%'
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  logoImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginVertical: 15
  },
  inputContainer: {
    width: WINDOW_WIDTH / 10 * 9,
    height: 50,
    marginVertical: 10
  },
  subInputContainer: {
    zIndex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  inputIcon: {
    width: 24,
    height: 24,
    tintColor: WHITE_COLOR,
    alignSelf: 'center',
    marginBottom: 5,
    marginRight: 12
  },

  inputBackground: {
    position: 'absolute',
    backgroundColor: WHITE_COLOR,
    opacity: 0.2,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    zIndex: 0
  },

  inputText: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: COLORS.White
  },
  submitButton: {
    backgroundColor: DARK_COLOR,
    alignItems: 'center',
    padding: 15,
    width: WINDOW_WIDTH / 10 * 9,
    borderRadius: 12,
    marginVertical: 10
  },
  submitButtonText: {
    fontSize: 16,
    color: WHITE_COLOR,
    fontWeight: 'bold'
  },
  androidBirthdayText: {
    color: WHITE_COLOR,
    alignSelf: 'center',
    paddingVertical: 10,
    width: '100%'
  }
});
