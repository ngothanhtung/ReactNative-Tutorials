import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ShoppingCartContainer from '../../../../modules/ProductModule/containers/ShoppingCartContainer';
import ShoppingCartTotalContainer from '../../../../modules/ProductModule/containers/ShoppingCartTotalContainer';
import colors from '../../../../constants/colors';

class CheckOutScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ShoppingCartContainer />
        <ShoppingCartTotalContainer />
      </View>
    );
  }
}


const CheckOutStackNavigator = createStackNavigator(
  {
    CheckOutScreen: {
      screen: CheckOutScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Check Out',
      })
    }
  },
  {
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: { backgroundColor: colors.purpleColor },
      headerTintColor: colors.lightColor
    }
  }
);

export default CheckOutStackNavigator;
