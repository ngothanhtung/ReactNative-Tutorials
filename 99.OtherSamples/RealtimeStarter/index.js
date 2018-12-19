import { AppRegistry } from 'react-native';
import PusherExample from './src/PusherExample';
import SocketClientExample from './src/SocketClientExample';

console.disableYellowBox = true;
AppRegistry.registerComponent('RealtimeStarter', () => SocketClientExample);
