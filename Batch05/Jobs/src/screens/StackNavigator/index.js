// https://reactnavigation.org/docs/en/hello-react-navigation.html
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const RouteConfigs = {
  // RouteName:
  LoginScreen: {
    screen: LoginScreen, // Component
    navigationOptions: () => ({
      title: 'Đăng nhập',
    }),
  },

  RegisterScreen: {
    screen: RegisterScreen, // Component
    navigationOptions: () => ({
      title: 'Đăng ký',
    }),
  },
};

// Settings
const StackNavigatorConfig = {
  // Chỉ định màn hình đầu tiên xuất hiện, mặc định nếu khong có thì sẽ lấy cái thứ 1.
  initialRouteName: 'LoginScreen',
  initialRouteParams: { message: 'Hello' },
  // Các option áp dụng chung cho tất cả các màn hình trong StackNavigation
  defaultNavigationOptions: ({ navigation }) => ({
    // header: null,
    headerStyle: {
      // backgroundColor: '#192a56',
    },
    headerTitleStyle: {
      // color: 'white',
    },
    // headerTintColor: 'yellow',
    // headerBackTitleStyle: { color: 'white' },
    // headerTransparent: true,
    // headerBackgroundTransitionPreset: 'fade',
    headerRight: (
      <TouchableOpacity
        style={{ paddingHorizontal: 8 }}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Icon name='menu' size={24} />
      </TouchableOpacity>
    ),
  }),
};

const StackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);
export default StackNavigator;
