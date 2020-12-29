/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function AnalyticsExample() {
  return (
    <View>
      <Button
        title="Add To Basket"
        onPress={async () => {
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          });
        }}
      />

      <Button
        title="Press me"
        // Logs in the firebase analytics console as "select_content" event
        // only accepts the two object properties which accept strings.
        onPress={async () =>
          await analytics().logSelectContent({
            content_type: 'clothing',
            item_id: 'abcd',
          })
        }
      />
    </View>
  );
}
