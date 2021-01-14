import React, { Component } from 'react';
import { Alert, Text, View, TextInput, StyleSheet } from 'react-native';
import OneSignal from 'react-native-onesignal';

export default class NewOneSignalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      isSubscribed: false,
      requiresPrivacyConsent: false,
      isLocationShared: false,
      inputValue: '',
      consoleValue: '',
    };
  }

  async componentDidMount() {
    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId('aebf6ce6-800b-4adf-9d08-55c893347bb8');

    OneSignal.getDeviceState().then((deviceState) => {
      console.log(deviceState);
    });
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(this.state.requiresPrivacyConsent);
    OneSignal.promptForPushNotificationsWithUserResponse((response) => {
      this.OSLog('Prompt response:', response);
    });

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler((notifReceivedEvent) => {
      this.OSLog('OneSignal: notification will show in foreground:', notifReceivedEvent);
      let notif = notifReceivedEvent.getNotification();

      const button1 = {
        text: 'Cancel',
        onPress: () => {
          notifReceivedEvent.complete();
        },
        style: 'cancel',
      };

      const button2 = {
        text: 'Complete',
        onPress: () => {
          notifReceivedEvent.complete(notif);
        },
      };

      Alert.alert('Complete notification?', 'Test', [button1, button2], { cancelable: true });
    });
    OneSignal.setNotificationOpenedHandler((notification) => {
      this.OSLog('OneSignal: notification opened:', notification);
    });
    OneSignal.setInAppMessageClickHandler((event) => {
      this.OSLog('OneSignal IAM clicked:', event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
      this.OSLog('OneSignal: email subscription changed: ', event);
    });
    OneSignal.addSubscriptionObserver((event) => {
      this.OSLog('OneSignal: subscription changed:', event);
      this.setState({ isSubscribed: event.to.isSubscribed });
    });
    OneSignal.addPermissionObserver((event) => {
      this.OSLog('OneSignal: permission changed:', event);
    });

    const deviceState = await OneSignal.getDeviceState();

    this.setState({
      isSubscribed: deviceState.isSubscribed,
    });
  }

  componentWillUnmount() {
    OneSignal.clearHandlers();
  }

  OSLog = (message, optionalArg) => {
    if (optionalArg) {
      message = message + JSON.stringify(optionalArg);
    }

    console.log(message);

    let consoleValue;

    if (this.state.consoleValue) {
      consoleValue = this.state.consoleValue + '\n' + message;
    } else {
      consoleValue = message;
    }
    this.setState({ consoleValue });
  };

  inputChange = (text) => {
    this.setState({ inputValue: text });
  };

  render() {
    const subscribeFields = {
      isSubscribed: this.state.isSubscribed,
    };

    return (
      <View style={styles.root}>
        <Text style={styles.title}>OneSignal</Text>

        <TextInput style={styles.input} placeholder="Input" onChangeText={this.inputChange} />
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    width: 300,
    margin: 10,
  },
});
