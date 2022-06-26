// Notes:
// - expo install react-native-svg

import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Button from '../components/Button';
import GilroyText from '../components/GilroyText';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

export default class OnboardingScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenName: 1,
    };
  }

  render() {
    let CurrentScreen = Screen1;
    if (this.state.screenName === 2) {
      CurrentScreen = Screen2;
    } else if (this.state.screenName === 3) {
      CurrentScreen = Screen3;
    }

    return (
      <React.Fragment>
        <StatusBar backgroundColor='rgba(255, 92, 1, 0.2)' barStyle='dark-content' />
        {/* SCREEN */}
        <CurrentScreen />
        {/* BUTTON */}
        <View style={{ marginBottom: 32, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <GilroyText fontStyle='Medium' style={{ fontSize: 16, color: '#757D85' }}>
            Skip
          </GilroyText>
          <Button
            style={{ backgroundColor: '#FF6C44', width: 168, height: 56 }}
            titleColor='white'
            title='Next'
            onPress={() => {
              let s = this.state.screenName;
              s++;
              if (s > 3) s = 1;
              this.setState({ screenName: s });
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}
