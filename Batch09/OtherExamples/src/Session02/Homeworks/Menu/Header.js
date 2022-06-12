import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerTextContainer: { position: 'absolute', top: 54, paddingHorizontal: 30 },
  headerText: { color: 'white', fontSize: 24, fontWeight: '700' },
  subHeaderText: { color: 'white', fontSize: 16, fontWeight: '400' },
});

export default class Header extends Component {
  render() {
    return (
      <View>
        <LinearGradient
          colors={['#f48fb1', '#ff4081']}
          style={{
            position: 'absolute',
            marginLeft: -85,
            marginTop: -240,
            width: W * 0.9,
            height: H * 0.6,
            backgroundColor: '#ff4081',
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60,
            transform: [{ rotateX: '0deg' }, { rotateZ: '-40deg' }],
          }}
        />

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Classify transaction</Text>
          <View height={12} />
          <Text style={styles.subHeaderText}>Classify this transaction into a</Text>
          <Text style={styles.subHeaderText}>particular category</Text>
        </View>
      </View>
    );
  }
}
