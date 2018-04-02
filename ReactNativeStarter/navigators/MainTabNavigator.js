import React from 'react';
import { Icon } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';
import NewsFeedScreen from './NewsFeedScreen';
import GroupScreen from './GroupScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';


class MainTabNavigator extends React.Component {
  Tab = TabNavigator({
    NewsFeed: {
      screen: NewsFeedScreen,
      navigationOptions: {                
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
    },
    Group: {
      screen: GroupScreen
    },
    Chat: {
      screen: ChatScreen
    },
    Notification: {
      screen: NotificationScreen
    }
  }, {
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        labelStyle: {
          color: '#2d3436',
        },
      },
      swipeEnabled: true,
    }
  );

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <this.Tab />
    );
  }
}

export default MainTabNavigator;