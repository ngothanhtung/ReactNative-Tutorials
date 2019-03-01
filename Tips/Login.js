import React, { Component } from 'react';
import {
  NetInfo,
  Alert,
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import BackgroundImageUrl from '../../../../assets/bg.imm.jpg';
import LogoImageUrl from '../../../../assets/logo.imm.png';
import colors from '../../../constants/colors';
import version from '../../../constants/version';
const ICON_SIZE = 24;

const styles = {
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    height: 60,
    justifyContent: 'flex-end',
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingLeft: 8,
    height: 48,
    //opacity: 0.75,
    backgroundColor: '#ffffff',
  },

  textIput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: 48,
    paddingLeft: 12,
    //opacity: 0.75,
    color: colors.fontColor,
    backgroundColor: '#ffffff',
  },

  button: {
    width: '100%',
    backgroundColor: '#AD1F23',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 0,
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
      isKeyboardShown: false,
      email: version.devMode ? 'imm.developer@imm.group' : '',
      password: version.devMode ? '123123' : '',
    };
  }

  async getCustomer() {
    const customerJson = await AsyncStorage.getItem('Customer');
    if (customerJson) {
      const customer = JSON.parse(customerJson);
      this.setState({ email: customer.email, password: customer.password });
      // SAGA

      this.props.login(this.state.email, this.state.password);
    }
  }

  login() {
    this.props.login(this.state.email, this.state.password);
  }

  loginAsGuest() {
    this.props.loginAsGuest();
  }
  async componentWillMount() {
    await this.getCustomer();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow = () => {
    this.setState({ isKeyboardShown: true });
  }

  keyboardDidHide = () => {
    this.setState({ isKeyboardShown: false });
  }

  componentDidMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      if (connectionInfo.type === 'none') {
        Alert.alert('IMM Group', 'Không có kết nối internet.\nVui lòng kiểm tra lại!')
      }
    });

    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, position: 'relative' }} blurRadius={0} source={BackgroundImageUrl}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
              <View style={styles.topContainer}>
                {
                  (this.state.isKeyboardShown === false) &&
                  <View style={{
                    padding: 8, backgroundColor: '#ffffff', opacity: 1, borderRadius: 12,
                  }}
                  >
                    <Image resizeMode="contain" style={{ width: 160, height: 160 }} source={LogoImageUrl} />
                  </View>
                }
                {
                  (this.state.isKeyboardShown === true) &&
                  <View style={{
                    padding: 8, backgroundColor: '#ffffff', opacity: 0.75, borderRadius: 12,
                  }}
                  >
                    <Image resizeMode="contain" style={{ width: 80, height: 80 }} source={LogoImageUrl} />
                  </View>
                }
              </View>
              <View style={styles.middleContainer}>
                <View style={{ flex: 1, padding: 24 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <Icon name="email" color={colors.fontColor} size={24} />
                    </View>
                    <TextInput
                      style={styles.textIput}
                      underlineColorAndroid="transparent"
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Email"
                      placeholderTextColor={colors.placeholderColor}
                      keyboardType="email-address"
                      value={this.state.email}
                      onChangeText={(text) => { this.setState({ email: text }); }}
                      onSubmitEditing={() => this.passwordInput.focus()}
                    />
                  </View>

                  <View style={{ height: 12 }} />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.iconContainer}>
                      <Icon name="keyboard" color={colors.fontColor} size={24} />
                    </View>

                    <TextInput
                      style={styles.textIput}
                      underlineColorAndroid="transparent"
                      secureTextEntry
                      autoCorrect={false}
                      autoCapitalize="none"
                      placeholder="Password"
                      placeholderTextColor={colors.placeholderColor}
                      value={this.state.password}
                      onChangeText={(text) => { this.setState({ password: text }); }}
                      onSubmitEditing={() => this.login()}
                    />
                  </View>

                  <View style={{ height: 12 }} />
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Button
                        title="Đăng nhập"
                        containerStyle={Platform.OS === 'ios' ? {} : styles.button}
                        disabled={this.props.loading}
                        loading={this.props.loading}
                        disabledStyle={styles.button}
                        buttonStyle={styles.button}
                        icon={<Icon type="material-community" name="lock" size={ICON_SIZE} color="white" />}
                        onPress={() => { this.login() }}
                      />
                    </View>
                    <View style={{ width: 6 }}></View>
                    <View style={{ flex: 1 }}>
                      <Button
                        containerStyle={Platform.OS === 'ios' ? {} : styles.button}
                        title="Thoát"
                        buttonStyle={styles.button}
                        icon={<Icon type="material-community" name="exit-to-app" size={ICON_SIZE} color="white" />}
                        onPress={() => {
                          this.props.navigation.goBack();
                        }}
                      />
                    </View>
                    {/* <View style={{ width: 6 }}></View>
                    <View style={{ flex: 1 }}>
                      <Button
                        containerStyle={Platform.OS === 'ios' ? {} : styles.button}
                        title="Khách"
                        buttonStyle={styles.button}
                        icon={<Icon type="font-awesome" name="user" size={18} color="white" />}
                        onPress={() => {
                          this.loginAsGuest();
                        }}
                      />
                    </View> */}
                  </View>
                </View>
              </View>
              <View style={styles.bottomContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 16 }}>
                  <Text
                    style={{ color: '#ffffff' }}
                    onPress={() => {
                      // TODO
                    }}
                  >
                    Version {version.codeVersion}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}