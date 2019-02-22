import React, { Component } from 'react'
import { Text, View, Button, TextInput, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { loginAsync } from '../actions'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: '123456789',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.loginStatus !== prevProps.loginStatus) {
      console.log(this.props.loginStatus);
    }
  }

  render() {
    return (
      <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
        {/* CONDITIONAL REDERING */}

        <Text> Email </Text>
        <TextInput
          value={this.state.username}
          placeholder="Enter your username"
          keyboardType='default'
          underlineColorAndroid="#0984e3"
          returnKeyType="next"
          onChangeText={(text) => {
            this.setState({ username: text });
          }} />

        <Text> Paswword: </Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          placeholder="Enter your password"
          underlineColorAndroid="#0984e3"
          onChangeText={(text) => {
            this.setState({ password: text });
          }} />

        <View>
          <View style={{ height: 12 }}></View>
          <Button title="LOGIN" onPress={() => {
            this.props.loginAsync(this.state.username, this.state.password);
          }} />
        </View>
        {
          (this.props.loading === true) && <ActivityIndicator />
        }
      </View>
    )
  }
}



// Nối các states vào props (values) của View Component
const mapStateToProps = (state) => ({
  loading: state.authReducer.loading,
  user: state.authReducer.user,
  loginStatus: state.authReducer.loginStatus,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  loginAsync: (username, password) => dispatch(loginAsync(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

