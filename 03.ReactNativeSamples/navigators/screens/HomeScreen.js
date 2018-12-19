import React, { Component } from 'react';
import {
  View, Text, Button,
  TouchableOpacity
} from 'react-native';

import axios from 'axios';

import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '@workplace',
    headerBackTitle: null
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: null
    }

    var component = this;

    axios.get('http://localhost:9000/product/')
      .then((response) => {
        component.setState({ products: response.data });
        component.setState({ loading: false });
      })
      .catch((error) => {
        alert('Error: ' + error);
        console.log(error);
      });
  }

  addProduct = () => {
    axios.post('http://localhost:9000/product/add/', {
      name: 'iPhone X',
      price: 1500,
      desc: 'from RN'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // createUser = () => {
  //   const { email, password } = { email: 'tungnt@softech.edu.vn', password: '123456789' };
  //   auth.createUserWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       console.log(user.uid);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // login = () => {
  //   const { email, password } = { email: 'tungnt@softech.vn', password: '123456789' };
  //   auth.signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       console.log(user.uid);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    if (this.state.status) {
      return (
        <View>
          <Text>Loading ...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Text style={styles.logoText}>@workplace</Text>

            <View style={{ height: 8 }}></View>

            <Text style={styles.header}>Enter your password</Text>

            <View style={{ height: 8 }}></View>

            <Text style={styles.title}>Log in using your Workplace password</Text>
          </View>
          <View style={styles.middleContainer}>
            {
              this.state.products && this.state.products.map((p, index) =>
                <View key={index}>
                  <Text>
                    {p.name}
                  </Text>
                </View>
              )
            }

          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('CreateAccount1') }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('Login1') }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Firebase Login</Text>
              </View>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.buttonContainer} onPress={this.createUser}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Firebase Create User</Text>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttonContainer} onPress={this.addProduct}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add Product</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

  }
}

