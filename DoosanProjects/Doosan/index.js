/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import StateSample from './Session03/StateSample';
import LifeCycleSample from './Session03/LifeCycleSample';
import HandlingTextInputSample from './Session03/HandlingTextInputSample';
import StyleSample from './Session03/StyleSample';
// import Login from './Session03/Login';
import Instagram from './Session03/Instagram/Instagram';
import StyleSheetSample from './Session04/StyleSheetSample';

import BasicNetworking from './Session05/Networking/BasicNetworking';
import Networking from './Session05/Networking/Networking';

import BasicScrollView from './Session05/ListView/BasicScrollView';
import ScrollViewExamples from './Session05/ListView/ScrollViewExamples';
import FlatListExamples from './Session05/ListView/FlatListExamples';
import SectionListExamples from './Session05/ListView/SectionListExamples';
import GalleryHomework from './Session05/Practices/GalleryHomework';
import Login from './Session05/Practices/Login';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => StyleSheetSample);
