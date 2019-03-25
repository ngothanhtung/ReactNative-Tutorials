import React, { Component } from 'react'
import { Text, Button, SafeAreaView, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import Login from '../../modules/authModule/components/Login';
class HeaderTitle extends Component {
  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Icon style={{ color: '#ffffff' }} name="key" size={24} />
        <View style={{ width: 8 }}></View>
        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700' }}>LOGIN</Text>
        <View style={{ width: 8 }}></View>
        <Button title="Click" onPress={() => {
          alert('OK');
        }} />
      </View>
    )
  }
}

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
    title: 'DANG NHAP',
    headerBackTitle: 'Back',
    headerTransparent: true,
    headerTitle: <HeaderTitle />,
    headerLeft: (
      <View style={{ paddingRight: 8 }}>
        <Button
          onPress={() => alert('This is a left button!')}
          title="Left"
          color="#ffffff"
        />
      </View>

    ),
    headerRight: (
      <View style={{ paddingRight: 8 }}>
        <Button
          onPress={() => alert('This is a right button!')}
          title="Right"
          color="#ffffff"
        />
      </View>

    ),
  };
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <Login />
      // <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
      //   <Text> Login Screen </Text>
      //   <Button title="Register" onPress={() => {
      //     this.props.navigation.navigate('RegisterScreen', { message: 'Hello from LoginScreen' })
      //   }} />
      //   <Button title="Go to Tab" onPress={() => {
      //     // this.props.navigation.navigate('TabNavigator')
      //     this.props.navigation.navigate('DrawerNavigator')
      //   }} />
      //   <Button title="LOGIN" onPress={() => {
      //     axios.post('https://us-central1-reactnativebatch04.cloudfunctions.net/login', {
      //       username: 'admin',
      //       password: '1234567899'
      //     }).then(response => {
      //       console.log(response.data);
      //     })
      //   }} />
      // </SafeAreaView>
    )
  }
}
