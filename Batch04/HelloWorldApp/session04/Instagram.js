import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ButtonStyles from '../styles/ButtonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0984e3',
    height: 40,
  }
})

export default class Instagram extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#0984e3',
          height: 40,
        }}>
        <View style={styles.header}></View>
        <Text> textInComponent </Text>
        <View style={ButtonStyles.blueButton}></View>
      </View>
    )
  }
}
