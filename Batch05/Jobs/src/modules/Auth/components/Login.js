import React, { Component } from 'react';
import { Alert, View, Platform, KeyboardAvoidingView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button, Title, Text, TextInput } from 'react-native-paper';
import firebase from 'react-native-firebase';
import Container from '../../../components/Container';
import colors from '../../../constants/colors';

class Login extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      email: 'tungnt@softech.vn',
      password: '123456789',
      loading: false,
    };
  }

  onPressLoginButton = async () => {
    const { email, password } = this.state;
    await this.setState({ loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        // SET REDUX
        console.log(result);
        // this.props.navigation.navigate('Tab');
      })
      .catch((error) => {
        const { message } = error;
        Alert.alert('Login failed', message);
        this.setState({ loading: false });
      });
  };

  onPressRegisterButton = () => {
    this.props.navigation.navigate('RegisterScreen');
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{ color: colors.PRIMARY }}>ĐĂNG NHẬP</Title>
            <Text>Log in using email & password</Text>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.emailInput = c)}
              value={this.state.email}
              mode='outlined'
              label='Email:'
              // placeholder={'Enter yout email'}
              autoFocus={true}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
              onSubmitEditing={() => this.passwordInput.focus()}
            />
            <View style={{ height: 12 }} />
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.passwordInput = c)}
              value={this.state.password}
              mode='outlined'
              label='Password:'
              // placeholder={'Enter your password'}
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              onSubmitEditing={this.onPressLoginButton}
            />

            <View style={{ height: 24 }} />
            <Button loading={this.state.loading} icon='lock' mode='contained' onPress={this.onPressLoginButton}>
              Đăng nhập
            </Button>
            <View style={{ height: 12 }} />
            <Button icon='account-circle' mode='contained' onPress={this.onPressRegisterButton}>
              Đăng ký tài khoản
            </Button>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }

  componentDidMount() {}
}

export default withNavigation(Login);
