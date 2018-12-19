import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    height: 48,
    backgroundColor: '#dfe6e9',
  }
});

export default class AndroidGenderPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <Picker
          style={{ flex: 1, color: '#2d3436' }}
          mode={'dropdown'}
          selectedValue={this.state.value}
          onValueChange={(itemValue, itemPosition) => {
            this.setState({ value: itemValue });
            this.props.onSelect(itemValue);
          }}
        >
          <Picker.Item label="[ Select gender ]" value="" color="#2d3436" />
          <Picker.Item label="Male" value="male" color="#2d3436" />
          <Picker.Item label="Female" value="female" color="#2d3436" />
        </Picker>
      </View>
    );
  }
}
