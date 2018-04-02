import React from 'react';
import { TabNavigator } from 'react-navigation';
import NewsFeedScreen from './NewsFeedScreen';
import GroupScreen from './GroupScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';


class MainTabNavigator extends React.Component {
  Tab = TabNavigator({
    NewsFeed: {
      screen: NewsFeedScreen
    },
    Group: {
      screen: GroupScreen
    },
    Chat: {
      screen: ChatScreen
    },
    Notification: {
      screen: NotificationScreen
    },
  });

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