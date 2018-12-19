import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native';

import firebase from 'firebase';

firebase.apps.length == 0 ? firebase.initializeApp({
  apiKey: "AIzaSyBawg7fPF3ZcmEfjdYnOmQNIOggM13sOPM",
  authDomain: "aptech-react-native-starter.firebaseapp.com",
  databaseURL: "https://aptech-react-native-starter.firebaseio.com",
  projectId: "aptech-react-native-starter",
  storageBucket: "aptech-react-native-starter.appspot.com",
  messagingSenderId: "723720653670"
}) : null;

// FIREBASE
const db = firebase.database();

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const HEX_WHITE_COLOR = '#FFFFFF';
const HEX_BLACK_COLOR = '#000000';
const HEX_FB_OWNER_COLOR = '#0084ff';
const HEX_FB_GUEST_COLOR = '#f1f0f0';

const BACKGROUND_IMAGE = require('../../resources/background.png');
const LOGO_IMAGE = require('../../resources/aptech-logo.png');
const MAIL_ICON = require('../../resources/mail_icon.png');
const USER_ICON = require('../../resources/user_icon.png');
const LOCK_ICON = require('../../resources/lock_icon.png');

const USER_PLACEHOLDER_TEXT = 'Username';
const PASSWORD_PLACEHOLDER_TEXT = 'Password';
const SEND_MESSAGE_PLACEHOLDER_TEXT = 'Aa';

