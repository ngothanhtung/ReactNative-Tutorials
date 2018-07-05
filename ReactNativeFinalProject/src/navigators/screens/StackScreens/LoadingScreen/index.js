import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Image,
  Easing
} from 'react-native';

import { Button, Icon } from 'react-native-elements';

//import styles from './styles';

const iconHome = {
  name: 'home',
  size: 16,
  color: 'white'
}

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin()
  }
  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  start() {
    this.props.navigation.navigate('AnimationScreen');
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.container}>
        <View style={{}}>
          <Animated.Image
            style={{
              width: 227,
              height: 200,
              transform: [{ rotate: spin }]
            }}
            source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
          />
        </View>
        <Text style={{ alignSelf: 'center' }}> Loading Screen </Text>
        <Button
          backgroundColor='#4396EC'         
          title='Start'
          onPress={() => {
            this.props.navigation.navigate('LoginScreen');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})