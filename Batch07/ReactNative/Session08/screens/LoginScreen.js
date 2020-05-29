import React from 'react';
import {View, Text, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Login</Text>
      <Button
        title="Go to Register"
        onPress={() => {
          navigation.navigate('RegisterScreen', {message: 'I am from Login'});
        }}
      />
    </View>
  );
};

export default LoginScreen;
