import React, { Component } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveMeText: {
    marginLeft: 4,
    fontFamily: 'SVN-Gilroy-Regular',
    color: '#898B9A',
  },
});

export default class SwitchButton extends Component {
  state = {
    value: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: '#898B9A', true: '#FF6C44' }}
          ios_backgroundColor='#898B9A'
          thumbColor='#ffffff'
          onValueChange={() => {
            let v = !this.state.value;
            this.setState({ value: v });
          }}
          value={this.state.value}
        />
        <Text style={styles.saveMeText}>{this.props.title}</Text>
      </View>
    );
  }
}
