import { View, Text, Button } from 'react-native';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff9ff3' }}>
      <Text>Home</Text>
      <Button
        title='Go to Login Screen'
        onPress={() => {
          props.navigation.navigate('Login', { name: 'Aptech', score: 10 });
        }}
      />

      <Button
        title='Go to ViewDetails of Profile'
        onPress={() => {
          props.navigation.navigate('Profile', {
            screen: 'ViewDetails',
            params: {
              price: 200,
            },
          });
        }}
      />
    </View>
  );
};

export default Home;
