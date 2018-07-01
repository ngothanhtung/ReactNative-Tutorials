import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import {
  Observer,
  Provider,
} from 'mobx-react/native';
import { inject, observer } from 'mobx-react';

@inject('LoginStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
  }

  renderItem({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Login"
          onPress={() => {
            this.props.LoginStore.login('tungnt@softech.vn', '147258369');
          }} />
      </View>
    );
  }
}

export default Login
