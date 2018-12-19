import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('LoginStore')
@observer
export default class LoginStatus extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.LoginStore.user.email}</Text>
      </View>
    );
  }
}
