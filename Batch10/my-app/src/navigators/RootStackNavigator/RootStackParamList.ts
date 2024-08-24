import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthStackParamList } from '../AuthStackNavigator/AuthStackParamList';
import { OnboardingStackParamList } from '../OnboardingStackNavigator/OnboardingStackParamList';
import { WorkspaceStackParamList } from '../WorkspaceStackNavigator/WorkspaceStackParamList';

export type RootStackParamList = {
  OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>;
  AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>;
  WorkspaceStackNavigator: NavigatorScreenParams<WorkspaceStackParamList>;
};
