import React, { Component } from 'react';
import {
  View, Text, Button, Icon, TextInput,
  ScrollView,
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';


export default class MoreScreen2 extends Component {

  static navigationOptions = () => ({
    header: null
  })

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.header}>
            More Screen 2
            </Text>
        </View>
        <View style={styles.middleContainer}>

        </View>
        <View style={styles.bottomContainer}>

        </View>
      </View>
    );
  }
}
