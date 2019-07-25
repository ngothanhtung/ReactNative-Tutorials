import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import NavigationService from '../services/NavigationService';
import firebase from 'react-native-firebase';
import SwitchNavigator from './SwitchNavigator';

const AppContainer = createAppContainer(SwitchNavigator);

function getActiveRouteName(navigationState) {
	if (!navigationState) {
		return null;
	}
	const route = navigationState.routes[navigationState.index];
	// dive into nested navigators
	if (route.routes) {
		return getActiveRouteName(route);
	}
	return route.routeName;
}

class AppNavigator extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.currentScreen = '';
	}

	render() {
		return (
			<AppContainer
				onNavigationStateChange={(prevState, newState, action) => {
					const currentScreen = getActiveRouteName(newState);
					const prevScreen = getActiveRouteName(prevState);
					if (prevScreen !== currentScreen) {
						this.currentScreen = currentScreen;
						console.log('SCREEN', currentScreen);
					}
				}}
				ref={(navigatorRef) => {
					NavigationService.setTopLevelNavigator(navigatorRef);
				}}
			/>
		);
	}

	checkMessagingPermission() {
		// CHECK PERMISSION
		firebase
			.messaging()
			.hasPermission()
			.then((enabled) => {
				if (enabled) {
					// user has permissions
					console.log('hasPermission', enabled);
				} else {
					// user doesn't have permission
					// REQUEST PERMISSION
					firebase
						.messaging()
						.requestPermission()
						.then(() => {
							// User has authorised
							console.log('User has authorised');
						})
						.catch((error) => {
							// User has rejected permissions
							console.log('requestPermission', error);
						});
				}
			});
	}

	getMessagingToken() {
		firebase
			.messaging()
			.getToken()
			.then((fcmToken) => {
				if (fcmToken) {
					// user has a device token
					console.log('Firebase Notification Token: ', fcmToken);
				} else {
					// user doesn't have a device token yet
				}
			});
	}

	componentDidMount() {
		// CHECK PERMISSION
		this.checkMessagingPermission();
		// GET TOKEN
		this.getMessagingToken();

		// DEFAULT CHANNEL
		const channel = new firebase.notifications.Android.Channel('default', 'Default Channel', firebase.notifications.Android.Importance.Max);
		channel.setDescription('Default Notification Channel');
		// Create the channel
		firebase.notifications().android.createChannel(channel);
		// ----------------------------------------------------------------------------------------------------------------
		// NOTIFICATION EVENTS
		// ----------------------------------------------------------------------------------------------------------------
		// data-only messages from FCM
		// https://rnfirebase.io/docs/v4.2.x/messaging/receiving-messages
		// A message will trigger the onMessage listener when the application receives a message in the foreground.
		this.messageListener = firebase.messaging().onMessage((message) => {
			// Process your message as required
			console.log('onMessage', message);
		});

		// ----------------------------------------------------------------------------------------------------------------
		// LOCAL NOTIFICATION: FOREGROUND
		// Khi app ở chế độ mở, đang dùng
		// ----------------------------------------------------------------------------------------------------------------
		this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
			// Process your notification as required
			// ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
			if (Platform.OS === 'android') {
				notification.android.setChannelId('default');
			}

			console.log('onNotificationDisplayed', notification);
		});

		// ----------------------------------------------------------------------------------------------------------------
		// APP FOREGROUND / REMOTE / SCHEDULE NOTIFICATION
		// ----------------------------------------------------------------------------------------------------------------
		this.notificationListener = firebase.notifications().onNotification((notification) => {
			console.log('onNotification', notification);
			// show message
			// NotificationService.display(notification.title, notification.body, notification.data);
		});

		// ----------------------------------------------------------------------------------------------------------------
		// APP FOREGROUND / BACKGROUND / LOCAL / REMOTE
		// Khi APP đang ở chế độ nền => CLICK TO MESSAGE
		// ----------------------------------------------------------------------------------------------------------------
		this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
			// Get the action triggered by the notification being opened
			const action = notificationOpen.action;
			console.log('onNotificationOpened - action', action);
			// Get information about the notification that was opened

			// NOTIFICATION COUNT
			const notification = notificationOpen.notification;
			console.log('onNotificationOpened - notification', notification);
		});

		// ----------------------------------------------------------------------------------------------------------------
		// APP is CLOSED / KILLED
		// khi app ở chế độ đóng.
		// ----------------------------------------------------------------------------------------------------------------
		firebase
			.notifications()
			.getInitialNotification()
			.then(async (notificationOpen) => {
				if (notificationOpen) {
					// App was opened by a notification
					// Get the action triggered by the notification being opened
					const action = notificationOpen.action;
					console.log('getInitialNotification - action', action);
					// Get information about the notification that was opened

					// NOTIFICATION COUNT
					const notification = notificationOpen.notification;
					console.log('getInitialNotification - notification', notification);
				}
			});
	}
}

export default AppNavigator;
