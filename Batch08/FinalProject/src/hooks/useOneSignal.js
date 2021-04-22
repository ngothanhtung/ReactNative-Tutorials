import AsyncStorage from '@react-native-community/async-storage';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
/* eslint-disable no-console */
import React from 'react';

export default () => {
  const onOpened = (openResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = (device) => {
    AsyncStorage.setItem('OneSignal', JSON.stringify(device));
  };

  const onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  React.useEffect(() => {
    // https://app.onesignal.com/apps/e973c5b3-897f-415c-95e5-279b1068654e/settings/keys_and_ids
    OneSignal.init('6cd1520b-612f-4b7e-878d-2d965a2dec13');

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    return () => {
      OneSignal.removeEventListener('received');
      OneSignal.removeEventListener('opened');
      OneSignal.removeEventListener('ids');
    };
  }, []);
  return 0;
};
