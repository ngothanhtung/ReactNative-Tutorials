import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './src/app/app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
