import React from 'react';
import { Icon } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';
import NewsFeedScreen from './NewsFeedScreen';
import GroupScreen from './GroupScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import MoreScreen from './MoreScreen';


class MainTabNavigator extends React.Component {
  Tab = TabNavigator({
    NewsFeed: {
      screen: NewsFeedScreen,
      navigationOptions: {
        title: 'News Feed',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
    },
    Group: {
      screen: GroupScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-people' : 'ios-people-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        title: 'Notifications',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-notifications' : 'ios-notifications-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        title: 'More',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-menu' : 'ios-menu-outline'} size={26} style={{ color: '#2d3436' }} />)
      },
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

	componentWillReceiveProps(props) {
    console.log(props);
		this.tabRef._navigation.navigate("More");
	}

  render() {
    return (
      <this.Tab ref={component => this.tabRef = component} screenProps={{ navigation: this.props.navigation }}/>
    );
  }
}

export default MainTabNavigator;