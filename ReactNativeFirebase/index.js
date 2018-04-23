import { AppRegistry } from 'react-native';
import App from './App';
import TodosScreen from './src/screens/Firestore/TodosScreen';
import AuthWithEmailAndPasswordScreen from './src/screens/Auth/AuthWithEmailAndPasswordScreen';
import AuthWithPhoneNumberScreen from './src/screens/Auth/AuthWithPhoneNumberScreen';

//AppRegistry.registerComponent('reactnativefirebase', () => App);
//AppRegistry.registerComponent('reactnativefirebase', () => AuthWithEmailAndPasswordScreen);
AppRegistry.registerComponent('reactnativefirebase', () => AuthWithPhoneNumberScreen);
