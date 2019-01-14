/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import Login from './session03/Login'
import Instagram from './session04/Instagram'
import FlexLayout from './session04/FlexLayout'
import FlexLayoutComplex from './session04/FlexLayoutComplex'
import HandleEvent from './session05/HandleEvent'
import ScrollViewComponent from './session05/ScrollViewComponent'
import SectionListExamples from './session05/SectionListExamples'
import SectionListAdvancedExamples from './session05/SectionListAdvancedExamples'
import NetworkingComponent from './session05/Networking'
import NetworkingAxiosExamples from './session05/NetworkingAxiosExamples'
import NetworkingMoreExamples from './session05/NetworkingMoreExamples'
import GalleryHomework from './session05/GalleryHomework'
import ReactNavigatorExamples from './session06'
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => ReactNavigatorExamples);
