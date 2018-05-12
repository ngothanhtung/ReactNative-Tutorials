import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerActions } from 'react-navigation';

export default class TabItemScreen1 extends Component {
  // https://reactnavigation.org/docs/navigators/navigation-options
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {        
        navigation.dispatch(DrawerActions.toggleDrawer());        
      }
    };
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'violet' }}>
        <Text>This is tab item 1</Text>
      </View>
    );
  }
}
