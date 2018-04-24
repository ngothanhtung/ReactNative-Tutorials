import { AppRegistry } from 'react-native';
import App from './App';
import LoginScreenV1 from './screens/LoginScreenV1';
import LoginScreenV2 from './screens/LoginScreenV2';
import LoginScreenV3 from './screens/LoginScreenV3';
import FlexBasic from './screens/FlexLayout/Basic';
import RegisterScreenV1 from './screens/RegisterScreenV1';
import RegisterScreenV2 from './screens/RegisterScreenV2';

import ModalScreen from './screens/ModalScreen';
import CameraRollScreen from './screens/CameraRollScreen';
import PropsAndState from './screens/PropsAndState';
import MainStackNavigator from './navigators/MainStackNavigator';

import ComponentExample from './screens/ComponentExample';
import StateExample from './screens/StateExample';
import LoginScreen from './screens/LoginScreen';

console.disableYellowBox = true;

//AppRegistry.registerComponent('ReactNativeStarter', () => App);
//AppRegistry.registerComponent('ReactNativeStarter', () => FlexBasic);
//AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV1);
//AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV2);
//AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV3);
//AppRegistry.registerComponent('ReactNativeStarter', () => FlexBasic);

//AppRegistry.registerComponent('ReactNativeStarter', () => ComponentExample);
//AppRegistry.registerComponent('ReactNativeStarter', () => StateExample);
AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreen);

//AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV1);
//AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV2);
//AppRegistry.registerComponent('ReactNativeStarter', () => ModalScreen);
//AppRegistry.registerComponent('ReactNativeStarter', () => CameraRollScreen);
//AppRegistry.registerComponent('ReactNativeStarter', () => PropsAndState);
//AppRegistry.registerComponent('ReactNativeStarter', () => MainStackNavigator);
