import { View, Text } from 'react-native';
import React from 'react';
import BackButton from './components/BackButton';

type Props = {};

const Login = (props: Props) => {
  const { name, score } = props.route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#48dbfb' }}>
      <Text>Login</Text>
      <Text>Name: {name}</Text>
      <Text>Score: {score}</Text>

      <BackButton />
    </View>
  );
};

export default Login;
