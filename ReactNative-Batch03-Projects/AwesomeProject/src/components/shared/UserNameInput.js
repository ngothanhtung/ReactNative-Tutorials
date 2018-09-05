import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class UserNameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ height: 48, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8 }}>
          <Icon name="email" size={24} />
        </View>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={{ flex: 1, height: 48, backgroundColor: 'white', paddingHorizontal: 8 }}
          onChangeText={(text) => {
            this.props.onChangeText(text);
          }}
        />
      </View>
    );
  }
}
