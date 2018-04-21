import { AppRegistry } from 'react-native';
import App from './App';
import TodosScreen from './src/screens/Firestore/TodosScreen';
import AuthScreen from './src/screens/Auth/AuthScreen';
import AuthWithPhoneNumberScreen from './src/screens/Auth/AuthWithPhoneNumberScreen';

//AppRegistry.registerComponent('reactnativefirebase', () => App);
AppRegistry.registerComponent('reactnativefirebase', () => AuthWithPhoneNumberScreen);