const LoadingComponent = <ActivityIndicator size={Platform.OS == 'ios' ? 'small' : 25} color={HEX_WHITE_COLOR} />;

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loading: null,
      messageList: [],
      messageText: ''
    }
  }

  onSubmitEditing = e => {
    var inputtedText = this.refs.usernameField._lastNativeText;
    this.submitLogin(inputtedText);
  }

  submitLogin = username => {
    if (username != '' && username != undefined) {
      this.setState({ loading: LoadingComponent, username });

      db.ref('Messages').on('value', snapshot => {
        var messages = snapshot.val();
        var stateModel = {
          loading: null
        }
        if (messages != null) {
          stateModel.messageList = [];
          for (const key in messages) {
            stateModel.messageList.push(messages[key]);
          }
        }
        this.setState(stateModel);
      });
    }
  }

  onSendMessage = e => {
    var message = this.state.messageText;
    if (message != '') {
      var messageModel = {
        username: this.state.username,
        message,
        createdTime: 0,
        groupId: 1
      }

      this.state.messageList.push(messageModel);
      this.setState({ messageText: '' });
      db.ref('Messages').push(messageModel);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        {/* BACKGROUND */}
        <Image source={BACKGROUND_IMAGE} resizeMode='stretch' style={styles.backgroundImage} />
        {/* LOGIN COMPONENTS */}
        <View style={styles.loginContainer}>
          {this.state.loading}
          {
            this.state.username == ''
            &&
            this.state.loading == null
            &&
            <View>
              {/* LOGO IMAGE */}
              <Image source={LOGO_IMAGE} style={styles.logoImage} />
              {/* USERNAME FIELD */}
              <View style={styles.inputContainer}>
                <View style={styles.subInputContainer}>
                  <Image source={USER_ICON} style={styles.inputIcon} />
                  <TextInput
                    autoFocus={false}
                    autoCorrect={false}
                    ref="usernameField"
                    autoCapitalize={'none'}
                    style={styles.inputText}
                    keyboardType={'email-address'}
                    placeholder={USER_PLACEHOLDER_TEXT}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={HEX_WHITE_COLOR}
                    onSubmitEditing={(input) => this.passwordInput.focus()} />
                </View>
                <View style={styles.inputBackground}></View>
              </View>

              {/* PASSWORD FIELD */}
              <View style={styles.inputContainer}>
                <View style={styles.subInputContainer}>
                  <Image source={LOCK_ICON} style={styles.inputIcon} />
                  <TextInput
                    ref={(input) => this.passwordInput = input}
                    secureTextEntry={true}
                    autoFocus={false}
                    style={styles.inputText}
                    underlineColorAndroid={'transparent'}
                    placeholder={PASSWORD_PLACEHOLDER_TEXT}
                    placeholderTextColor={HEX_WHITE_COLOR}
                    onSubmitEditing={this.onSubmitEditing} />
                </View>
                <View style={styles.inputBackground}></View>

              </View>

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                style={{
                  backgroundColor: HEX_BLACK_COLOR,
                  alignItems: 'center',
                  padding: 15,
                  width: WINDOW_WIDTH / 10 * 9,
                  borderRadius: 12,
                  marginVertical: 10
                }}
                activeOpacity={0.7}
                onPress={this.onSubmitEditing}>
                <Text
                  style={{
                    fontSize: 16,
                    color: HEX_WHITE_COLOR,
                    fontWeight: 'bold'
                  }}>Login</Text>
              </TouchableOpacity>

              {/* REGISTER AND FORGOT PASSWORD */}
              <View style={styles.footerContainer}>
                <View style={{ width: '35%' }}>
                  <TouchableOpacity>
                    <Text style={{ color: HEX_WHITE_COLOR }}>Create account</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '25%' }}></View>
                <View style={{ width: '50%', alignItems: 'flex-end' }}>
                  <TouchableOpacity>
                    <Text style={{ color: HEX_WHITE_COLOR }}>Forgot password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
          {
            this.state.loading == null
            &&
            this.state.username != ''
            &&
            <View style={{
              ...chatScreenStyleSheet.container,
              height: this.state.keyboardVisible == true ? null : WINDOW_HEIGHT / 10 * 9
            }}
            >
              <ScrollView contentContainerStyle={chatScreenStyleSheet.chatBoxScrollView}>
                {
                  this.state.messageList.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          ...chatScreenStyleSheet.message,
                          alignSelf: item.username.toUpperCase() == this.state.username.toUpperCase() ? 'flex-end' : 'flex-start',
                          backgroundColor: item.username.toUpperCase() == this.state.username.toUpperCase() ? HEX_FB_OWNER_COLOR : HEX_FB_GUEST_COLOR
                        }}
                      >
                        <Text style={{ color: item.username.toUpperCase() == this.state.username.toUpperCase() ? HEX_WHITE_COLOR : null }}>
                          {item.username}: {item.message}
                        </Text>
                      </View>
                    );
                  })
                }
              </ScrollView>
              <View style={chatScreenStyleSheet.messageInputContainer}>
                <TextInput
                  autoCorrect={false}
                  value={this.state.messageText}
                  style={chatScreenStyleSheet.messageInput}
                  onSubmitEditing={this.onSendMessage}
                  underlineColorAndroid={'transparent'}
                  onFocus={this.fixKeyboardBreakLayout}
                  onChangeText={text => this.setState({ messageText: text })}
                  placeholderTextColor={HEX_BLACK_COLOR}
                  ref={ref => this.MessageInputRef = ref}
                  placeholder={SEND_MESSAGE_PLACEHOLDER_TEXT}
                />
              </View>
            </View>
          }
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const chatScreenStyleSheet = {
  container: {
    flex: 1,
    width: WINDOW_WIDTH / 10 * 9,
    // height: WINDOW_HEIGHT / 10 * 9
  },
  chatBoxScrollView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  message: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 25
  },
  messageInputContainer: {
    height: 50,
    // opacity: 0.2,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: HEX_WHITE_COLOR,
    marginBottom: WINDOW_WIDTH / 20
  },
  messageInput: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    color: HEX_BLACK_COLOR
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
    tintColor: HEX_WHITE_COLOR,
    alignSelf: 'center',
    marginBottom: 5,
    marginRight: 12
  },

  inputBackground: {
    position: 'absolute',
    backgroundColor: HEX_WHITE_COLOR,
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
    color: HEX_WHITE_COLOR
  },
  footerContainer: {
    flexDirection: 'row',
    width: '80%'
  }
});
