import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import MyStyles from './MyStyles';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  block1: {height: 60, width: 60, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center'},
  block2: {
    height: 60,
    width: 60,
    backgroundColor: 'violet',
    alignSelf: 'flex-start',
  },
  block3: {height: 60, width: 60, backgroundColor: 'orange'},
});

export default class FlexLayoutExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.block1}>
            <MCIcon name="home-city" size={24} style={{color: 'white'}} />
          </View>
          <View style={styles.block2}></View>
          <View style={styles.block3}></View>
        </View>
        <View style={{flex: 2, backgroundColor: 'yellow'}}></View>
        <View style={MyStyles.footerContainer}></View>
      </View>
    );
  }
}
