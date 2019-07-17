// https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
import { Platform } from 'react-native';
import firebase from 'react-native-firebase';

display = (title, body, data) => {
  const notification = new firebase.notifications.Notification();
  notification.setNotificationId(`id_${new Date().getTime().toString()}`);
  notification.setTitle(title);
  notification.setSubtitle('Thông báo');
  notification.setBody(body);
  notification.setSound('default');
  notification.setData(data);

  if (Platform.OS === 'android') {
    notification.android.setColor('#d63031');
    notification.android.setAutoCancel(true);
    notification.android.setPriority(firebase.notifications.Android.Priority.High);
    notification.android.setChannelId('default');
    notification.android.setLocalOnly(true);
    notification.android.setUsesChronometer(true);
    notification.android.setBigText(body);
    notification.android.setClickAction('ACTION');
    notification.android.setSmallIcon('ic_notification');
  }
  firebase.notifications().displayNotification(notification);
};

// add other navigation functions that you need and export them

export default {
  display,
};
