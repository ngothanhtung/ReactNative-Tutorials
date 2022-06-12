import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  footer: {
    height: 60,

    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },
});

const images = [require('./images/1.jpeg'), require('./images/2.jpeg'), require('./images/3.jpeg')];

export default class ImageSlider extends Component {
  state = {
    index: 0,
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image source={images[this.state.index]} resizeMode='cover' style={{ width: '100%', flex: 1 }} />

        <View style={styles.footer}>
          {this.state.index > 0 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.index === 0) return;
                let i = this.state.index - 1;
                this.setState({ index: i });
              }}
            >
              <Text>Previous</Text>
            </TouchableOpacity>
          )}

          <View style={{ flex: 1 }} />
          {this.state.index < 2 && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.index === 2) return;
                let i = this.state.index + 1;
                this.setState({ index: i });
              }}
            >
              <Text>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
