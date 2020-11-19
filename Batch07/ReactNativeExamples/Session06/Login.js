import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    backgroundColor: 'gray',
  },

  button: {
    height: 48,
    backgroundColor: 'blue',
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: '',
    };
  }

  login = () => {
    axios
      .post('https://training.softech.cloud/api/users/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          alert('Dang nhap thanh cong');
        } else {
          alert('Dang nhap khong thanh cong');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({email: text});
          }}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({password: text});
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
