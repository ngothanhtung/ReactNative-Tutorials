import React, { Component } from 'react';
import { Alert, View, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button, RadioButton, Title, Text, TextInput } from 'react-native-paper';
import firebase from 'react-native-firebase';
import Container from '../../../components/Container';
import colors from '../../../constants/colors';
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      email: '',
      password: '',
      fullname: '',
      loading: false,
    };
  }

  onPressRegisterButton = async () => {
    const { email, password } = this.state;
    await this.setState({ loading: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredentials) => {
        if (userCredentials.user) {
          console.log(userCredentials.user);
          await this.setState({ loading: false });
        }
      })
      .catch((error) => {
        const { message } = error;
        Alert.alert('Đăng ký không thành công!', message);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{}}>ĐĂNG KÝ TÀI KHOẢN</Title>
            <Text>Hãy nhập đầy đủ các thông tin dưới đây</Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.emailInput = c)}
              value={this.state.email}
              mode='outlined'
              label='Email'
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
              label='Password'
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              onSubmitEditing={() => this.confirmPasswordInput.focus()}
            />
            <View style={{ height: 12 }} />
            <TextInput
              theme={{ colors: { background: 'white' } }}
              ref={(c) => (this.confirmPasswordInput = c)}
              value={this.state.confirmPassword}
              mode='outlined'
              label='Re-type Password'
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'default'}
              onChangeText={(text) => {
                this.setState({ confirmPassword: text });
              }}
              onSubmitEditing={this.onPressRegisterButton}
            />

            <View style={{ height: 24 }} />

            <Button loading={this.state.loading} icon='account-circle' mode='contained' onPress={this.onPressRegisterButton}>
              Đăng ký tài khoản
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default RegisterScreen;
