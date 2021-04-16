import { AppRegistry } from 'react-native';
import CodePushScreen from './CodePushScreen';
import { name as appName } from './src/app/app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => CodePushScreen);
