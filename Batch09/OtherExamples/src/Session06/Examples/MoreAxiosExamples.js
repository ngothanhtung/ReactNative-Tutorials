import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios';

export default class MoreAxiosExamples extends Component {
  getUsers = () => {
    const url = 'https://training.softech.cloud/api/users';
    axios.get(url).then((result) => {
      console.log(result.data);
    });
  };

  getUserById = () => {
    const id = '6077a48b06eb8bb360f6eb91';
    const url = 'https://training.softech.cloud/api/users/' + id;
    axios.get(url).then((result) => {
      console.log(result.data);
    });
  };

  login = () => {
    const url = 'https://training.softech.cloud/api/users/login';
    const data = { email: 'ngothanhtung.it@outlook.com', password: '123456789' };
    axios.post(url, data).then((result) => {
      console.log(result.data);
    });
  };

  register = () => {
    const url = 'https://training.softech.cloud/api/users/register';
    const data = { email: 'ngothanhtung.it1@outlook.com', password: '123456789', fullname: 'Ngo Thanh Tung' };
    axios
      .post(url, data)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteUser = () => {
    const id = '60796d24c6c1bfff700faaa5';
    const url = 'https://training.softech.cloud/api/users/' + id;
    axios.delete(url).then((result) => {
      console.log(result.data);
    });
  };

  render() {
    return (
      <View>
        <Text>Axios Examples</Text>
        <Button title='Get users' onPress={this.getUsers} />

        <Button title='Get user by Id' onPress={this.getUserById} />

        <Button title='Login' onPress={this.login} />

        <Button title='Register' onPress={this.register} />

        <Button title='Delete a user' onPress={this.deleteUser} />
      </View>
    );
  }
}
