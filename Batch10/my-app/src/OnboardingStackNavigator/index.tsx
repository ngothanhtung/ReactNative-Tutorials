import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding1Screen from './screens/Onboarding1Screen';
import Onboarding2Screen from './screens/Onboarding2Screen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

type Props = {};

const OnboardingStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Onboarding1' component={Onboarding1Screen} />
      <Stack.Screen name='Onboarding2' component={Onboarding2Screen} />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
