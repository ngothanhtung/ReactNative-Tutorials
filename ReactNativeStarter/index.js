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
import Complex from './screens/FlexLayout/Complex';

console.disableYellowBox = true;

AppRegistry.registerComponent('ReactNativeStarter', () => App);

// LOGIN SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreen);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV1);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV2);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV3);

// FLEX
// AppRegistry.registerComponent('ReactNativeStarter', () => FlexBasic);
// AppRegistry.registerComponent('ReactNativeStarter', () => Complex);

// PROPS AND STATE
// AppRegistry.registerComponent('ReactNativeStarter', () => PropsAndState);
// AppRegistry.registerComponent('ReactNativeStarter', () => ComponentExample);
// AppRegistry.registerComponent('ReactNativeStarter', () => StateExample);

// CORE COMPONENTS
// import ActionSheetScreen from './screens/CoreComponents/ActionSheetScreen';
// AppRegistry.registerComponent('ReactNativeStarter', () => ActionSheetScreen);

// import DatePickerIOSScreen from './screens/CoreComponents/IOS/DatePickerIOSScreen';
// AppRegistry.registerComponent('ReactNativeStarter', () => DatePickerIOSScreen);

// import PickerExamples from './screens/CoreComponents/Android/PickerExamples';
// AppRegistry.registerComponent('ReactNativeStarter', () => PickerExamples);

// REGISTER SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV1);
// AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreenV2);

// NAVIGATORS
// AppRegistry.registerComponent('ReactNativeStarter', () => MainStackNavigator);

// MODAL SCREENS
// AppRegistry.registerComponent('ReactNativeStarter', () => ModalScreen);

// CAMERA
//AppRegistry.registerComponent('ReactNativeStarter', () => CameraRollScreen);


