import { AppRegistry } from 'react-native';
import App from './App';
import bgMessaging from './src/bgMessaging'; // <-- Import the file you created in (2)

import FilestoreScreen from './src/FilestoreScreen';
import NotificationScreen from './src/NotificationScreen';
AppRegistry.registerComponent('reactnativefirebaseexamples', () => NotificationScreen);


// New task registration
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line
