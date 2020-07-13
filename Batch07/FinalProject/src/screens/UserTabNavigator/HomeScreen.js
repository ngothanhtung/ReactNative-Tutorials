/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {signOutAction} from '../../modules/auth/actions';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Sign out"
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              dispatch(signOutAction());
            });
        }}
      />
    </View>
  );
};

export default HomeScreen;
