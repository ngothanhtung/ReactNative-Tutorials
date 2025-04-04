import React from 'react';
import { Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import CreateCategoryScreen from './screens/CreateCategoryScreen';
import LoginScreen from './screens/LoginScreen';
import UpdateCategoryScreen from './screens/UpdateCategoryScreen';

const Stack = createNativeStackNavigator();

type Props = {};

const StackNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          title: 'Danh sách danh mục',
          headerShown: true,
          headerRight: () => (
            <Button title="Tạo mới" onPress={() => navigation.navigate('CreateCategory')} />
          ),
        })}
      />
      <Stack.Screen
        name="CreateCategory"
        component={CreateCategoryScreen}
        options={{
          title: 'Tạo mới danh mục',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="UpdateCategory"
        component={UpdateCategoryScreen}
        options={{
          title: 'Cập nhật danh mục',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
