import { NavigatorScreenParams } from '@react-navigation/native';

import { AuthStackParamList } from '../AuthStackNavigator/AuthStackParamList';
import { OnboardingStackParamList } from '../OnboardingStackNavigator/OnboardingStackParamList';
import { WorkspaceStackParamList } from '../WorkspaceStackNavigator/WorkspaceStackParamList';
import { ChatStackParamList } from '../ChatStackNavigator/ChatStackParamList';

export type RootStackParamList = {
  OnboardingStackNavigator: NavigatorScreenParams<OnboardingStackParamList>;
  AuthStackNavigator: NavigatorScreenParams<AuthStackParamList>;
  WorkspaceStackNavigator: NavigatorScreenParams<WorkspaceStackParamList>;
  ChatStackNavigator: NavigatorScreenParams<ChatStackParamList>;
};
