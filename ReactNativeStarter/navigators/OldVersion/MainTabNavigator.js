import React from 'react';
import { Icon } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import NewsFeedScreen from './NewsFeedScreen';
import GroupScreen from './GroupScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import MoreScreen from './MoreScreen';
import TabItemScreen1 from './TabItemScreen1';
import TabItemScreen2 from './TabItemScreen2';


class MainTabNavigator extends React.Component {
  Tab = createBottomTabNavigator({
    TabItem1: {
      screen: TabItemScreen1,
      navigationOptions: {
        title: 'Tab 1',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#ffffff' }} />)
      },
    },
    TabItem2: {
      screen: TabItemScreen2,
      navigationOptions: {
        title: 'Tab 1',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#ffffff' }} />)
      },
    },
    // NewsFeed: {
    //   screen: NewsFeedScreen,
    //   navigationOptions: {
    //     title: 'News Feed',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: '#ffffff' }} />)
    //   },
    // },
    // Group: {
    //   screen: GroupScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name={focused ? 'ios-people' : 'ios-people-outline'} size={26} style={{ color: '#ffffff' }} />)
    //   },
    // },
    // Chat: {
    //   screen: ChatScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'} size={26} style={{ color: '#ffffff' }} />)
    //   },
    // },
    // Notification: {
    //   screen: NotificationScreen,
    //   navigationOptions: {
    //     title: 'Notifications',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name={focused ? 'ios-notifications' : 'ios-notifications-outline'} size={26} style={{ color: '#ffffff' }} />)
    //   },
    // },
    // More: {
    //   screen: MoreScreen,
    //   navigationOptions: {
    //     title: 'More',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name={focused ? 'ios-menu' : 'ios-menu-outline'} size={26} style={{ color: '#ffffff' }} />)
    //   },
    // }
  }, {
      //tabBarComponent: TabBarBottom,
      tabBarOptions: {
        showIcon: true,
        showLabel: true,

        labelStyle: {
          color: '#ffffff',
        },
        style: {
          backgroundColor: '#2d3436'
        }
      },
      tabBarPosition: 'bottom',
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
      <this.Tab ref={component => this.tabRef = component} screenProps={{ navigation: this.props.navigation }} />
    );
  }
}

export default MainTabNavigator;