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
import { DrawerActions } from 'react-navigation';

import styles from './styles';


export default class MoreScreen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>

        </View>
        <View style={styles.middleContainer}>
          <Button title="Go to MoreScreen 2" onPress={() => {
            this.props.navigation.navigate("MoreScreen2");
          }} />

          <Text style={styles.header}>
            More Screen 1
            </Text>
        </View>
        <View style={styles.bottomContainer}>

        </View>
      </View>
    );
  }
}
