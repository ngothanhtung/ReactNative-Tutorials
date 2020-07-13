/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../modules/auth/actions';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am worker</Text>
    </View>
  );
};

export default HomeScreen;
