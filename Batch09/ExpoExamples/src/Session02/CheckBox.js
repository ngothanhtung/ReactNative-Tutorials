import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default class CheckBox extends Component {
  state = {
    checked: false,
  };

  render() {
    return (
      <View>
        <MaterialCommunityIcons
          name={this.state.checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          size={24}
          color='black'
          onPress={() => {
            let x = !this.state.checked;
            this.setState({ checked: x });
          }}
        />
      </View>
    );
  }
}
