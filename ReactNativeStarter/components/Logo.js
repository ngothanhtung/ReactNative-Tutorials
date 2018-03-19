import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 20
  }
});

class Logo extends Component {
  render(){
    return(
      <View>
        <Text style={styles.text}>
          REACT NATIVE LOGO
        </Text>
      </View>
    );
  }
}

export default Logo;