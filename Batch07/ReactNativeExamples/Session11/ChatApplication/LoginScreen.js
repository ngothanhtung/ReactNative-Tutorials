/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [userName, setUserName] = React.useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 24}}>
      <TextInput
        mode="contained"
        placeholder="Enter your username"
        autoCapitalize="none"
        autoCorrect={false}
        value={userName}
        onChangeText={(text) => {
          setUserName(text);
        }}
      />
      <View style={{height: 12}} />
      <Button
        mode="contained"
        contentStyle={{height: 48}}
        onPress={() => {
          navigation.navigate('ChatScreen', {userName: userName});
        }}>
        Login
      </Button>
    </View>
  );
}
