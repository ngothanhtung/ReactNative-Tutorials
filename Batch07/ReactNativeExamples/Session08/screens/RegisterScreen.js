import React from 'react';
import {View, Text, Button} from 'react-native';

const RegisterScreen = ({route, navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Register</Text>
      <Text>{route.params.message}</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

export default RegisterScreen;
