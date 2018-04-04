import React from 'react';
import { StackNavigator } from "react-navigation";
import MoreScreen1 from './MoreScreen1';
import MoreScreen2 from './MoreScreen2';

const Stack = StackNavigator({
  More1: {
    screen: MoreScreen1
  },
  More2: {
    screen: MoreScreen2
  },
});

export default class MoreScreen extends React.Component {
  // https://reactnavigation.org/docs/navigators/navigation-options
  static navigationOptions = ({ navigation, screenProps }) => {
    return {      
      tabBarOnPress: ({ previousScene, scene, jumpToIndex }) => {
        screenProps.navigation.navigate("DrawerOpen");
      }
    };
  };

  componentWillReceiveProps(props) {    
    this.stackRef._navigation.navigate(props.screenProps.navigation.state.params.screenName);
  }

  render() {
    return (
      <Stack ref={component => this.stackRef = component} />
    );
  }
}
