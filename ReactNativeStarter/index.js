import { AppRegistry } from 'react-native';
import App from './App';
import LoginScreenV1 from './screens/LoginScreenV1';
import LoginScreenV2 from './screens/LoginScreenV2';


import FlexBasic from './screens/FlexLayout/Basic';

import RegisterScreen from './screens/RegisterScreen';

import ModalScreen from './screens/ModalScreen';

//AppRegistry.registerComponent('ReactNativeStarter', () => App);
//AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV1);
// AppRegistry.registerComponent('ReactNativeStarter', () => LoginScreenV2);
//AppRegistry.registerComponent('ReactNativeStarter', () => FlexBasic);
AppRegistry.registerComponent('ReactNativeStarter', () => RegisterScreen);
//AppRegistry.registerComponent('ReactNativeStarter', () => ModalScreen);
