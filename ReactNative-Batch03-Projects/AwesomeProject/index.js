/** @format */

import { AppRegistry } from 'react-native';
import App from './src/App';
import StyleExample from './src/StyleExample';
import StyleExample2 from './src/StyleExample2';
import HandlingTextInput from './src/HandlingTextInput';
import FlexLayoutExamples from './src/FlexLayoutExamples';
import PostScreen from './src/components/PostScreen';
import PhotoScreen from './src/components/PhotoScreen';
import StackNavigator from './src/navigators/StackNavigator';
import TabNavigator from './src/navigators/TabNavigator';
import SwitchNavigator from './src/navigators/SwitchNavigator';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => SwitchNavigator);
