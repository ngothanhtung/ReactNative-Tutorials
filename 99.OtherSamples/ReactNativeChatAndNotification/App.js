import React from 'react';
import { StyleSheet, Button, TextInput, RefreshControl, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MyFlatlist from './MyFlatlist'
import firebase from 'react-native-firebase';
import MyBlock from './components/MyBlock';
import YourBlock from './components/YourBlock';

const ref = firebase.database().ref().child('messages');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: false,
      loading: false,
      messages: [],
    };
  }

  async componentDidMount() {
    ref.on('value', snapshot => {
      var items = snapshot.val();
      if (items != null) {
        var messages = [];
        for (const key in items) {
          messages.push(items[key]);
        }
        this.setState({
          messages: messages.sort((x, y) => {
            var valueX = x.createdTime;
            var valueY = y.createdTime;
            if (valueX < valueY) { return -1; }
            if (valueX > valueY) { return 1; }
            return 0;
          })
        });
        console.log(this.state.messages);
      }
    });
    // GET TOKEN
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('fcmToken', fcmToken);
          this.setState({ token: fcmToken });
        } else {
          // user doesn't have a device token yet
          console.log("user doesn't have a device token yet");
        }
      });

    // CHECK PERMISSION
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      console.log('Permission OK');
    } else {
      // user doesn't have permission
      console.log('Permission Not OK');
      // Request permissions
      try {
        await firebase.messaging().requestPermission();
        // User has authorised
      } catch (error) {
        // User has rejected permissions
      }
    }
    // DATA-ONLY
    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required
      console.log(message);
    });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('notificationDisplayedListener', notification);
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      console.log('notificationListener', notification);
    });

    // App in Foreground and background
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;

      console.log('notificationOpenedListener - action', action);
      console.log('notificationOpenedListener - notification', notification);
    });

    // App Closed
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      // App was opened by a notification
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;

      console.log('(App Closed) notificationOpen - action', action);
      console.log('(App Closed) notificationOpen - notification', notification);
    }
  }

  componentWillUnmount() {
    this.messageListener();

    this.notificationDisplayedListener();
    this.notificationListener();

    this.notificationOpenedListener();
  }

  renderItem({ item }) {
    const from = item.from;
    if (from === this.state.username) return (<MyBlock item={item} />);

    return (<YourBlock item={item} />);
  }

  sendMessage() {
    // LAY THOI GIAN HIEN TAI CUA SERVER
    const serverTime = firebase.database.ServerValue.TIMESTAMP;
    // A message entry.
    var message = {
      from: this.state.username,
      to: 'all',
      messageText: this.state.messageText,
      createdTime: serverTime
    };

    ref.push(message, (error) => {
      if (error) {
        console.log(error);
      }
    });
    // Send Notification
    fetch(' https://us-central1-aptech-batch03-final-project.cloudfunctions.net/sendToTopic', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: 'tungnt',
        title: 'Chat',
        body: this.state.messageText
      }),
    });

    this.setState({ messageText: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loginStatus &&
          <View>
            <View>
              <TextInput
                // clearButtonMode="always"
                style={{ height: 42, padding: 8, borderColor: '#dfe6e9', borderWidth: 0.75, borderRadius: 12 }}
                autoCorrect={false}
                value={this.state.username}
                placeholder="UserName"
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({ username: text })}
              />
            </View>
            <TouchableOpacity
              style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 6 }}
              onPress={() => {
                firebase.messaging().subscribeToTopic(this.state.username);
                this.setState({ loginStatus: true });
              }}
            >
              <Text>Send</Text>
            </TouchableOpacity>
          </View>
        }
        {
          this.state.loginStatus &&
          <View style={{ flex: 1 }}>
            <MyFlatlist
              ref={c => { this.flatList = c }}
              data={this.state.messages}
              renderItem={item => (this.renderItem(item))}
              keyExtractor={(item, index) => (index.toString())}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.loading}
                  onRefresh={() => {

                  }}
                />
              }
            />
            <View style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 12 }}>

              <View style={{ flex: 1, justifyContent: 'center' }}>

                <TextInput
                  // clearButtonMode="always"
                  style={{ height: 42, padding: 8, borderColor: '#dfe6e9', borderWidth: 0.75, borderRadius: 12 }}
                  autoCorrect={false}
                  returnKeyType="send"
                  value={this.state.messageText}
                  placeholder="Nhập nội dung trao đổi"
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => this.setState({ messageText: text })}
                  onSubmitEditing={() => {
                    this.sendMessage()
                  }}
                />

              </View>
              <TouchableOpacity
                style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 6 }}
                onPress={() => this.sendMessage()}
              >
                {/* <Icon name="send" size={32} color="#0984e3" /> */}
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
