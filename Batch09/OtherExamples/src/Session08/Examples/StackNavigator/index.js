import React from 'react';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const LeftIcon = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <TouchableRipple
      onPress={() => {
        navigation.goBack();
      }}
      borderless={true}
      style={{ height: 42, width: 42, borderRadius: 21, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}
      rippleColor='#00000040'
    >
      <Icon name='arrow-left' size={24} color={tintColor} />
    </TouchableRipple>
  );
};

const RightIcon = ({ tintColor }) => {
  return (
    <TouchableRipple onPress={() => {}} borderless={true} style={{ height: 42, width: 42, borderRadius: 21, justifyContent: 'center', alignItems: 'center', marginRight: 5 }} rippleColor='#00000040'>
      <Icon name='sliders' size={24} color={tintColor} />
    </TouchableRipple>
  );
};

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerMode: 'screen' }}>
      <Stack.Screen name='Login' component={LoginScreen} options={{ title: 'Đăng nhập', headerShown: true }} />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
        options={{
          // headerTitleAlign: 'left',
          title: 'Đăng ký tài khoản',
          // headerTitleStyle: { color: 'red' },
          // headerStyle: { backgroundColor: 'green' },
          // headerTintColor: 'yellow',
          headerLeft: LeftIcon,
          headerRight: RightIcon,
        }}
      />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} options={{ title: 'Quên mật khẩu' }} />
    </Stack.Navigator>
  );
}
