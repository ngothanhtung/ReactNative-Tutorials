/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import remoteConfig from '@react-native-firebase/remote-config';

export default function RemoteConfigExample() {
  const [promotion, setPromotion] = React.useState(0);
  const [themeColor, setThemeColor] = React.useState('#8e44ad');

  React.useEffect(() => {
    // Although Remote Config is a data-store, it is not designed for frequent reads
    // Firebase heavily caches the parameters (default is 12 hours).
    // By design, this prevents the values being able to change frequently and potentially cause users confusion.
    remoteConfig()
      .fetch(5)
      .then((result) => {});

    remoteConfig()
      .setDefaults({
        holiday_promotion: 0,
        theme_color: '#8e44ad',
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then((fetchedRemotely) => {
        if (fetchedRemotely) {
          console.log('Configs were retrieved from the backend and activated.');
        } else {
          console.log('No configs were fetched from the backend, and the local configs were already activated');
        }

        // get single value
        // const holiday_promotion = remoteConfig().getValue('holiday_promotion');
        // setPromotion(holiday_promotion.asNumber());

        // get multi values
        const values = remoteConfig().getAll();
        setPromotion(values.holiday_promotion.asNumber());
        setThemeColor(values.theme_color.asString());
        console.log(values);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themeColor }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Holiday promotion: {promotion}%</Text>
    </SafeAreaView>
  );
}
