/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import Login from './session03/Login'
import Instagram from './session04/Instagram'
import FlexLayout from './session04/FlexLayout'
import FlexLayoutComplex from './session04/FlexLayoutComplex'
import HandlingTouches from './session05/HandlingTouches'
import ScrollViewComponent from './session05/ScrollViewComponent'
import NetworkingComponent from './session05/Networking'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => HandlingTouches);
