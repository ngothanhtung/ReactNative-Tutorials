import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync } from '../actions';

export default function Login() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.authReducer.error);
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.authReducer.loading);

  return (
    <View>
      <Button
        title="Login"
        onPress={() => {
          dispatch(loginAsync('username', 'password'));
        }}
      />
    </View>
  );
}
