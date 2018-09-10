/** @format */

import { AppRegistry } from 'react-native';
import App from './src/App';
import StyleExample from './src/StyleExample';
import StyleExample2 from './src/StyleExample2';
import HandlingTextInput from './src/HandlingTextInput';
import FlexLayoutExamples from './src/FlexLayoutExamples';
import Login from './src/Login';
import PostScreen from './src/components/PostScreen';
import PhotoScreen from './src/components/PhotoScreen';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => PhotoScreen);
