/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync } from '../actions';

export default function Login() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.authReducer.error);
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.authReducer.loading);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )}
      <Button
        title="Login"
        onPress={() => {
          dispatch(loginAsync('tungnt@softech.vn', '123456789'));
        }}
      />
    </View>
  );
}
