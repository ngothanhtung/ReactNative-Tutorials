import { View, Text, Platform, SafeAreaView, Button } from 'react-native';
import React from 'react';

// OneSignal
import OneSignal from 'react-native-onesignal';
import Constants from 'expo-constants';
OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export default function Session12() {
  React.useEffect(() => {
    OneSignal.getDeviceState().then((deviceState) => {
      console.log(deviceState);
    });
  }, []);

  OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    console.log('Prompt response:', response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler((notificationReceivedEvent) => {
    console.log('OneSignal: notification will show in foreground:', notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log('notification: ', notification);
    const data = notification.additionalData;
    console.log('additionalData: ', data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler((notification) => {
    console.log('OneSignal: notification opened:', notification);
  });

  return (
    <SafeAreaView>
      <Text>Session12</Text>
      <Button
        title='Send'
        onPress={() => {
          const message = {
            app_id: '590a207e-e23b-490b-a18d-8c337fb3f801',
            include_player_ids: ['fe103930-d91e-47e0-b438-3dee5ef88664'],
            // "included_segments": [""],
            large_icon: 'ic_action_cloud_upload',
            android_group: 'group-2',
            android_group_message: {
              en: 'You have $[notif_count] new messages',
            },
            // "collapse_id": "100",
            thread_id: '100480',
            summary_arg_count: 2,
            summary_arg: '12 more notifications from John Doe',
            data: {
              foo: 'bar',
            },
            headings: {
              en: 'Mobile Heading',
            },
            contents: {
              en: 'Nội dung thông báo',
            },
            big_picture: 'https://images.unsplash.com/photo-1571713343936-b27b7bedddab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            ios_attachments: {
              id1: 'https://images.unsplash.com/photo-1571713343936-b27b7bedddab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
            },
            ios_badgeCount: '1',
            ios_badgeType: 'Increase',
            buttons: [
              {
                id: 'id1',
                text: 'first button',
                icon: 'ic_menu_share',
              },
              {
                id: 'id2',
                text: 'second button',
                icon: 'ic_menu_send',
              },
            ],
          };

          const jsonString = JSON.stringify(message);

          OneSignal.postNotification(
            jsonString,
            (success) => {
              console.log('Success:', success);
            },
            (error) => {
              console.log('Error:', error);
            },
          );
        }}
      />
    </SafeAreaView>
  );
}
