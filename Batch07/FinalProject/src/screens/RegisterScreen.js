import React from 'react';
import {View, Text, Button} from 'react-native';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Tab"
        onPress={() => {
          navigation.navigate('TabNavigator');
        }}
      />
    </View>
  );
};

export default RegisterScreen;
