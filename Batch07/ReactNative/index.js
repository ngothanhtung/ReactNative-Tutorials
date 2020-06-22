/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import FlexLayoutExample from './FlexLayoutExample';
import Login from './Login';
import ImageExample from './ImageExample';
import ImageBackgroundExample from './ImageBackgroundExample';
import SvgExample from './SvgExample';
import InstagramExample from './InstagramExample';
import ScrollViewExample from './Session05/ScrollViewExample';
import FlatListExample from './Session05/FlatListExample';
import SectionListExample from './Session05/SectionListExample';
import SectionListAdvancedExample from './Session05/SectionListAdvancedExample';
import NetworkingExample from './Session06/NetworkingExample';
import GalleryHomework from './Session06/GalleryHomework';
import Users from './Session06/Users';
import Login_Session6 from './Session06/Login';
import Example01 from './Session07/Example01';
import Example02 from './Session07/Example02';
import Example03 from './Session07/Example03';
import Example04 from './Session07/Example04';

import LoginWithHook from './Session07/LoginWithHook';
import StackNavigatorExample from './Session08/StackNavigatorExample';
import TabNavigatorExample from './Session08/TabNavigatorExample';
import MaterialBottomNavigatorExample from './Session08/MaterialBottomNavigatorExample';
// import AppNavigator from './Session08/AppNavigator';
import DrawerNavigatorExample from './Session08/DrawerNavigatorExample';
import AppNavigator from './Session08-Practice/AppNavigator';
import AsyncStorageExample from './Session09/AsyncStorageExample';
import CallbackExample from './Session10/CallbackExample';
import FormExample from './Session10/FormExample';
import FormikExample from './Session10/FormikExample';
import FirestoreExample from './Session11/FirestoreExample';
import FirestoreRealtimeExample from './Session11/FirestoreRealtimeExample';
import ChatExample from './Session11/ChatExample';
import StorageUploadImageExample from './Session11/StorageUploadImageExample';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StorageUploadImageExample);
