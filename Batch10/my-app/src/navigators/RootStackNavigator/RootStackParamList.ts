import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthStackParamList } from '../AuthStackNavigator/AuthStackParamList';
import { OnboardingStackParamList } from '../OnboardingStackNavigator/OnboardingStackParamList';

export type RootStackParamList = {
  OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>;
  AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>;
};
