import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  selectedBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#FF6C44',
  },

  selectedText: {
    color: '#ffffff',
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderColor: '#BBBDC1',
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },

  text: {
    color: '#BBBDC1',
  },
});

export default class SizeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
    };
  }

  render() {
    console.log('Sizes - render');

    return (
      <View style={styles.container}>
        {this.props.sizes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={this.state.selectedIndex === index ? styles.selectedBox : styles.box}
              onPress={() => {
                this.setState({ selectedIndex: index });

                let selectedSize = this.props.sizes[index];

                this.props.onPress(selectedSize);
              }}
            >
              <Text style={this.state.selectedIndex === index ? styles.selectedText : styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
