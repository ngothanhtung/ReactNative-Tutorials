import { AppRegistry } from 'react-native';
import App from './App';
import TodosScreen from './src/screens/Firestore/TodosScreen';
import AuthWithEmailAndPasswordScreen from './src/screens/Auth/AuthWithEmailAndPasswordScreen';
import AuthWithPhoneNumberScreen from './src/screens/Auth/AuthWithPhoneNumberScreen';
import UploadImageScreen from './src/screens/Storage/UploadImageScreen';

//AppRegistry.registerComponent('reactnativefirebase', () => App);

// AUTH
// AppRegistry.registerComponent('reactnativefirebase', () => AuthWithEmailAndPasswordScreen);
AppRegistry.registerComponent('reactnativefirebase', () => AuthWithPhoneNumberScreen);

// STORAGE
// AppRegistry.registerComponent('reactnativefirebase', () => UploadImageScreen);
