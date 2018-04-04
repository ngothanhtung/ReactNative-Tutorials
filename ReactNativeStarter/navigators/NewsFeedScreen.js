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

import { StackNavigator } from "react-navigation";

import styles from './styles';


import NewsFeedScreen1 from './NewsFeedScreen1';
import NewsFeedScreen2 from './NewsFeedScreen2';

const Stack = StackNavigator({
  NewsFeed1: {
    screen: NewsFeedScreen1
  },
  NewsFeed2: {
    screen: NewsFeedScreen2
  },
});


export default class NewsFeedScreen extends Component {
  render() {
    return (
      <Stack ref={component => this.stackRef = component} />
    );
  }
}
