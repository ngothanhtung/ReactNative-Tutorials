import React, { Component } from 'react';
import { Text, View, TextInput, AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (this.props.loginStatus !== prevProps.loginStatus) {
    //   console.log(this.props.loginStatus);
    // }
  }

  componentDidMount() {
    AsyncStorage.getItem('loggedInUser').then(data => {
      if (data) {
        const loggedInUser = JSON.parse(data);
        console.log(loggedInUser);
        this.props.login(loggedInUser.username, loggedInUser.password);
      }
    });
  }

  render() {
    return (
      <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
        {/* CONDITIONAL REDERING */}

        <Text> Email </Text>
        <TextInput
          value={this.state.username}
          placeholder='Enter your username'
          keyboardType='default'
          underlineColorAndroid='#0984e3'
          returnKeyType='next'
          onChangeText={text => {
            this.setState({ username: text });
          }}
        />
        {/* <Input
          label="Email:"
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        /> */}
        <Text> Paswword: </Text>
        <TextInput
          secureTextEntry={true}
          value={this.state.password}
          placeholder='Enter your password'
          underlineColorAndroid='#0984e3'
          onChangeText={text => {
            this.setState({ password: text });
          }}
        />

        <View>
          <View style={{ height: 12 }} />
          <Button
            disabled={this.props.loading}
            loading={this.props.loading}
            icon={<Icon name='lock' color='white' />}
            iconRight={false}
            title='LOGIN'
            onPress={() => {
              //store.dispatch({ type: 'AUTH_REGISTER', username: '' });
              // this.props.loginAsync(this.state.username, this.state.password);
              this.props.login(this.state.username, this.state.password);
            }}
          />
        </View>
      </View>
    );
  }
}

// Nối các states vào props (values) của View Component
const mapStateToProps = state => ({
  loading: state.authReducer.loginReducer.loading,
  user: state.authReducer.loginReducer.user,
  loginStatus: state.authReducer.loginReducer.loginStatus,
});
// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = dispatch => ({
  login: (username, password) =>
    dispatch({
      type: ActionTypes.AUTH_LOGIN,
      username: username,
      password: password,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
