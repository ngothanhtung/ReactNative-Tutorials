import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

import logo from './assets/images/logo.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef5350',
  },

  topContainer: {
    height: 40,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },

  friendContainer: {
    height: 64,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },

  authorContainer: {
    height: 48,
    backgroundColor: '#ffc107',
  },

  postContainer: {
    height: 400,
    backgroundColor: '#ffffff',
  },

  buttonContainer: {
    height: 64,
    backgroundColor: '#673ab7',
  },

  infoContainer: {
    height: 64,
    backgroundColor: '#ffeb3b',
  },
});

class TopContainer extends Component {
  render() {
    return (
      <View style={styles.topContainer}>
        <View
          style={{
            //   backgroundColor: 'red',
            height: '100%',
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MCIcon name="camera" size={24} />
        </View>
        <View
          style={{
            //   backgroundColor: 'green',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={logo} />
        </View>
        <View
          style={{
            //   backgroundColor: 'blue',
            height: '100%',
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FAIcon name="send" size={24} />
        </View>
      </View>
    );
  }
}

class Avatar extends Component {
  render() {
    return (
      <View
        style={{
          height: 64,
          width: 64,
          marginHorizontal: 8,
          borderRadius: 32,
          borderWidth: 2,
          borderColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="cover"
          source={{
            uri: this.props.avatarUrl,
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
        />
      </View>
    );
  }
}

class FriendContainer extends Component {
  render() {
    return (
      <View style={styles.friendContainer}>
        <Avatar avatarUrl="https://randomuser.me/api/portraits/men/40.jpg" />
        <Avatar avatarUrl="https://randomuser.me/api/portraits/men/41.jpg" />
        <Avatar avatarUrl="https://randomuser.me/api/portraits/men/42.jpg" />
        <Avatar avatarUrl="https://randomuser.me/api/portraits/women/11.jpg" />
        <Avatar avatarUrl="https://randomuser.me/api/portraits/women/12.jpg" />
      </View>
    );
  }
}

export default class InstagramExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopContainer />

        <FriendContainer />

        <View style={styles.authorContainer}></View>

        <View style={styles.postContainer}></View>

        <View style={styles.buttonContainer}></View>

        <View style={styles.infoContainer}></View>
      </View>
    );
  }
}
