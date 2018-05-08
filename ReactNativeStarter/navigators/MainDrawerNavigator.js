import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import CreateAccountScreen1 from './CreateAccountScreen1';
import CreateAccountScreen2 from './CreateAccountScreen2';
import LoginScreen1 from './LoginScreen1';
import LoginScreen2 from './LoginScreen2';

import MainTabNavigator from './MainTabNavigator';
import styles from './styles';
class MainDrawerNavigator extends React.Component {
  static navigationOptions = () => ({
    header: null
  })

  Drawer = createDrawerNavigator({
    Tab: {
      screen: MainTabNavigator
    }
  }, {
      contentComponent: (props) => {
        console.log(props);
        return (
          <View style={styles.container}>
            <View style={styles.topContainer}>

            </View>
            <View style={styles.middleContainer}>
              <View>
                <TouchableOpacity onPress={() => {
                  props.navigation.navigate('DrawerClose');
                  // this.setState({ screenName: 'More1' });
                  props.navigation.navigate('Tab', { screenName: 'More1' })
                }}>
                  <Text>More 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  props.navigation.navigate('DrawerClose');
                  // this.setState({ screenName: 'More2' });
                  props.navigation.navigate('Tab', { screenName: 'More2' })
                }}>
                  <Text>More 2</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomContainer}>
            </View>
          </View>
        );
      }
    });

  constructor(props) {
    super(props);
    this.state = {
      navigatingScreen: ''
    }
  }

  render() {
    return (
      <this.Drawer screenProps={{ screenName: this.state.screenName }} />
    );
  }
}

export default MainDrawerNavigator;