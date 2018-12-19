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

export default class AndroidPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {
    const { items } = this.props;

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
          children={
            items.map((item, index) => <Picker.Item key={index} label={item.name} value={item.id} />)
          }
        >
        </Picker>
      </View>
    );
  }
}
