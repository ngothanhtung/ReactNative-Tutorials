import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import LoadingScreen from '../screens/LoadingScreen';
import StackNavigator from './StackNavigator';

const AppNavigator = createSwitchNavigator({
  Stack: StackNavigator,

});

export default AppNavigator;