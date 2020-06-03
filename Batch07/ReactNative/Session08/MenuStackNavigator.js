import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Octicon from 'react-native-vector-icons/Octicons';
import Menu1Screen from './screens/Menu1Screen';
import Menu2Screen from './screens/Menu2Screen';

const Stack = createStackNavigator();

const MenuStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <TouchableOpacity
              style={{marginRight: 12}}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Octicon name="three-bars" size={24} />
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen name="Menu1Screen" component={Menu1Screen} />
      <Stack.Screen name="Menu2Screen" component={Menu2Screen} />
    </Stack.Navigator>
  );
};

export default MenuStackNavigator;
