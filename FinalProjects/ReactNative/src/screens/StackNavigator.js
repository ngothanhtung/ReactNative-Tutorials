import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation'
import LoginScreen from './StackScreens/LoginScreen'
import RegisterScreen from './StackScreens/RegisterScreen'

const routeConfigs = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'LOGIN SCREEN',
      // header: () => {
      //   return (
      //     <SafeAreaView>
      //       <View style={{ height: 40, backgroundColor: 'red' }}>
      //         <Text>My Header</Text>
      //       </View>
      //     </SafeAreaView>
      //   )
      // }
    }),
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'REGISTER',
    }),
  }
};
const stackNavigatorConfig = {
  initialRouteName: 'LoginScreen',
  initialRouteParams: { message: 'Hello' },
  mode: 'modal', // default: 'card'
  headerMode: 'screen', // 'none', 'float', default 'screen'
  headerTransitionPreset: 'fade-in-place',
  headerBackTitleVisible: true,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#B53471',
    }
  }
};

const StackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

class MyStack extends Component {
  render() {
    return (<StackNavigator screenProps={{ username: 'admin' }} />);
  }
}
export default StackNavigator;
// export default MyStack;