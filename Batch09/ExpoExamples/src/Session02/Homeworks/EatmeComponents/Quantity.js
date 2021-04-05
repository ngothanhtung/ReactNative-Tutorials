import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default class Quantity extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (this.state.quantity === 1) return;

            let q = this.state.quantity - 1;
            this.setState({ quantity: q });

            // Callback a function from parent
            this.props.onPress(q);
          }}
        >
          <Text style={{ color: '#898B9A' }}>-</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: '700' }}> {this.state.quantity} </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            let q = this.state.quantity + 1;
            this.setState({ quantity: q });

            // Callback a function from parent
            this.props.onPress(q);
          }}
        >
          <Text style={{ color: '#FF6C44' }}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 56,
    backgroundColor: '#F5F5F8',
    borderRadius: 8,
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
